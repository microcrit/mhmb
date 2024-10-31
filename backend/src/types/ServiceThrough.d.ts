import Logger from '@ptkdev/logger';
import { Database } from 'bun:sqlite';

export default interface ServiceThroughput {
    config: Config;
    database: Database;
    logger: Logger;
}