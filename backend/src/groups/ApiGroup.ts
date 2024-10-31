import InfoService from "@/services/info";
import ServiceThroughput from "@/types/ServiceThrough";
import Elysia from "elysia";

export default (through: ServiceThroughput) => 
    new Elysia()
        .group("/info", () => InfoService(through));