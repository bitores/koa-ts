import sequelize from '../tool/dbUtil';

const Task = sequelize.define("Task", {
    // auto increment, primaryKey, unique
    id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true, unique : true},

    // comment
    title : {type : Sequelize.STRING, comment : 'Task title'},

    // allow null
    description : {type : Sequelize.TEXT, allowNull : true},

    // default value
    deadline : {type : Sequelize.DATE, defaultValue : Sequelize.NOW}
});

export default Task;