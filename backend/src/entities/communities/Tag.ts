import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class CommunityPost {
    @PrimaryKey({ autoincrement: true, nullable: false })
    id: bigint = BigInt(0);

    @Property({ type: "text" })
    label?: string;

    @Property({ type: "text" })
    description?: string;

    @Property({ type: "text", nullable: false })
    belongsTo: bigint = BigInt(0);

    @Property({ type: "array" })
    posts: bigint[] = [];

    constructor(label: string) {
        this.label = label;
    }
}