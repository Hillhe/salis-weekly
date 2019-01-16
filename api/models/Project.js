/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * name: 项目名称
 * area: 所属区域id
 * dutyPerson: 责任人
 * createPerson: 创建人
 * prods: 产品
 * summary: 概要
 * number：项目编号
 * prostatus：项目状态
 * wordpath: 项目文档
 * status: 状态
 * remark:备注
 */
module.exports = {
    tableName: "project",
    attributes: {
        name: {type: 'string', required: true},
        area: {type: 'string', required: true},
        dutyPerson: {type: 'string', required: true},
        createPerson: {type: 'string'},
        prods: {type: 'string'},
        summary: {type: 'string'},
        number: {type: 'string'},
        prostatus: {type: 'string'},
        wordpath: {type: 'string'},
        status: {type: 'string', defaultsTo: '0'},
        remark: {type: 'string'},
    }
};