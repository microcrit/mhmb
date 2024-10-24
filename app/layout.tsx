import type React from "react";
import { Providers } from "./providers";

import "@/styles/globals.css";
import bootstrapDB from "./utils/bootstrapDB";
import ServerProps from "./types/ServerProps";

import { schema, SqlDatabase } from 'sqlite3orm';

import fs from "fs";
import { IssueModel, MicroblogModel, ReplyModel, UserModel } from "./models/Models";

export const metadata = {
    title: "MHMB",
    description: "A mental health and mindfulness microblogging platform.",
};

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    let serverMeta: ServerProps;

    async function create() {
        "use server";

        const db = new SqlDatabase();
        await db.open('file:db.sqlite?mode=memory&cache=shared');

        await schema().createTable(db, UserModel);
        await schema().createTable(db, MicroblogModel);
        await schema().createTable(db, IssueModel);
        await schema().createTable(db, ReplyModel);

        const config = fs.readFileSync("config.json", "utf-8");
        const parsedConfig = JSON.parse(config);

        serverMeta = {
            meta: {
                title: parsedConfig.title,
                description: parsedConfig.description,
            },
            reactionTypes: parsedConfig.reactionTypes,
        };
    }

    return (
        <html lang="en" className="dark">
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}