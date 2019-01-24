let TASK = sails.config.custom.TASK;
let COMMON = sails.config.custom.COMMON;
let SQLS = sails.config.custom.SQLS;
let moment = require("moment");
module.exports = {
    //添加， 更新， 删除任务
    async createTask(req, res) {
        try {
            let { createList = '[]', deleteIdList = '[]' } = req.body;
            createList = JSON.parse(createList);
            deleteIdList = JSON.parse(deleteIdList);
            let addList = createList.filter(item => !item.id);
            let updateList = createList.filter(item => !!item.id);
            let addedList = await Task.createEach(addList).fetch();
            let deletedList = await Task.update({ where: { id: { 'in': deleteIdList } } }).set({ status: COMMON.deleted }).fetch();
            let updatedList = await commonService.batchUpdateById(Task, updateList);
            res.wrRes(TASK.updateok, { updatedList: addedList.concat(updatedList), deletedList: deletedList });
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //查询任务
    async getTaskList(req, res) {
        try {
            let { startDate = "", endDate = "", period = "", taskType = 0, prods = '', pid = "",
                taskDutyPerson = 0, progress = 0, pageIndex = COMMON.pageIndex, pageSize = COMMON.pageSize } = req.query;
            let SQL = `SELECT FIELDS FROM task AS t LEFT JOIN user AS u ON u.id = t.taskDutyPerson WHERE t.status != 1 AND pid = ${pid}`;
            if (period != "") {
                startDate = moment().startOf('isoWeek').add(parseInt(period)*7, 'days').format('x');
                endDate = moment().endOf('isoWeek').add(parseInt(period)*7, 'days').format('x');
            }
            if (startDate) {
                SQL += ` AND t.startDate >= ${startDate}`;
            }
            if (endDate) {
                SQL += ` AND t.endDate <= ${endDate}`;
            }
            if (taskDutyPerson != '' && taskDutyPerson.indexOf(0) < 0 && taskDutyPerson.split(",").length > 0) {
                SQL += ` AND t.taskDutyPerson in(${taskDutyPerson})`;
            }
            if (progress != 0 && progress != '') {
                SQL += ` AND t.progress = ${progress}`;
            }
            if (taskType != 0 && taskType != '') {
                SQL += ` AND t.taskType = ${taskType}`;
            }
            if (prods != 0 && prods != '' && prods.indexOf(0) < 0) {
                SQL += ` AND t.prods LIKE '%${prods}%'`;
            }
            let totalSql = SQL.replace('FIELDS', 'IFNULL(COUNT(*),0) AS count');
            let total = await sails.sendNativeQuery(totalSql);
            let taskSql = SQL.replace('FIELDS', 't.pid, t.period, t.target, t.dec, t.subProject, t.taskType, t.sonType, t.deliveryType, t.prods, t.version, t.proDutyPerson, t.taskDutyPerson, t.workload, t.startDate, t.endDate, t.progress, t.taskStatus, t.remark, u.realname AS dutyPersonName');
            taskSql += ` ORDER BY t.period ASC LIMIT ${(parseInt(pageIndex - 1) * pageSize)}, ${pageSize}`;
            let tasks = await sails.sendNativeQuery(taskSql);
            res.wrPageRes(TASK.ok, total.rows[0].count, pageIndex, pageSize, tasks.rows);
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //导入上周计划(开始和结束时间在本周内)
    async importLastWeekTask(req, res) {
        try {
            let { pid = "" } = req.query;
            let startDate = moment().startOf('isoWeek').format('x'); // 周一 00时00分00秒
            let endDate = moment().endOf('isoWeek').format('x'); // 周日 23时59分59秒
            let tasks = await sails.sendNativeQuery(SQLS.TASK_LAST_WEEK, [pid, startDate, endDate]);
            res.wrRes(TASK.ok, tasks.rows);
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //获取编辑模式下的数据(开始时间和结束时间在本周一至下周日内)
    async getTaskWhenEidt(req, res) {
        try {
            let { pid = "" } = req.query;
            let startDate = moment().startOf('isoWeek').format('x'); // 本周一 00时00分00秒
            let endDate = moment().endOf('isoWeek').add(7, 'days').format('x'); // 下周日 23时59分59秒
            let tasks = await sails.sendNativeQuery(SQLS.TASK_THIS_WEEK, [pid, startDate, endDate]);
            res.wrRes(TASK.ok, tasks.rows);
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //获取周报数据(开始时间和结束时间在本周一至下周日内)
    async getExcelData() {
        try {
            let startDate = moment().startOf('isoWeek').format('x'); // 本周一 00时00分00秒
            let endDate = moment().endOf('isoWeek').add(7, 'days').format('x'); // 下周日 23时59分59秒
            let areas = await Area.find();
            let projects = await sails.sendNativeQuery(SQLS.EXCEL_PROJECT);
            let tasks = await sails.sendNativeQuery(SQLS.TASK_WEEK_EXCEL, [startDate, endDate]);
            projects.rows.map(p => { p.tasks = tasks.rows.filter(t => t.pid == p.id) });
            areas.map(a => { a.projects = projects.rows.filter(p => p.area == a.id); });
            let dict = await System.findOne({ where: { key: 'dict' }, select: ['value'] });
            return await { areas: areas, dict: JSON.parse(dict.value) };
        } catch (error) {
            throw error;
        }
    }
}