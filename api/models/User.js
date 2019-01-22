/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * username: 用户名
 * realname: 真实姓名
 * password: 密码, 默认MD5(123456)
 * email: 邮箱
 * phone: 电话
 * avatar: 头像
 * userType: 用户类型,0/1/2
 * orgCode: 所属组织
 * position: 职位
 * usualPlace: 常驻地
 * visitTimes： 访问次数
 * lastLogin: 最后登录时间
 * status: 用户状态，0/1
 */
module.exports = {
    tableName: "user",
    attributes: {
        username: { type: 'string', required: true },
        realname: { type: 'string', required: true },
        password: { type: 'string', defaultsTo: 'e10adc3949ba59abbe56e057f20f883e' },
        email: { type: 'string', defaultsTo: '' },
        phone: { type: 'string', defaultsTo: '' },
        avatar: { type: 'string', defaultsTo: '' },
        userType: { type: 'string', defaultsTo: '0' },
        orgCode: { type: 'string', defaultsTo: '' },
        position: { type: 'string', defaultsTo: '' },
        usualPlace: { type: 'string', defaultsTo: '' },
        lastLogin: { type: 'string', defaultsTo: '' },
        visitTimes: { type: 'string', defaultsTo: '0' },
        status: { type: 'string', defaultsTo: '0' }
    }
};