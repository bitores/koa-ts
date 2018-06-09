import KoaRouter from 'koa-router';
import jwt from 'jsonwebtoken';
import jwtKoa from 'koa-jwt';
import util from 'util';

const verify = util.promisify(jwt.verify);//


const API = new KoaRouter();

const secret = 'jwt demo';

API
// .get('/', async (ctx, next)=>{
//     ctx.body = '进入 API area'
// })
// .use(jwtKoa({
//     secret:"jwt demo"
// }).unless({
//     path:''
// }))
.options('/login', (ctx, next) => {
    ctx.set('Access-Control-Allow-Method', 'POST');
    ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin);
    ctx.response.status = 200
    ctx.body='options ok'

})
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
// 添加 koa-body后 ctx.request.body 参数才可以取到
.post('/login', (ctx, next) => {
    const user = ctx.request.body
    if(user && user.name) {
        let userToken = {
            name: user.name
        }
        const token = jwt.sign(userToken, secret, {expiresIn: '1h'})  //token签名 有效期为1小时
        // 跨域无法写 cookies 成功
        // ctx.cookies.set(
        //   'token', 
        //   token,
        //   {
        //     domain: 'localhost:8000',  // 写cookie所在的域名
        //     path: '/',       // 写cookie所在的路径
        //     maxAge: 10 * 60 * 1000, // cookie有效时长
        //     expires: new Date('2018-05-25'),  // cookie失效时间
        //     httpOnly: false,  // 是否只用于http请求中获取
        //     overwrite: false  // 是否允许重写
        //   }
        // )
        ctx.body = {
            message: '获取token成功',
            code: 1,
            token
        }
    } else {
        ctx.body = {
            message: '参数错误',
            code: -1,
            data: ctx.params
        }
    }
})
.get('/userinfo', async (ctx) => {
    const token = ctx.header.authorization  // 获取jwt
    let payload
    if (token) {
        payload = await verify(token.split(' ')[1], secret)  // // 解密，获取payload
        ctx.body = {
            payload:'token'
        }
    } else {
        ctx.body = {
            message: 'token 错误',
            code: -1
        }
    }
})
// resetful  url
.all('/upload', async (ctx)=>{
	ctx.body="upload all"
})
.get('/user/:name',async (ctx)=>{
	// 查
	ctx.body="user get"
})
.post('/user/:name', async (ctx)=>{
	// 增
	ctx.body="user post"
})
.put('/user/:name', async (ctx)=>{
	// 更新
	ctx.body="user put"
})
.del('/user/:name', async (ctx)=>{
	// 删除
	ctx.body="user del"
})



// home.redirect('');

export default API;