import { env } from "./src/config/env.js";
import { connectDB } from "./src/config/db.js";
import app from "./src/app.js";
import { logger } from "./src/utils/logger.js";

const start = async () => {
  try {
    await connectDB();

    app.listen(env.port, () => {
      logger.info(`🚀 Server running on port ${env.port}`);
    });
  } catch (err) {
    logger.error("❌ Server failed to start");
    process.exit(1);
  }
};

start();
