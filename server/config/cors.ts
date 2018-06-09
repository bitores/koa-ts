export default {
	origin: function(ctx) {
		if (ctx.url === '/home') {
		  return false;
		}
		// 客户端  credentials mode true时，origin 不能为*，只有为唯一
		return ctx.request.header.origin;
	},
	exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
	maxAge: 5,
	credentials: true,
	allowMethods: ['GET', 'POST', 'DELETE'],
	allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}