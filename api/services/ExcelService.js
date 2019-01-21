let Excel = require('exceljs');
let moment = require("moment");
let EXCELCONF = sails.config.custom.EXCEL;
let WorkSheet = require("./WorkSheet");

module.exports = {
    //周报excel
    async makeWeekExcel(data, cb) {
        try {
            //获取任务数据, 字典值
            let { areas, dict } = data;
            if (!areas || !dict) { cb(""); return; };
            //创建表格
            let workbook = new Excel.Workbook();
            //创建工作簿并设置头部样式
            let sheet = new WorkSheet(workbook, EXCELCONF.sheetOpt);
            sheet.setRowStyle(1, EXCELCONF.headerOpt);
            /****************************set Data and Style**********************************/
            Object.values(areas).map(item => {
                sheet.startRow = sheet.curRow;
                item.projects.map((p, index) => {
                    p.areaname = item.areaname;
                    p.taskDutyPerson = p.dutyPerson;
                    p.taskStatus = commonService.getValue(dict.SUPPORT_TYPE, p.prostatus);
                    p.index = index + 1;
                    p.prods = commonService.getValue(dict.PRODUCTS, p.prods);
                    //添加项目
                    sheet.addOneRow(p, EXCELCONF.projectOpt);
                    let tasks = p.tasks;
                    if (tasks.length == 0) {
                        //添加空行
                        sheet.addOneRow(EXCELCONF.nullRow.data, EXCELCONF.nullRow.option);
                        sheet.mergeCell(`B${sheet.curRow}`, `${String.fromCharCode(65 + EXCELCONF.sheetOpt.columns.length - 1)}${sheet.curRow}`);
                    } else {
                        tasks.map((t, i) => {
                            t.index = i + 1;
                            t.period = commonService.getValue(dict.TASK_PERIOD, t.period);
                            t.taskType = commonService.getValue(dict.TASK_TYPE, t.taskType);
                            t.sonType = commonService.getValue(dict.TASK_TYPE, t.sonType);
                            t.deliveryType = commonService.getValue(dict.DELIVERY_TYPE, t.deliveryType);
                            t.prods = commonService.getValue(dict.PRODUCTS, t.prods);
                            t.startDate = moment(parseInt(t.startDate)).format('YYYY/MM/DD');
                            t.endDate = moment(parseInt(t.endDate)).format('YYYY/MM/DD');
                            t.progress = commonService.getValue(dict.TASK_PROGRESS, t.progress);
                            t.taskStatus = commonService.getValue(dict.PRO_STATUS, t.taskStatus);
                            //添加任务
                            sheet.addOneRow(t, EXCELCONF.taskOpt);
                        });
                    }
                });
                //设置项目集样式
                if ((sheet.startRow + 1) < sheet.curRow) {
                    sheet.mergeCell("A" + (sheet.startRow + 1), "A" + sheet.curRow);
                    sheet.setOneCellStyle("A" + (sheet.startRow + 1), EXCELCONF.proSet);
                };

            });
            /****************************set Data and Style**********************************/
            //生成表格
            let filename = moment().format(EXCELCONF.wrExcelName) + ".xlsx";
            workbook.xlsx.writeFile(EXCELCONF.wrOutPath + filename).then(res => {
                cb(EXCELCONF.wrPrefix + filename);
            }, function (error) {
                throw error;
            });
        } catch (error) {
            throw error;
        }
    }
}