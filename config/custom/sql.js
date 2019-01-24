module.exports = {
    SQLS: {
        PROJECT_SEARCH: "SELECT p.id, p.name, p.number, p.prostatus, p.dutyPerson, p.summary, u.realname AS dutyPersonName FROM project AS p LEFT JOIN user AS u ON u.id = p.dutyPerson WHERE p.status != 1 AND p.area = $1 LIMIT $2, $3",
        PUT_COUNT: "SELECT pid, IFNULL(SUM(workload),0) AS count FROM task WHERE status != 1 AND startDate >= $1 AND endDate <= $2 GROUP BY pid",
        TASK_WEEK_EXCEL: "SELECT t.pid, t.period, t.target, t.dec, t.subProject, t.taskType, t.sonType, t.deliveryType, t.prods, t.version, t.proDutyPerson, t.taskDutyPerson, t.workload, t.startDate, t.endDate, t.progress, t.taskStatus, t.remark, u.realname AS dutyPersonName FROM task AS t LEFT JOIN user AS u ON u.id = t.taskDutyPerson WHERE t.status != 1 AND t.startDate >= $1 AND t.endDate <= $2 ORDER BY t.period ASC",
        TASK_LAST_WEEK: "SELECT t.id, t.pid, t.period, t.target, t.dec, t.subProject, t.taskType, t.sonType, t.deliveryType, t.prods, t.version, t.proDutyPerson, t.taskDutyPerson, t.workload, t.startDate, t.endDate, t.progress, t.taskStatus, t.remark, u.realname AS dutyPersonName FROM task AS t LEFT JOIN user AS u ON u.id = t.taskDutyPerson WHERE t.status != 1 AND t.pid = $1 AND t.startDate >= $2 AND t.endDate <= $3 ORDER BY t.period ASC",
        TASK_THIS_WEEK: "SELECT t.id, t.pid, t.period, t.target, t.dec, t.subProject, t.taskType, t.sonType, t.deliveryType, t.prods, t.version, t.proDutyPerson, t.taskDutyPerson, t.workload, t.startDate, t.endDate, t.progress, t.taskStatus, t.remark, u.realname AS dutyPersonName FROM task AS t LEFT JOIN user AS u ON u.id = t.taskDutyPerson WHERE t.status != 1 AND t.pid = $1 AND t.startDate >= $2 AND t.endDate <= $3 ORDER BY t.period ASC",
        EXCEL_PROJECT: "SELECT p.*, u.realname AS dutyPersonName FROM project AS p LEFT JOIN user AS u ON p.dutyPerson = u.id",
        PROJECT_DETAIL: "SELECT p.*, u.realname AS dutyPersonName FROM project AS p LEFT JOIN user AS u ON u.id = p.dutyPerson WHERE p.status != 1 AND p.id = $1"
    },
    SELECT: {
        user_select: ["username", "realname", "email", "phone", "userType", "orgCode", "position", "usualPlace", "lastLogin", "visitTimes", "status"],
        pro_select: ["name", "area", "prods", "summary", "dutyPerson", "createPerson", "number", "prostatus", "dutyPersonName"],
        area_select: ["id", "areaname", "order"]
    }
}