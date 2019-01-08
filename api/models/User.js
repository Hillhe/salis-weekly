/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * username: 用户名
 * realname: 真实姓名
 * password: 密码
 * email: 邮箱
 * phone: 电话
 * avatar: 头像
 * userType: 用户类型,0/1
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
        username: {
            type: 'string'
        },
        realname: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        phone: {
            type: 'string'
        },
        avatar: {
            type: 'string'
        },
        userType: {
            type: 'number'
        },
        orgCode: {
            type: 'string'
        },
        position: {
            type: 'string'
        },
        usualPlace: {
            type: 'string'
        },
        lastLogin:{
            type: 'string'
        },
        visitTimes: {
            type: 'number'
        },
        status: {
            type: 'number'
        }
    }
};