/**
 * Org.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * orgCode: 机构代码
 * orgName: 机构名称
 * parentId： 父机构代码 -1表示无父机构
 * dutyPerson: 责任人
 */
module.exports = {
    tableName: "org",
    attributes: {
        orgCode: { type: 'string', required: true },
        orgName: { type: 'string', required: true },
        parentId: { type: 'string', required: true },
        dutyPerson: { type: 'string', required: true }
    }
};