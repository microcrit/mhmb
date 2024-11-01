import Logger from "@ptkdev/logger";

export function enumSerializer(values: any[], logger: Logger) {
    return (y: any) => {
        if (values.includes(y)) {
            return y;
        }

        logger.error(`Invalid enum value: ${y}`);

        return false;
    };
}