import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Community {
    @PrimaryKey({ autoincrement: true, nullable: false })
    id: bigint = BigInt(0);

    @Property({ unique: true, nullable: false })
    label: string;

    @Property({ unique: true })
    tags: string[] = [];

    @Property()
    owner: bigint = BigInt(0);

    @Property({ type: "array" })
    admins: bigint[] = [];

    @Property()
    approver: bigint = BigInt(0);

    @Property({ type: "text" })
    description: string = "";

    @Property({ type: "array" })
    members: bigint[] = [];

    @Property({ type: "array" })
    posts: bigint[] = [];

    constructor(label: string) {
        this.label = label;
    }
}