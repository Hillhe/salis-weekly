/**
 * Area.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * areaname: 名称
 * status: 状态
 */
module.exports = {
    tableName: "area",
    attributes: {
        areaname: {type: 'string'},
        status: {type: 'string', defaultsTo: '0'}
    }
};