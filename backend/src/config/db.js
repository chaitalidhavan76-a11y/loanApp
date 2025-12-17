import mongoose from "mongoose";
import { env } from "./env.js";
import { logger } from "../utils/logger.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(env.mongoUri);
    logger.info("🔥 MongoDB connected successfully");
  } catch (err) {
    logger.error("❌ MongoDB connection failed");
    process.exit(1);
  }
};
