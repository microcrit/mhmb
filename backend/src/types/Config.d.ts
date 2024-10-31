export default interface Config {
    meta: {
        application: string;
        description: string;
    };

    server?: {
        hostname?: string;
        port?: number;
    };

    database?: {
        file_name?: string;
        strict: boolean;
    }
}