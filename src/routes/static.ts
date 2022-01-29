import Router from 'koa-router';
import userService from '../services/user';


// Constants
const router = new Router();


/**
 * Hello worlds
 */
router.get('/users/:id', async (ctx, next) => {
    // ctx.body = { msg: 'Hello World'};
    const userId = +ctx.params['id'];
    const userStr = userService.getUserInfoAsString(userId);
    ctx.body = userStr;
    await next();
});


// Export default
export default router;
