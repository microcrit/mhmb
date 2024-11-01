import Logger from '@ptkdev/logger';
import { Database } from 'bun:sqlite';
import { Lucia } from 'lucia';

export default interface ServiceThroughput {
    config: Config;
    logger: Logger;
    auth: Lucia;
}