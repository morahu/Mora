import "winston-daily-rotate-file"
import { createLogger, format, transports } from "winston";
import fs from "fs";
import path from "path";
import winston from "winston/lib/winston/config";

const logDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

export const getLogger = (filename: string) => {
    winston.addColors({
        error: "red",
        warn: "yellow",
        info: "green",
        debug: "blue"
    });

    return createLogger({
        level: process.env.NODE_ENV === "production" ? "info" : "debug",
        format: format.combine(
            format.timestamp({
                format: "YYYY-MM-DD HH:mm:ss"
            }),
            format.errors({ stack: true }),
            format.splat(),
            format.json()
        ),
        transports: [
            new transports.Console({
                format: format.combine(
                    format.colorize(),
                    format.printf(
                        info => `${info.timestamp} ${info.level}: ${info.message}`
                    )
                )
            }),
            new transports.DailyRotateFile({
                filename: path.join(logDir, `${filename}.%DATE%.log`),
                datePattern: "YYYY-MM-DD",
                zippedArchive: true,
                maxSize: "20m",
                maxFiles: "14d"
            })
        ]
    })
}
const logger = getLogger("app");
logger.info("Logger initialized", { service: "my-service" });