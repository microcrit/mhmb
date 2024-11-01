import InfoService from "@/services/info";
import UsersService from "@/services/users";

import ServiceThroughput from "@/types/ServiceThrough";
import Elysia from "elysia";

export default (through: ServiceThroughput) => 
    new Elysia()
        .group("/info", () => InfoService(through))
        .group("/users", () => UsersService(through))