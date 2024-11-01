import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

import Logger from "@ptkdev/logger";

import { MikroORM, RequestContext, Utils, wrap } from '@mikro-orm/better-sqlite';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

import ApiGroup from "./groups/api";

import ServiceThroughput from "./types/ServiceThrough";

import { fileURLToPath } from "url";
import path, { dirname } from "path";

import fs from "fs";
import os from "os";

import watch from "node-watch";

import loadConfig from "./utils/confLoad";
import { spawnSync } from "child_process";

import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import sqlite from "better-sqlite3";

import { getConfig, setConfig } from "./stores/ConfigStore";

let __dirname = dirname(fileURLToPath(import.meta.url));

if (os.platform() == "win32") {
  __dirname = __dirname.replace(/\\/g, "/");
}

const configRoot = path.join(__dirname, "..", "..", "config.json");

const logger = new Logger();

const config = await loadConfig(configRoot, logger);
setConfig(config);

const dbRoot = path.join(__dirname, "..", "..", config.database?.file_name || "db.sqlite");

if (process.env.NODE_ENV == "development") {
  if (fs.existsSync(dbRoot))
    fs.unlinkSync(dbRoot);
} else {
  if (!fs.existsSync(dbRoot))
    logger.warning("`db.sqlite` does not exist in project root already and will have to be created.")
}

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

const sessionDbRoot = path.join(__dirname, "..", "..", path.basename(config.database?.file_name || "db") + "_session.db");

const auth = new Lucia(new BetterSqlite3Adapter(sqlite(sessionDbRoot), {
  user: "users",
  session: "sessions"
}));

const orm = await MikroORM.init({
  metadataProvider: TsMorphMetadataProvider,
  entitiesTs: [path.join(__dirname, "entities")],
  dbName: 'mhmb'
});

const through: ServiceThroughput = {
  config,
  logger,
  auth
};

new Elysia({
  name: config.meta.application
})
  .on("beforeHandle", () => RequestContext.enter(orm.em))
  .on("afterHandle", ({ response }) => Utils.isEntity(response) ? wrap(response).toObject() : response)
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