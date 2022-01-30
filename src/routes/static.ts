import Router from 'koa-router';


// Constants
const router = new Router();


/**
 * Serve html.
 */
router.get('', async (ctx, next) => {
    ctx.type = 'html';
    ctx.body = '<b>Hello Koa</b>';
    await next();
});


// Export default
export default router;
