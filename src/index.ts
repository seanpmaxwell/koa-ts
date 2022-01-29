/**
 * Setup/start the koa server.
 * 
 * created by Sean Maxwell, 1/28/2022
 */

import './pre-start';
import Koa from 'koa';
import koaLogger from 'koa-logger';
import json from 'koa-json';
import logger from 'jet-logger';
import bodyParser from 'koa-bodyparser';
import staticLogger from './routes/users';


// Constants
const app = new Koa(),
    serverStartMsg = 'Koa Started on port localhost:',
    port = 3000;

// Middlewares
app.use(bodyParser());
app.use(json());
app.use(koaLogger());

// Routes
app.use(staticLogger.routes());
app.use(staticLogger.allowedMethods());

// Start server
app.listen(port, () => {
    logger.imp(serverStartMsg + port);
});
