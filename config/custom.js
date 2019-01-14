/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use.    *
  *                                                                          *
  ***************************************************************************/
    COMMON: {
        normal: 0,
        deleted: 1,
        isSuperAdminFlag: 1,
        rootParentId: -1,
        pageIndex: 0,
        pageSize: 10
    },
    FILECONF:{
        maxBytes: 1000000,
        imgOutPath: "/assets/imgs"
    },
    EXCEL: {
        title: ["集成研发部_周工作计划详情"],
        columns: [
            {header: '项目集', key: 'areaname', width: 12},
            {header: '序号', key: 'index', width: 8},
            {header: '项目', key: 'name', width: 20},
            {header: '周期', key: 'period', width: 8},
            {header: '目标任务', key: 'target', width: 20},
            {header: '任务描述', key: 'dec', width: 20},
            {header: '所属子项', key: 'subProject', width: 12},
            {header: '类型', key: 'taskType', width: 12},
            {header: '子类型', key: 'sonType', width: 12},
            {header: '交付方式', key: 'deliveryType', width: 12},
            {header: '产品', key: 'prods', width: 20},
            {header: '版本号', key: 'version', width: 12},
            {header: '责任人', key: 'dutyPersonName', width: 12},
            {header: '工作量', key: 'workload', width: 12},
            {header: '开始日期', key: 'startDate', width: 12},
            {header: '交付日期', key: 'endDate', width: 12},
            {header: '当前进度', key: 'progress', width: 12},
            {header: '当前状态', key: 'taskStatus', width: 12},
            {header: '备注', key: 'remark', width: 20}
        ],
        fills: {
            header: { type: "pattern", pattern: "solid", fgColor: { argb: "FFFF4500" } },
            project: { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFD39B" } },
            task: {type: "pattern", pattern: "solid", fgColor: { argb: "FFF2F2F2" } },
            proSet: {type: "pattern", pattern: "solid", fgColor: { argb: "FFFF7F00" } }
        },
        wrOutPath: "/home/weekly-reports/outfiles/excel/",
        wrExcelName: "YYYYMMDD(第w周)西北-集成研发部_周会_项目梳理",
        wrPrefix: "/load_excel/"
    },
    USER: {
        success: "成功！",
        logok: "登录成功！",
        logerr: "密码错误！",
        no: "此用户不存在！",
        has: "此用户已存在！",
        add: "用户创建成功！",
        updateok: "修改成功!",
        updateerr: "修改错误！",
        del: "用户删除成功！",
        getok: "用户获取成功！",
        deleted: "此用户已删除！"
    },
    PROJECT: {
        err: "错误！",
        no: "此项目不存在！",
        has: "此项目已存在！",
        add: "创建成功！",
        update: "修改成功!",
        updateErr: "修改失败!",
        del: "删除成功！",
        getOk: "查找成功！"
    },
    UPLOAD: {
        success: "上传成功！",
    },
    AREA: {
        success: "成功！",
        has: "已存在！",
        no: "此项目集不存在！"
    },
    SYS: {
        ok: "ok"
    },
    TASK: {
        updateok: "添加修改成功！",
        updateerr: "添加修改失败！"
    },
    SQLS: {
        PROJECT_SEARCH:  "SELECT p.id, p.name, p.number, p.prostatus, u.realname AS dutyPersonName FROM project AS p LEFT JOIN user AS u ON u.id = p.dutyPerson AND p.status != 1 AND p.area = $1 LIMIT $2, $3",
        PUT_COUNT: "SELECT pid, IFNULL(SUM(workload),0) AS count FROM task WHERE period in(1) AND task.status != 1 GROUP BY pid",
        TASK_LIST: "SELECT t.period, t.target, t.dec, t.subProject, t.taskType, t.sonType, t.deliveryType, t.prods, t.version, t.proDutyPerson, t.taskDutyPerson, t.workload, t.startDate, t.endDate, t.progress, t.taskStatus, t.remark, u.realname AS dutyPersonName FROM task AS t LEFT JOIN user AS u ON u.id = t.taskDutyPerson AND t.status != 1 AND t.createdAt BETWEEN $1 AND $2 ORDER BY t.period ASC",
        EXCEL_PROJECT: "SELECT p.*, u.realname AS dutyPersonName FROM project AS p LEFT JOIN user AS u ON p.dutyPerson = u.id",
        PROJECT_DETAIL: "SELECT p.*, u.realname AS dutyPersonName FROM project AS p INNER JOIN user AS u ON p.id = $1 AND u.id = p.dutyPerson AND p.status != 1"
    },
    SELECT: {
        user_select: ["username", "realname", "email", "phone", "userType", "orgCode", "position", "usualPlace", "lastLogin", "visitTimes", "status"],
        task_select: ["target", "dec", "subProject", "prods"],
        pro_select: ["name", "area", "prods", "summary", "dutyPerson", "createPerson", "number", "prostatus", "dutyPersonName"]
    },
    FILE: {
        exportok: "导出成功！",
        uploadok: "上传成功！"
    }
};
