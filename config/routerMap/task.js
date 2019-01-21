module.exports = {
    'POST /task/create':                            { action: 'Task/createTask' }, //新增任务
    'GET /task/search':                             { action: 'Task/getTaskList' }, //获取task列表
    'GET /task/toeidt':                             { action: 'Task/getTaskWhenEidt' }, //编辑列表
    'GET /task/import_lastweek':                    { action: 'Task/importLastWeekTask' }, //导入上周数据
    'GET /task/weekdata':                           { action: 'Task/getExcelData' } //获取周报数据
}