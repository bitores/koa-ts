import sequelize from '../tool/dbUtil';
import { EAGAIN } from 'constants';
import { userInfo } from 'os';

const User = sequelize.define("User", {
    // auto increment, primaryKey, unique
    id:{type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true},

    // string ,not null
    username: { type: DataTypes.STRING,  allowNull: false, comment:'用户名' },

    // string ,not null
    password: { type: DataTypes.STRING, allowNull: false, comment:'用户密码' },

    // string ,not null, default true
    active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true, comment:'是否正常状态' }
}, {
    // 自动添加 createdAt、updatedAt 两个时间戳字段
    timestamps: true,
    // 使用“蛇型命名”规则： createdAt ====> created_at
    underscored: true,
    // 软删除 deleteAt
    paranoid: true,
    freezeTableName: true,
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

export default User;

// eg.
// UserInfo.findAll({
//     attributes:['Host','User','Password']
// })
// .then('success', (res)=>{
//     console.log(res)
// })
// .then('failure', (err)=>{
//     console.log(err)
// })

// or

// await userInfo.findAll()