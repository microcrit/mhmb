import ServiceThroughput from "@/types/ServiceThrough";
import Elysia, { Context, t } from "elysia";

export default ({ config }: ServiceThroughput): Elysia =>
    new Elysia()
        .get("/login", ({ error }) => {
            return "";
        });