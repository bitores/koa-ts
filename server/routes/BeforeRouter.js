const BeforeRoutHander = () => {
	// 此时可以过滤或者说全局 拦截路由。。。
	return (ctx, next) => {
		console.log('before router...', ctx.url);
		


		return next();
	}
	
}

export default BeforeRoutHander;