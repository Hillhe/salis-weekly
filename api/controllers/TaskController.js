let TASK = sails.config.custom.TASK;
let COMMON = sails.config.custom.COMMON;
let SQLS = sails.config.custom.SQLS;
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
            let {startDate = "", endDate = "", period = 0, taskType = 0, prods = '', pid = "",
                taskDutyPerson = 0,taskStatus = 0, pageIndex = COMMON.pageIndex, pageSize = COMMON.pageSize} = req.query;
            let params = {taskType: taskType, taskDutyPerson: taskDutyPerson, taskStatus: taskStatus};
            if (!startDate && !endDate && period == 0) {
                startDate = moment().startOf('isoWeek').format('x');
                endDate = moment().endOf('isoWeek').format('x');
            }
            Object.keys(params).map(key => {
                if (params[key] == 0 || params[key] == '') {
                    delete params[key]
                }
            });
            if (prods != 0 && prods != "") {
                params.prods = {contains: prods}
            }
            let total = await Task.count({
                where: Object.assign({}, {
                    pid: pid,
                    startDate: {'>=': startDate},
                    endDate: {'<=': endDate},
                    status: { '!=' : COMMON.deleted },
                }, params)
            });
            let tasks = await Task.find({
                skip: (parseInt(pageIndex) - 1) * parseInt(pageSize),
                limit: parseInt(pageSize),
                where: Object.assign({}, {
                    pid: pid,
                    startDate: {'>=': startDate},
                    endDate: {'<=': endDate},
                    status: { '!=' : COMMON.deleted }
                }, params)
            }).sort("period ASC");
            let users = await User.find();
            tasks.map(t => {t.dutyPersonName = (users.filter(u => u.id == t.taskDutyPerson)[0].realname)});
            let result = {
                total: total,
                pageIndex: pageIndex,
                pageSize: pageSize,
                list: tasks
            };
            res.wrRes(TASK.ok, result);
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //导入上周数据
    async importLastWeekTask(req, res) {
        try {
            let startDate = moment().startOf('isoWeek').add(-7, 'days').format('x'); // 上周一 00时00分00秒
            let endDate =  moment().endOf('isoWeek').add(-7, 'days').format('x'); // 上周日 23时59分59秒
            let tasks = await sails.sendNativeQuery(SQLS.TASK_LIST, [startDate, endDate]);
            res.wrRes(TASK.ok, tasks.rows);
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //获取周报数据
    async getExcelData() {
        try {
            let startDate = moment().startOf('isoWeek').add(-7, 'days').format('x'); // 上周一 00时00分00秒
            let endDate =  moment().endOf('isoWeek').format('x'); // 上周日 23时59分59秒
            let areas = await Area.find();
            let projects = await sails.sendNativeQuery(SQLS.EXCEL_PROJECT);
            let tasks = await sails.sendNativeQuery(SQLS.TASK_LIST, [startDate, endDate]);
            projects.rows.map(p => {p.tasks = tasks.rows.filter(t => t.pid == p.id)});
            areas.map(a => {a.projects = projects.rows.filter(p => p.area == a.id);});
            let dict = await System.findOne({where: {key: 'dict'}, select: ['value']});
            return await {areas: areas, dict: JSON.parse(dict.value)};
        } catch (error) {
            throw error;
        }
    }
}