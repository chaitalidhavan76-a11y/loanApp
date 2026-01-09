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
import router from "./src/routes/personalLoanRoutes.js";

const app = express();

// Middleware - MUST come before routes
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/loans", loanRoutes);
app.use("/api/lenders", lenderRoutes);
app.use("/api/applications", applicationRoutes); // NEW - Home Loan
app.use("/api/admin", adminRoutes);
app.use("/api/user", router);

app.use("/api/applications", applicationRoutes);
app.use("/api/applications/auto", autoloanRoutes);
// app.use("/api/application/personal", personalLoanRoutes);
app.use("/api/admin", adminRoutes); // Admin panel routes



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
