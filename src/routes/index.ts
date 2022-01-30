import Router from 'koa-router';
import userRouter from './users';


const router = new Router({prefix: '/api'});

router.use(userRouter.routes());
router.use(userRouter.allowedMethods());

export default router;
