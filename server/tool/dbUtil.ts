import Sequelize from 'sequelize';
import dbconfig from '../config/db';

const {mysql} = dbconfig;
// 建立连接
const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, {
	host: mysql.host,
	dialect: dbconfig.driver,

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});


export default sequelize;


// import sequelize from '../tool/dbUtil';

// sequelize
// .authenticate()
// .then(() => {
// 	console.log('Connection has been established successfully.');
// })
// .catch(err => {
// 	console.error('Unable to connect to the database:', err);
// });

// sequelize 使用文档：
// https://itbilu.com/nodejs/npm/VkYIaRPz-.html
// http://docs.sequelizejs.com/manual/installation/getting-started.html