let TASK = sails.config.custom.TASK;
let COMMON = sails.config.custom.COMMON;
let SELECT = sails.config.custom.SELECT;
let moment = require("moment");
module.exports = {
    //添加， 更新， 删除任务
    async createTask(req, res){
        try {
            let {createList = '[]', deleteIdList = '[]'} = req.body;
            createList = JSON.parse(createList);
            deleteIdList = JSON.parse(deleteIdList);
            let addList = createList.filter(item => !item.id);
            let updateList = createList.filter(item => !!item.id);
            await Task.createEach(addList);
            await Task.update({where:{id:{'in':deleteIdList}}}).set({status: COMMON.deleted});
            await commonService.batchUpdateById(Task, updateList);
            res.wrRes(TASK.updateok);
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //查询任务
    async getTaskList(req, res) {
        try {
            let {startDate = "", endDate = "", period = 0, taskType = 0, prods = '',
                taskDutyPerson = 0,taskStatus = 0} = req.query;
            let params = {taskType: taskType,taskDutyPerson: taskDutyPerson,taskStatus: taskStatus};
            if (!startDate && !endDate && period == 0) {
                startDate = moment().startOf('week').format('x');
                endDate = moment().endOf('week').format('x');
            }
            Object.keys(params).map(key => {
                if (params[key] == 0) {
                    delete params[key]
                }
            });
            let tasks = await Task.find({
                where: Object.assign({}, {
                    startDate: {'>=': startDate},
                    endDate: {'<=': endDate},
                    prods: {contains: prods},
                    status: { '!=' : COMMON.deleted }
                }, params),
                select: SELECT.task_select
            }).sort('period ASC');
            res.wrRes(TASK.ok, tasks);
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    async importLastWeekTask(req, res) {
        
    }
}