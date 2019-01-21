module.exports = {
    "POST /file/upload" :                             { action: 'File/upload'}, //上传文件
    "GET /file/weekly_excel" :                        { action: 'File/exportWeeklyExcel'}, //导出周报
    "GET /file/test" :                                { action: 'File/export'}, //导出周报
    "GET /file/read" :                                { action: 'File/readExcel'}, //导出周报
}