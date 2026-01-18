import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./src/config/db.js";
import { logger } from "./src/utils/logger.js";
import { env } from "./src/config/env.js";

// Import routes
import authRoutes from "./src/routes/auth.routes.js";
import loanRoutes from "./src/routes/loanRoutes.js";
import lenderRoutes from "./src/routes/lenderRoutes.js";
import applicationRoutes from "./src/routes/applicationRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js"; // Admin routes
import { errorHandler } from "./src/middleware/error.js";
import autoloanRoutes from "./src/routes/autoRoutes.js";
import personalLoanRoutes from "./src/routes/personalLoanRoutes.js";
import bussinessLoanRoutes from "./src/routes/bussinessLoanRoutes.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import userRouteInfo from "./src/routes/userInfoRoute.js";
import dashboardRoutes from "./src/routes/dashboardRoutes.js";

const app = express();

// Middleware - MUST come before routes
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  env.frontendUrl,
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Test route to verify server is working
app.post("/api/test", (_req, res) => {
  res.json({ message: "POST route is working" });
});

// Routes - More specific routes must come before general ones
logger.info("Registering routes...");
app.use("/api/auth", authRoutes);
logger.info("Auth routes registered at /api/auth");
app.use("/api/loans", loanRoutes);
app.use("/api/lenders", lenderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);
// Specific application routes must come before general /api/applications
app.use("/api/applications/personal", personalLoanRoutes);
app.use("/api/applications/auto", autoloanRoutes);
app.use("/api/applications", applicationRoutes); // Home loan (general route last)
app.use("/api/applications/bussiness", bussinessLoanRoutes);
app.use("/api/user", userRouteInfo);


app.use("/api/dashboard", dashboardRoutes);

// 404 handler for unmatched routes (must be after all routes)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.path} not found`,
  });
});

// Error handler
app.use(errorHandler);

// Start server
const start = async () => {
  try {
    await connectDB();

    app.listen(env.port, () => {
      logger.info(`🚀 Server running on port ${env.port}`);
    });
  } catch (err) {
    logger.error("❌ Server failed to start", err);
    process.exit(1);
  }
};

start();
