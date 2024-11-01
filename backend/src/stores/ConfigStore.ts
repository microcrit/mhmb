import Config from "@/types/Config";

let config: Config;

export function setConfig(newConfig: Config) {
    config = newConfig;
}

export function getConfig() {
    return config;
}