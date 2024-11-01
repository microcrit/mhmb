import { Permission } from "./internal/Permission";

export default interface Config {
    meta: {
        application: string;
        description: string;
    };

    server?: {
        hostname?: string;
        port?: number;
    };

    users?: {
        roles: Record<string, Permission[]>;
        sessions?: {
            expiryMinutes?: number;
        };
    }

    database?: {
        file_name?: string;
        strict: boolean;
    }
}