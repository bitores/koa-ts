import sequelize from '../tool/dbUtil';

const Role = sequelize.define("Role", {
    // auto increment, primaryKey, unique
    id:{type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true},

    // string ,not null
    username: { type: DataTypes.STRING,  allowNull: false, comment:'用户名' },

    // string ,not null
    password: { type: DataTypes.STRING, allowNull: false, comment:'用户密码' },

    // string ,not null, default true
    active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true, comment:'是否正常状态' }
}, {
    // 使用“蛇型命名”规则： createdAt ====> created_at
    underscored: true,
    freezeTableName: true,
    tableName: 'role',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

export default Role;