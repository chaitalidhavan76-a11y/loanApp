import winston from "winston";

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.printf(({ message }) => message),
  transports: [
    new winston.transports.Console(),
  ],
});
