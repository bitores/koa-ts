import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';


export default () => {
  // console.log('ok')
}

// 发送Email（目前使用的是阿里云SMTP发送邮件）
// receivers 目标邮箱，可以用英文逗号分隔多个。（我没试过）
// subject 邮件标题
// text 文本版本的邮件内容
// html HTML版本的邮件内容
// 返回
// result 200是成功，500是失败
// info 是返回的消息，可能是结果的文本，也可能是对象。（这个错误不要暴露给用户）
export let sendemail = (receivers, subject, text, html) => {
  return new Promise(function (resolve) {
  	// v1
    // let transporter = nodemailer.createTransport('smtp://' + mailConfig.username + ':' + mailConfig.password + '@' + mailConfig.service)
    // v2
    let transporter = nodemailer.createTransport({
    	host: mailConfig.host,
	    port: mailConfig.port,
	    secureConnection: false, // secure:true for port 465, secure:false for port 587
	    auth: {
	      user:  mailConfig.username,
	      pass:  mailConfig.password
	    },
	    tls: { ciphers: 'SSLv3' }
    });

    // setup e-mail data with unicode symbols
    let mailOptions = {
      from: mailConfig.sender_address, // sender address
      to: receivers,
      subject: subject,
      text: text || 'Hello world 🐴', // plaintext body
      html: html || '<b>Hello world 🐴</b>' // html body
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
      	console.log("send mail ...... error!!",error.response);
        resolve({
          result: 500,
          info: error
        })
      } else {
      	console.log("send mail ...... success!!", info.response);
        resolve({
          result: 200,
          info: info.response
        })
      }
    })
  })
}
