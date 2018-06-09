export default {
	// setting for mysql
	mysql: {
		host:"127.0.0.1",
		port:"3306",
		username:"root",
		password:"111111",
		database:"mysql",
		prefix:"xx_"
	},
	// setting for mongodb
	mongodb: {
		host:"127.0.0.1",
		port:"3306",
		username:"",
		password:"",
		database:"",
		prefix:"xx_"
	},
	// setting for sqlite
	sqlite: {
		host:"127.0.0.1",
		port:"3306",
		username:"",
		password:"",
		database:"",
		prefix:"xx_"
	},
	// 设置默认数据库类型
	driver: "mysql"
}