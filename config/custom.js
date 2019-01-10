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
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // mailgunDomain: 'transactional-mail.example.com',
  // mailgunSecret: 'key-testkeyb183848139913858e8abd9a3',
  // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
  // …
    COMMON: {
        normal: 0,
        deleted: 1,
        rootParentId: -1,
        pageIndex: 0,
        pageSize: 10
    },
    upload:{
        maxBytes: 1000000,
        imgpath: "/assets/imgs"
    },
    EXCEL: {
        title: ["集成研发部_周工作计划详情"],
        columns: [
            {header: '项目集', key: 'proSet', width: 20},
            {header: '周期', key: 'period', width: 10},
            {header: '序号', key: 'index', width: 20},
            {header: '目标任务', key: 'target', width: 20},
            {header: '任务描述', key: 'dec', width: 20},
            {header: '所属子项', key: 'sub', width: 20}
        ],
        fills: {
            header: { type: "pattern", pattern: "solid", fgColor: { argb: "FFFF7F00" } },
            project: { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFD39B" } },
            task: {type: "pattern", pattern: "solid", fgColor: { argb: "FFF2F2F2" } }
        }
    },
    USER: {
        success: "成功！",
        logok: "登录成功！",
        logerr: "用户名或密码错误！",
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
        err: "用户名或密码错误！",
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
        PROJECT_SEARCH:  "SELECT project.id, project.name, project.number, project.prostatus, user.realname AS dutyPersonName FROM project, user WHERE project.dutyPerson = user.id AND project.area = $1 LIMIT $2, $3",
        PUT_COUNT: "SELECT pid, IFNULL(SUM(workload),0) AS count FROM `task` WHERE period in(1) AND WHERE  GROUP BY pid"
    },
    SELECT: {
        user_select: ["username", "realname", "email", "phone", "userType", "orgCode", "position", "usualPlace", "lastLogin", "visitTimes", "status"],
        task_select: ["target", "dec", "subProject", "prods"],
        pro_select: ["name", "area", "prods", "summary", "dutyPerson", "createPerson", "number", "prostatus", "dutyPersonName"]
    }
};
