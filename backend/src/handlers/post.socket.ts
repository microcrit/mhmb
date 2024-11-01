import ServiceThroughput from "@/types/ServiceThrough";
import Elysia from "elysia";

export default ({ config, database }: ServiceThroughput): Elysia =>
    new Elysia()
        .ws("/posts/:uid", {
            open: (ws) => {

            },
            message: (ws, message) => {

            }
        });