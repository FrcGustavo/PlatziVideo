import express from 'express';
import logger from 'morgan';
import main from './routes/main';

import { info, error } from './utils/debug';

import loadConfigDev from './utils/loadConfigDev';
import loadConfigProd from './utils/loadConfigProd';
import config from './config';

const app = express();

app.use(express.static(`${__dirname}/public`));

if (config.env === 'development') {
  loadConfigDev(app);
} else {
  loadConfigProd(app);
}

app.use(logger('dev', { stream: { write: (msg) => info(msg) } }));

app.get('*', main);

app.listen(config.port, (err) => {
  if (err) error(err);
  info(`Server running on ${config.port}`);
});
