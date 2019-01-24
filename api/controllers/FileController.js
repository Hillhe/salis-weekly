let FILE_ERR = sails.config.custom.FILE;
let TaskController = require('./TaskController');
module.exports = {
    //导出周报
    async exportWeeklyExcel(req, res) {
        try {
            let data = await TaskController.getExcelData();
            await ExcelService.makeWeekExcel(data, result => {
                res.wrRes(FILE_ERR.exportok, result);
            });
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    async export_test(req, res) {
        try {
            let data = await TaskController.getExcelData();
            await ExcelService.makeWeekExcel(data, result => {
                res.wrRes(FILE_ERR.exportok, result);
            });
        } catch (error) {
            res.wrErrRes(error);
        }
    },
}