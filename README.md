# koa

```
日志
```





```
#  代理
koa-better-http-proxy
koa-connect
koa-http-proxy-middleware
koa-proxy
```

```
# JWT
JWT = base64编码(header) + '.' + base64编码(payload) + '.' + signature
```

```
# 自动获取当前目录下的文件并注册
require-directory
```

```
https://www.imspm.com/article/1469538547916?p=1&m=0
```

```
# 安装完 mysql 第一次登录无密码，要设置密码
> mysql -uroot -p
> set password for 'root'@'localhost'=password('new password');

# 忘记 root 密码时
> mysqld_safe --skip-grant-tables& mysql -uroot mysql
> UPDATE user SET password=PASSWORD('new Password') where user='root';
```

```
# nodemailer

sende address should be the same with username. or,  Client does not have permissions to send as this sender [TYAPR04MB2445.apcprd04.prod.outlook.com]
 
```

```
# api 文档

```

```
# 数据库操作

sequelize-cli -g
sequelize --save

sequelize 使用文档：
https://itbilu.com/nodejs/npm/VkYIaRPz-.html
http://docs.sequelizejs.com/manual/installation/getting-started.html
```


```
# node 定时任务


```


```
# 上传
1、图片上传
2、头像上传
3、文件上传
4、预览上传

http://www.cnblogs.com/axes/p/4603984.html

在移动端压缩图片并且上传主要用到filereader、canvas 以及 formdata 这三个h5的api。逻辑并不难。整个过程就是：

　　（1）用户使用input file上传图片的时候，用filereader读取用户上传的图片数据（base64格式）

　　（2）把图片数据传入img对象，然后将img绘制到canvas上，再调用canvas.toDataURL对图片进行压缩

　　（3）获取到压缩后的base64格式图片数据，转成二进制塞入formdata，再通过XmlHttpRequest提交formdata。

　　如此三步，就完成了图片的压缩和上传。

　　说起来好像挺简单，其实还是有些坑的。接下来就直接用代码进行分析：

# 获取图片数据

　　先是获取图片数据，也就是监听input file的change事件，然后获取到上传的文件对象files，将类数组的files转成数组，然后进行forEach遍历。

　　接着判断文件类型，如果不是图片则不作处理。如果是图片就实例化一个filereader，以base64格式读取上传的文件数据，判断数据长度，如果大于200KB的图片就调用compress方法进行压缩，否则调用upload方法进行上传。
# 图片压缩
在IOS中，canvas绘制图片是有两个限制的：

　　首先是图片的大小，如果图片的大小超过两百万像素，图片也是无法绘制到canvas上的，调用drawImage的时候不会报错，但是你用toDataURL获取图片数据的时候获取到的是空的图片数据。

　　再者就是canvas的大小有限制，如果canvas的大小大于大概五百万像素（即宽高乘积）的时候，不仅图片画不出来，其他什么东西也都是画不出来的。

　　应对第一种限制，处理办法就是瓦片绘制了。瓦片绘制，也就是将图片分割成多块绘制到canvas上，我代码里的做法是把图片分割成100万像素一块的大小，再绘制到canvas上。

　　而应对第二种限制，我的处理办法是对图片的宽高进行适当压缩，我代码里为了保险起见，设的上限是四百万像素，如果图片大于四百万像素就压缩到小于四百万像素。四百万像素的图片应该够了，算起来宽高都有2000X2000了。

　　如此一来就解决了IOS上的两种限制了。

　　除了上面所述的限制，还有两个坑，一个就是canvas的toDataURL是只能压缩jpg的，当用户上传的图片是png的话，就需要转成jpg，也就是统一用canvas.toDataURL('image/jpeg', 0.1) ， 类型统一设成jpeg，而压缩比就自己控制了。

　　另一个就是如果是png转jpg，绘制到canvas上的时候，canvas存在透明区域的话，当转成jpg的时候透明区域会变成黑色，因为canvas的透明像素默认为rgba(0,0,0,0)，所以转成jpg就变成rgba(0,0,0,1)了，也就是透明背景会变成了黑色。解决办法就是绘制之前在canvas上铺一层白色的底色。
　　
# 图片上传
完成图片压缩后，就可以塞进formdata里进行上传了，先将base64数据转成字符串，再实例化一个ArrayBuffer，然后将字符串以8位整型的格式传入ArrayBuffer，再通过BlobBuilder或者Blob对象，将8位整型的ArrayBuffer转成二进制对象blob，然后把blob对象append到formdata里，再通过ajax发送给后台即可。

因为是用了formdata提交，所以后台接数据的时候就跟普通form表单提交数据一样处理即可。
```



#### 入坑指南

```

1、使用 import|export等 es6/7 语法时引入 babel
2、使用 import 时 __dirname 值 与 require 不一样













```





