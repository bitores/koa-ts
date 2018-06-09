import * as Koa2 from 'koa';
import * as assetsPath from 'koa-static2';
import * as cors from 'koa2-cors';
import * as koaBody from 'koa-body';
import * as views from 'koa-views';
import * as proxy from 'koa-proxy2';
import path from 'path';


import LogWrite from '../middleware/LogWrite';

import server from '../config/server';
import assets, {docs} from '../config/assets';
import coreConfig from '../config/cors';
import proxyConfig from '../config/proxy';

import router from '../routes/index';
import BeforeRouter from '../routes/BeforeRouter';
import AfterRouter from '../routes/AfterRouter';

import mailUtil, {sendemail} from '../tool/mailUtil';


import '../job/index';


  
const app = new Koa2();

// 跨域设置
app
.use(cors(coreConfig))
// 访问及错误日志记录
.use(LogWrite())
// 代理请求
.use(proxy(proxyConfig))
// .use(views(__dirname+'/../docs/', {
//   extension: 'html'
// }))
// 设置 api doc 文档 可访问地址
.use(assetsPath(docs.name,docs.path, docs.options))
// 先 koa-static 再 koa-router,不然有冲突
.use(assetsPath(assets.name,assets.path, assets.options))
// 过滤请求参数 ，若不处理，后台比如 post 请求可能取不到 参数
.use(koaBody({
  multipart: true,
  strict: false,
  // formidable: {
  //   uploadDir: path.join(__dirname, '../assets/uploads/tmp')
  // },
  jsonLimit: '10mb',
  formLimit: '10mb',
  textLimit: '10mb'
}))
// 路由前处理
.use(BeforeRouter())
// 
.use(router.routes())
// 路由后处理
.use(AfterRouter())




app.listen(server.port);
console.log(`${server.name} is starting at port ${server.port}`)