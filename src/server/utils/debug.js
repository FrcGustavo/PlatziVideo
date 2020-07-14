import debug from 'debug';
import config from '../config';

export const info = debug(`${config.logPrefix}:info`);
export const dev = debug(`${config.logPrefix}:dev`);
export const error = debug(`${config.logPrefix}:error`);
