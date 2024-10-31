import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

import Logger from "@ptkdev/logger";

import { Database } from "bun:sqlite";

import ApiGroup from "./groups/ApiGroup";

import ServiceThroughput from "./types/ServiceThrough";

import { fileURLToPath } from "url";
import path, { dirname } from "path";

import fs from "fs";
import os from "os";

import watch from "node-watch";

import loadConfig from "./utils/confLoad";
import { spawnSync } from "child_process";

let __dirname = dirname(fileURLToPath(import.meta.url));

if (os.platform() == "win32") {
  __dirname = __dirname.replace(/\\/g, "/");
}

const configRoot = path.join(__dirname, "..", "..", "config.json");

const logger = new Logger();

const config = await loadConfig(configRoot, logger);

const dbRoot = path.join(__dirname, "..", "..", config.database?.file_name || "db.sqlite");

if (process.env.NODE_ENV == "development") {
  if (fs.existsSync(dbRoot))
    fs.unlinkSync(dbRoot);
} else {
  if (!fs.existsSync(dbRoot))
    logger.warning("`db.sqlite` does not exist in project root already and will have to be created.")
}

const through: ServiceThroughput = {
  config,
  database: new Database(dbRoot, {
    strict: config.database?.strict || false,
    safeIntegers: config.database?.strict || false,
    readwrite: true,
    create: true
  }),
  logger
};

const frontendRoot = path.join(__dirname, "..", "..", "frontend");

async function buildVite() {
  logger.info("Building frontend...");
  const r = spawnSync("bun", ["x", "vite", "build"], {
    shell: true,
    cwd: frontendRoot,
    stdio: "pipe"
  });
  
  if (r.status != 0) {
    logger.error(" ~> Failed to build frontend");
    logger.error(r.stderr.toString());
    process.exit(1);
  }
  logger.info(" ~> Frontend built");
}

if (!fs.existsSync(path.join(frontendRoot, "dist"))) {
  logger.warning("I have to build the frontend. This may take a while.");
  await buildVite();
}

const app = new Elysia({
  name: config.meta.application
})
  .use(staticPlugin({
    prefix: "/",
    assets: path.join(frontendRoot, "dist"),
    indexHTML: true
  }))
  .group("/api", () => ApiGroup(through))
  .listen({
    hostname: through.config?.server?.hostname || "localhost",
    port: through.config?.server?.port || 3000
  }, () => {
    logger.info(`Server listening on http://${through.config?.server?.hostname || "localhost"}:${through.config?.server?.port || 3000}`);
  });

if (process.env.NODE_ENV == "development") {
  logger.info("Watching frontend...");
  watch(frontendRoot, { recursive: true }, buildVite);
}