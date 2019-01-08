/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * name: 项目名称
 * belongArea: 所属区域
 * dutyPeople: 责任人
 * prods: 产品
 * target: 目标
 */
module.exports = {
    tableName: "project",
    attributes: {
        name: {
            type: 'string'
        },
        belongArea: {
            type: 'number'
        },
        dutyPeople: {
            type: 'number'
        },
        prods: {
            type: 'string'
        },
        target: {
            type: 'string'
        }
    }
};