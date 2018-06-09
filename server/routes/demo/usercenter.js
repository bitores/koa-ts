import KoaRouter from 'koa-router';
import userCenterCtrl from '../../controllers/UserCenterController';

const usercenter = new KoaRouter();

usercenter.get('/', (ctx, next) => {
	ctx.body = {
        code: 0,
        data: [],
        msg:[]
    }
})


export default usercenter;