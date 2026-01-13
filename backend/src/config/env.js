import dotenv from "dotenv";

dotenv.config();

// console.log("env variable loading:");
// console.log("PORT:",process.env.PORT);
// console.log("MONOGO_URL:",process.env.MONGO_URL);

export const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET || "dev-secret",
  jwtExpiry: process.env.JWT_EXPIRY || "8h",
  frontendUrl: process.env.FRONTEND_URL || "",
};
