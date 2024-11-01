import { ReactionType } from "@/types/internal/Reaction";
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class MicroblogPost {
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

    @Property({ type: "jsonb" })
    reactions?: Record<ReactionType, bigint[]>; // { "like": [1, 2, 3] }
}