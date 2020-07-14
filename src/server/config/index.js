import dotenv from 'dotenv';

dotenv.config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  logPrefix: process.env.LOG_PREFIX || 'app',
};

export default config;
