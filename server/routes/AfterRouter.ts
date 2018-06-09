const AfterRoutHander = () => {
	// 此处可以 添加 错误匹配处理
	return (ctx, next) =>{
		console.log('after router...');
		switch(ctx.status) {
			case 404:
				// ctx.redirect('/home');
				ctx.body = '没有找到内容 - 404';
				break;
			default: {
				// ctx.redirect('/home');
			}
		}
		return next();
	}
}

export default AfterRoutHander;