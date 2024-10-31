import Logger from "@ptkdev/logger";

export function exitCode(text: string, logger: Logger) {
    logger.info(text);
    process.exit(1);
}