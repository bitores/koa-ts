import sequelize from '../tool/dbUtil';

const UserAddress = sequelize.define("UserAddress", {
    // 
    id: { type: DataTypes.BIGINT(11), autoIncrement: true, primaryKey: true, unique: true, comment:'主键' },

    //
    userId: {type: DataTypes.BIGINT(11), field: 'user_id', allowNull: false, comment:'用户Id' },

    //
    consignee : { type: DataTypes.STRING, field: 'consignee', allowNull: false, comment:'收货人' },

    //
    address: { type: DataTypes.STRING(1024), field: 'address', allowNull: false, comment:'详细地址' },

    //
    zipCode: { type: DataTypes.STRING(16), field: 'zip_code', allowNull: true, comment:'邮编' },

    //
    tel: { type: DataTypes.STRING(32), field: 'tel', allowNull: false, comment:'电话' }
}, {
    // 自动添加 createdAt、updatedAt 两个时间戳字段
    timestamps: false,
    // 使用“蛇型命名”规则： createdAt ====> created_at
    underscored: true,
    freezeTableName: true,
    tableName: 'userAddress',
    comment: '用户地址表',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    indexes: [{
      name: 'userAddress_userId',
      method: 'BTREE',
      fields: ['user_id']
    }]
});

export default UserAddress;