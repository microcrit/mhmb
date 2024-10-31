import Config from "@/types/Config";
import Logger from "@ptkdev/logger";

import path from "path";
import { exitCode } from "./fns";

export default async function loadConfig(file: string, logger: Logger): Promise<Config> {
    const fl = Bun.file(file);
    if (!await fl.exists()) {
        exitCode("Could not find `config.json` in project root.", logger);
    }
    const config = await fl.json();

    return config as Config;
}