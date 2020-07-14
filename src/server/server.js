import express from 'express';
import main from './routes/main';

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

app.get('*', main);

app.listen(config.port, (err) => {
  if (err) console.log(err);
  console.log(`Server running on ${config.port}`);
});
