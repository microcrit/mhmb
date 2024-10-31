import ServiceThroughput from "@/types/ServiceThrough";
import Elysia, { Context, t } from "elysia";

export default ({ config, database }: ServiceThroughput): Elysia =>
    new Elysia()
        .get("/meta", ({ error }) => {
            if (!config.meta) {
                return error(500, "No meta found in server configuration.");
            }

            return config.meta;
        }, {
            response: {
                200: t.Object({
                    application: t.String(),
                    description: t.String()
                }),
                500: t.String()
            }
        });