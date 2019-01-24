module.exports = {
    USER: {
        success: { code: 200, msg: "成功！" },
        logok: { code: 200, msg: "登录成功！" },
        add: { code: 200, msg: "用户创建成功！" },
        del: { code: 200, msg: "用户删除成功！" },
        updateok: { code: 200, msg: "修改成功!" },
        getok: { code: 200, msg: "用户获取成功！" },
        logerr: { code: 1001, msg: "密码错误！" },
        no: { code: 1002, msg: "此用户不存在！" },
        has: { code: 1003, msg: "此用户已存在！" },
        updateerr: { code: 1004, msg: "修改错误！" },
        deleted: { code: 1005, msg: "此用户已删除！" }
    },
    PROJECT: {
        del: { code: 200, msg: "删除成功！" },
        getOk: { code: 200, msg: "查找成功！" },
        add: { code: 200, msg: "创建成功！" },
        update: { code: 200, msg: "项目修改成功!" },
        err: { code: 1006, msg: "错误！" },
        no: { code: 1007, msg: "此项目不存在！" },
        has: { code: 1008, msg: "此项目已存在！" },
        updateErr: { code: 1009, msg: "项目修改失败!" }
    },
    UPLOAD: {
        success: { code: 200, msg: "上传成功！" },
    },
    AREA: {
        success: { code: 200, msg: "成功！" },
        has: { code: 1010, msg: "已存在！" },
        no: { code: 1011, msg: "此项目集不存在！" }
    },
    SYS: {
        ok: { code: 200, msg: "ok" }
    },
    TASK: {
        updateok: { code: 200, msg: "添加修改成功！" },
        updateerr: { code: 1021, msg: "添加修改失败！" },
        ok: { code: 200, msg: "查询成功!" }
    },
    FILE: {
        exportok: { code: 200, msg: "导出成功！" },
        uploadok: { code: 200, msg: "上传成功！" }
    }
}