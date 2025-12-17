import { logger } from "../utils/logger.js";

export const errorHandler = (err, req, res, _next) => {
  const status = err.statusCode || 500;
  const message =
    status === 500 ? "Something went wrong. Please try again." : err.message;

  logger.error("Request failed", {
    status,
    message: err.message,
    path: req.path,
    method: req.method,
  });

  res.status(status).json({
    success: false,
    error: message,
  });
};
