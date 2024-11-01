import Logger from "@ptkdev/logger";

let logger: Logger;

export function setLogger(newLogger: Logger) {
    logger = newLogger;
}

export function getLogger() {
    return logger;
}