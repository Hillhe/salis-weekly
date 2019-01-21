/**
 * Task.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * pid: 所属项目id
 * period: 周期
 * areaId: 区域id
 * target: 目标
 * dec: 描述
 * subProject: 所属子项
 * resType: 需求类型
 * sonType: 子类型
 * deliveryType: 交付方式
 * level: 优先级
 * prods: 产品
 * version: 版本号
 * proDutyPerson: 所属项目责任人id
 * taskDutyPerson: 任务责任人id
 * workload: 工作量
 * startDate: 开始日期
 * endDate: 交付日期
 * progress: 进度
 * taskStatus: 状态
 * status: 状态
 * remark: 备注
 */
module.exports = {
    tableName: "task",
    attributes: {
        pid: {type: 'string', required: true},
        period: {type: 'string', defaultsTo: ''},
        areaId: {type: 'string', required: true},
        target: {type: 'string', defaultsTo: ''},
        dec: {type: 'string', defaultsTo: ''},
        subProject: {type: 'string', defaultsTo: ''},
        taskType: {type: 'string', defaultsTo: ''},
        sonType: {type: 'string', defaultsTo: ''},
        deliveryType: {type: 'string', defaultsTo: ''},
        level: {type: 'string', defaultsTo: ''},
        prods: {type: 'string', defaultsTo: ''},
        version: {type: 'string', defaultsTo: ''},
        proDutyPerson: {type: 'string', defaultsTo: ''},
        taskDutyPerson: {type: 'string', defaultsTo: ''},
        workload: {type: 'string', defaultsTo: ''},
        startDate: {type: 'string', defaultsTo: ''},
        endDate: {type: 'string', defaultsTo: ''},
        progress: {type: 'string', defaultsTo: ''},
        taskStatus: {type: 'string', defaultsTo: ''},
        status: {type: 'string', defaultsTo: '0'},
        remark: {type: 'string', defaultsTo: ''}
    }
};