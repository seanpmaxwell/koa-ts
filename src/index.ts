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
import apiRouter from './routes';
import staticRouter from './routes/static';


// Constants
const app = new Koa(),
    serverStartMsg = 'Koa Started on port localhost:',
    port = 3000;

// Middlewares
app.use(bodyParser());
app.use(json());
app.use(koaLogger());

// API Routes
app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());

// Static router
app.use(staticRouter.routes());
app.use(staticRouter.allowedMethods());

// Start server
app.listen(port, () => {
    logger.imp(serverStartMsg + port);
});
