import './pre-start';
import logger from 'jet-logger';
import app from './server';


// Constants
const serverStartMsg = 'Koa Started on port localhost:',
    port = 3000;

// Start server
app.listen(port, () => {
    logger.imp(serverStartMsg + port);
});
