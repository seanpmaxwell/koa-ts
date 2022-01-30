import Router from 'koa-router';
import userService from '../services/userService';


// Constants
const router = new Router({prefix: '/users'});

// Paths
const p = {
    getOne: '/:id',
    addOne: '',
};

// API responses
const responses = {
    postSuccess: 'User successfully posted',
};


/**
 * Fetch a user by id.
 */
router.get(p.getOne, async (ctx, next) => {
    // ctx.body = { msg: 'Hello World'};
    const userId = +ctx.params['id'];
    const userStr = await userService.getUserAsString(userId);
    ctx.body = userStr;
    await next();
});


/**
 * Add one user.
 */
router.post(p.addOne, async (ctx, next) => {
    const user = ctx.request.body;
    await userService.addOne(user);
    ctx.body = responses.postSuccess;
    await next();
});


// Export default
export default router;
