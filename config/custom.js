/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */
let moment = require("moment");
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
        pageIndex: 1,
        pageSize: 10,
        adminType: "2"
    },
    FILECONF: {
        maxBytes: 1000000,
        imgOutPath: "/assets/imgs"
    },
    EXCEL: {
        sheetOpt: {
            startRow: 1,
            curRow: 1,
            sheetName: moment().format('YYYY-MM-DD周报'),
            properties: {
                showGridLines: true,
                defaultRowHeight: 30
            },
            columns: [
                { header: '项目集', key: 'areaname', width: 10 },
                { header: '序号', key: 'index', width: 8 },
                { header: '项目', key: 'name', width: 20 },
                { header: '周期', key: 'period', width: 5 },
                { header: '目标任务', key: 'target', width: 20 },
                { header: '任务描述', key: 'dec', width: 20 },
                { header: '所属子项', key: 'subProject', width: 12 },
                { header: '类型', key: 'taskType', width: 12 },
                { header: '子类型', key: 'sonType', width: 12 },
                { header: '交付方式', key: 'deliveryType', width: 12 },
                { header: '产品', key: 'prods', width: 20 },
                { header: '版本号', key: 'version', width: 12 },
                { header: '责任人', key: 'dutyPersonName', width: 12 },
                { header: '工作量', key: 'workload', width: 12 },
                { header: '开始日期', key: 'startDate', width: 12 },
                { header: '交付日期', key: 'endDate', width: 12 },
                { header: '当前进度', key: 'progress', width: 12 },
                { header: '当前状态', key: 'taskStatus', width: 12 },
                { header: '备注', key: 'remark', width: 20 }
            ]
        },
        headerOpt: {
            alignment: { vertical: 'middle', horizontal: 'center' },
            height: 30,
            fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFFF4500" } },
            font: { bold: true }
        },
        projectOpt: {
            alignment: { vertical: 'middle', wrapText: true },
            height: 30,
            fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFD39B" } },
            font: { bold: true, color: { argb: 'FF436EEE' } }
        },
        taskOpt: {
            alignment: { vertical: 'middle', wrapText: true },
            fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFF2F2F2" } }
        },
        nullRow: {
            data: { index: "暂无" },
            option: {
                alignment: { vertical: 'middle', horizontal: 'center' }
            }
        },
        proSet: {
            fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFF2F2F2" } },
            alignment: {vertical: 'middle'}
        },
        wrOutPath: "/home/weekly-reports/outfiles/excel/",
        wrExcelName: "YYYYMMDD(第w周)西北-集成研发部_周会_项目梳理",
        wrPrefix: "/excel/"
    },
    USER: {
        success: {code: 200, msg: "成功！"},
        logok: {code: 200, msg: "登录成功！"},
        add: {code: 200, msg: "用户创建成功！"},
        del: {code: 200, msg: "用户删除成功！"},
        updateok: {code: 200, msg: "修改成功!"},
        getok: {code: 200, msg: "用户获取成功！"},
        logerr: {code: 1001, msg: "密码错误！"} ,
        no: {code: 1002, msg: "此用户不存在！"},
        has: {code: 1003, msg: "此用户已存在！"},
        updateerr: {code: 1004, msg: "修改错误！"},
        deleted: {code: 1005, msg: "此用户已删除！"}
    },
    PROJECT: {
        del: {code: 200, msg: "删除成功！"},
        getOk: {code: 200, msg: "查找成功！"},
        add: {code: 200, msg: "创建成功！"},
        update: {code: 200, msg: "项目修改成功!"},
        err: {code: 1006, msg: "错误！"},
        no: {code: 1007, msg: "此项目不存在！"},
        has: {code: 1008, msg: "此项目已存在！"},
        updateErr: {code: 1009, msg: "项目修改失败!"}
    },
    UPLOAD: {
        success: {code: 200, msg: "上传成功！"},
    },
    AREA: {
        success: {code: 200, msg: "成功！"},
        has: {code: 1010, msg: "已存在！"},
        no: {code: 1011, msg: "此项目集不存在！"}
    },
    SYS: {
        ok: {code: 200, msg: "ok"}
    },
    TASK: {
        updateok: {code: 200, msg: "添加修改成功！"},
        updateerr: {code: 1021, msg: "添加修改失败！"},
        ok: {code: 200, msg: "查询成功!"}
    },
    SQLS: {
        PROJECT_SEARCH: "SELECT p.id, p.name, p.number, p.prostatus, p.dutyPerson, p.summary, u.realname AS dutyPersonName FROM project AS p LEFT JOIN user AS u ON u.id = p.dutyPerson WHERE p.status != 1 AND p.area = $1 LIMIT $2, $3",
        PUT_COUNT: "SELECT pid, IFNULL(SUM(workload),0) AS count FROM task WHERE status != 1 AND startDate >= $1 AND endDate <= $2 GROUP BY pid",
        TASK_WEEK_EXCEL: "SELECT t.pid, t.period, t.target, t.dec, t.subProject, t.taskType, t.sonType, t.deliveryType, t.prods, t.version, t.proDutyPerson, t.taskDutyPerson, t.workload, t.startDate, t.endDate, t.progress, t.taskStatus, t.remark, u.realname AS dutyPersonName FROM task AS t LEFT JOIN user AS u ON u.id = t.taskDutyPerson WHERE t.status != 1 AND t.startDate >= $1 AND t.endDate <= $2 ORDER BY t.period ASC",
        TASK_LAST_WEEK: "SELECT t.pid, t.period, t.target, t.dec, t.subProject, t.taskType, t.sonType, t.deliveryType, t.prods, t.version, t.proDutyPerson, t.taskDutyPerson, t.workload, t.startDate, t.endDate, t.progress, t.taskStatus, t.remark, u.realname AS dutyPersonName FROM task AS t LEFT JOIN user AS u ON u.id = t.taskDutyPerson WHERE t.status != 1 AND t.pid = $1 AND t.startDate >= $2 AND t.endDate <= $3 ORDER BY t.period ASC",
        TASK_THIS_WEEK: "SELECT t.id, t.pid, t.period, t.target, t.dec, t.subProject, t.taskType, t.sonType, t.deliveryType, t.prods, t.version, t.proDutyPerson, t.taskDutyPerson, t.workload, t.startDate, t.endDate, t.progress, t.taskStatus, t.remark, u.realname AS dutyPersonName FROM task AS t LEFT JOIN user AS u ON u.id = t.taskDutyPerson WHERE t.status != 1 AND t.pid = $1 AND t.startDate >= $2 ORDER BY t.period ASC",
        EXCEL_PROJECT: "SELECT p.*, u.realname AS dutyPersonName FROM project AS p LEFT JOIN user AS u ON p.dutyPerson = u.id",
        PROJECT_DETAIL: "SELECT p.*, u.realname AS dutyPersonName FROM project AS p LEFT JOIN user AS u ON u.id = p.dutyPerson WHERE p.status != 1 AND p.id = $1"
    },
    SELECT: {
        user_select: ["username", "realname", "email", "phone", "userType", "orgCode", "position", "usualPlace", "lastLogin", "visitTimes", "status"],
        pro_select: ["name", "area", "prods", "summary", "dutyPerson", "createPerson", "number", "prostatus", "dutyPersonName"]
    },
    FILE: {
        exportok: {code: 200, msg: "导出成功！"},
        uploadok: {code: 200, msg: "上传成功！"}
    }
};
