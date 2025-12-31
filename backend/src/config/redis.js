import Radis from "ioredis";
import { env } from "./env.js";
import { logger } from "../utils/logger.js";

const redisClient = new Redis({
    host: env.redis.host,
    port: env.redis.port,
    password: env.redis.password || undefined,
    retryStrategy: (times) => {
        const delay = Math.min(times * )
    }
})