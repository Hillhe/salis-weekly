module.exports = {
    'POST /task/create':                            { action: 'Task/createTask' }, //新增任务
    'GET /task/search':                             { action: 'Task/getTaskList' }, //获取task列表
    'GET /task/import_lastweek':                    { action: 'Task/importLastWeekTask' }, //获取task列表
}