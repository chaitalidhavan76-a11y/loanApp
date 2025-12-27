import dotenv from "dotenv";
dotenv.config(); // Load env first

import { env } from "./src/config/env.js";
import express from "express";
import cors from "cors"; // ES6 import only
import cookieParser from "cookie-parser";
import { connectDB } from "./src/config/db.js";
import { logger } from "./src/utils/logger.js";
import authRoutes from "./src/routes/auth.routes.js";
import bcrypt from "bcryptjs";

const app = express();

// Middleware - MUST come before routes
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

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