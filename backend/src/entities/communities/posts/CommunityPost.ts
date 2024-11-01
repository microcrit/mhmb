import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class CommunityPost {
    @PrimaryKey({ autoincrement: true, nullable: false })
    id: bigint = BigInt(0);

    @Property({ nullable: false })
    author: bigint = BigInt(0);

    @Property({ type: "text" })
    title?: string;

    @Property({ type: "text" })
    content?: string;

    @Property({ type: "array" })
    attachments?: string[];

    @Property({ type: "array" })
    replies: bigint[] = [];

    @Property({ type: "array" })
    tags: bigint[] = [];
}