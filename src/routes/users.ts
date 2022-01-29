import Router from 'koa-router';
import userService from '../services/userService';


// Constants
const router = new Router();


/**
 * Fetch a user by id.
 */
router.get('/users/:id', async (ctx, next) => {
    // ctx.body = { msg: 'Hello World'};
    const userId = +ctx.params['id'];
    const userStr = await userService.getUserInfoAsString(userId);
    ctx.body = userStr;
    await next();
});


/**
 * Add one user.
 */
router.post('/users', async (ctx, next) => {
    const user = ctx.request.body;
    await userService.addOne(user);
    ctx.body = 'User successfully posted';
    await next();
});


// Export default
export default router;
