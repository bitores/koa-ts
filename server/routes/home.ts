import * as KoaRouter from 'koa-router';

const home = new KoaRouter();

home.get('/', (ctx, next) => {
	ctx.body = '欢迎来到 HOME'
})

home.get('/users', (ctx, next) => {
	ctx.body = "用户中心";
})

home.get('/users/:id', (ctx, next) => {
	// ctx.params = {id:0, }
	ctx.body =  ctx.params;
})

// home.redirect('');

export default home;