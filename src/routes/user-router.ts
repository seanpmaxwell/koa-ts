import Router from 'koa-router';
import userService from '@services/user-service';


// Paths
const p = {
    prefix: '/users',
    getOne: '/:id',
    addOne: '',
};

// API responses
const responses = {
    postSuccess: 'User successfully posted',
};

// Constants
const router = new Router({prefix: p.prefix});



/**
 * Fetch a user by id.
 */
router.get(p.getOne, async (ctx) => {
    // ctx.body = { msg: 'Hello World'};
    const userId = +ctx.params['id'];
    const userStr = await userService.getUserAsString(userId);
    ctx.body = userStr;
});


/**
 * Add one user.
 */
router.post(p.addOne, async (ctx) => {
    const user = ctx.request.body;
    await userService.addOne(user);
    ctx.body = responses.postSuccess;
});


// Export default
export default router;
