import { enumSerializer } from "@/utils/enumSerializer";
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

import { Permission } from "@/types/internal/Permission";

import { getLogger } from "@/stores/LoggerStore";
import { Feature } from "@/types/internal/Feature";
import { MicroblogProperties } from "@/types/internal/MicroblogProperties";

const logger = getLogger();

@Entity()
export class User {
    @PrimaryKey({ autoincrement: true })
    id: bigint = BigInt(0);

    @Property({ unique: true, nullable: false })
    username: string;

    @Property({ type: "enumArray" }) // permissions should default to reg. user in PermissionsBase (fuck you)
    permissions: Permission[] = [];

    @Property({ type: "enumArray" }) // AI is optional whore
    features: Feature[] = [];

    @Property({ type: "jsonb" })
    microblog: MicroblogProperties | undefined;

    @Property({ type: "array" })
    communities: bigint[] = [];

    @Property({ type: "array" })
    followers: bigint[] = [];

    @Property({ type: "array" })
    following: bigint[] = [];

    constructor(username: string) {
        this.username = username;
    }
}