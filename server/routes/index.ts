import * as KoaRouter from 'koa-router';
import home from "./home";
import API from "./api";
import proxy from './ProxyApi';

const router = new KoaRouter();

// 负责代理数据请求
router.use('/proxy', proxy.routes(), proxy.allowedMethods());
// 本地 数据提供
router.use('/api', API.routes(), API.allowedMethods());
// 本地 视图提供
router.use('/backend', home.routes(), home.allowedMethods());
router.get('/', async (ctx, next)=>{
	ctx.body =  "root route";
	// await ctx.render('../../docs/index.html')
})


export default router;