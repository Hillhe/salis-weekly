/**
 * System.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * key: 键
 * value: 值
 * name: 名称
 */
module.exports = {
    tableName: "sysconfig",
    attributes: {
        key: {type: 'string', required: true},
        value: {type: 'string', required: true},
        name: {type: 'string', defaultsTo: ''}
    }
};