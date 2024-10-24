import { field, id, table } from 'sqlite3orm';

@table({ name: 'USERS', autoIncrement: true })
export class UserModel {
    @id({ name: 'user_id', dbtype: 'INTEGER NOT NULL' })
    userId!: number;

    @field({ name: 'username', dbtype: 'TEXT NOT NULL' })
    username!: string;

    @field({ name: 'password', dbtype: 'TEXT NOT NULL' }) // bcrypt hashed
    password!: string;

    @field({ name: 'microblog_refs', dbtype: 'TEXT' }) // [...microblog_id]
    microblogRefs!: string;

    @field({ name: 'issue_refs', dbtype: 'TEXT' }) // [...issue_id]
    issueRefs!: string;

    @field({ name: 'publicity', dbtype: 'TEXT NOT NULL' }) // "friends" | "invite"
    publicity!: string;

    @field({ name: 'features', dbtype: 'TEXT' }) // [...<"ai">]
    features!: string;

    @field({ name: 'created_at', dbtype: 'TEXT NOT NULL' })
    createdAt!: string;
}

@table({ name: 'MICROBLOGS', autoIncrement: true })
export class MicroblogModel {
    @id({ name: 'microblog_id', dbtype: 'INTEGER NOT NULL' })
    microblogId!: number;

    @field({ name: 'user_id', dbtype: 'INTEGER NOT NULL' })
    userId!: number;

    @field({ name: 'content', dbtype: 'TEXT NOT NULL' })
    content!: string;

    @field({ name: 'reply_refs', dbtype: 'TEXT' }) // [...reply_id]
    replyRefs!: string;

    @field({ name: 'reactions', dbtype: 'TEXT' }) // { user_id: <id>, reaction: <"smile"|"frown"|"heart"> }
    reactions!: string;

    @field({ name: 'created_at', dbtype: 'TEXT NOT NULL' })
    createdAt!: string;
}

@table({ name: 'ISSUES', autoIncrement: true })
export class IssueModel {
    @id({ name: 'issue_id', dbtype: 'INTEGER NOT NULL' })
    issueId!: number;

    @field({ name: 'user_id', dbtype: 'INTEGER NOT NULL' })
    userId!: number;

    @field({ name: 'content', dbtype: 'TEXT NOT NULL' })
    content!: string;

    @field({ name: 'reply_refs', dbtype: 'TEXT' }) // [...reply_id]
    replyRefs!: string;

    @field({ name: 'reactions', dbtype: 'TEXT' }) // { user_id: <id>, reaction: <"smile"|"frown"|"heart"> }
    reactions!: string;

    @field({ name: 'created_at', dbtype: 'TEXT NOT NULL' })
    createdAt!: string;
}

@table({ name: 'REPLIES', autoIncrement: true })
export class ReplyModel {
    @id({ name: 'reply_id', dbtype: 'INTEGER NOT NULL' })
    replyId!: number;

    @field({ name: 'user_id', dbtype: 'INTEGER NOT NULL' })
    userId!: number;

    @field({ name: 'content', dbtype: 'TEXT NOT NULL' })
    content!: string;

    @field({ name: 'reactions', dbtype: 'TEXT' }) // { user_id: <id>, reaction: <"smile"|"frown"|"heart"> }
    reactions!: string;

    @field({ name: 'created_at', dbtype: 'TEXT NOT NULL' })
    createdAt!: string;
}