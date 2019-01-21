//只作为测试使用
let Excel = require('exceljs');
let moment = require("moment");
let EXCELCONF = sails.config.custom.EXCEL;
let WorkSheet = require("./Excel");
function getValue(dict, keys) {
    try {
        if(!keys || !dict) return "";
        keys = keys.split(",");
        let matchs = Object.values(dict).filter(d => keys.includes(d.key+""));
        let values = matchs.map(m => m.value);
        return values.join("、");
    } catch (error) {
        throw error
    }
}
module.exports = {
    async makeWeekExcel(data, cb) {
        try {
            //获取任务数据, 字典值
            let {areas, dict} = data;
            if(!areas || !dict) {cb("");return;};
            //创建表格
            let workbook = new Excel.Workbook();
            //创建工作簿并设置头部样式
            let sheet = new WorkSheet(workbook, EXCELCONF.sheetOpt);
            sheet.setRowStyle(1, EXCELCONF.headerOpt);
            Object.values(areas).map(item => {
                sheet.startRow = sheet.curRow;
                item.projects.map((p, index) => {
                    p.areaname = item.areaname;
                    p.taskDutyPerson = p.dutyPerson;
                    p.taskStatus = getValue(dict.SUPPORT_TYPE, p.prostatus);
                    p.index = index+1;
                    p.prods = getValue(dict.PRODUCTS, p.prods);
                    //添加项目
                    sheet.addOneRow(p, EXCELCONF.projectOpt);
                    let tasks = p.tasks;
                    if (tasks.length == 0) {
                        //添加空行
                        sheet.addOneRow(EXCELCONF.nullRow.data, EXCELCONF.nullRow.option);
                        sheet.mergeCell(`B${sheet.curRow}`, `${String.fromCharCode(65+EXCELCONF.sheetOpt.columns.length-1)}${sheet.curRow}`);
                    } else {
                        tasks.map((t, i) => {
                            t.index = i+1;
                            t.period = getValue(dict.TASK_PERIOD, t.period);
                            t.taskType = getValue(dict.TASK_TYPE, t.taskType);
                            t.sonType = getValue(dict.TASK_TYPE, t.sonType);
                            t.deliveryType = getValue(dict.DELIVERY_TYPE, t.deliveryType);
                            t.prods = getValue(dict.PRODUCTS, t.prods);
                            t.startDate = moment(parseInt(t.startDate)).format('YYYY/MM/DD');
                            t.endDate = moment(parseInt(t.endDate)).format('YYYY/MM/DD');
                            t.progress = getValue(dict.TASK_PROGRESS, t.progress);
                            t.taskStatus = getValue(dict.PRO_STATUS, t.taskStatus);
                            //添加任务
                            sheet.addOneRow(t, EXCELCONF.taskOpt);
                        });
                    }
                });
                //设置项目集样式
                if((sheet.startRow +1) < sheet.curRow){
                    sheet.mergeCell("A"+ (sheet.startRow +1), "A"+sheet.curRow);
                    sheet.setOneCellStyle("A" + (sheet.startRow+1), EXCELCONF.proSet);
                };
                
            });

            //生成表格
            let filename = moment().format(EXCELCONF.wrExcelName)+".xlsx";
            workbook.xlsx.writeFile(filename).then(res => {
                cb(filename);
            }, function (error) {
                throw error
            });
        } catch (error) {
            throw error;
        }
    },
    async readWeekExcel(cb) {
        let workbook = new Excel.Workbook();
        let data = [];
        let rowData = {
            "pid": "5",
            "period": "",
            "areaId": "1",
            "target": "",
            "dec": "",
            "subProject": "",
            "taskType": "",
            "sonType": "",
            "deliveryType": "",
            "prod": "",
            "version": "1.0.15",
            "proDutyPerson": "",
            "taskDutyPerson": "",
            "workload": "",
            "startDate": "",
            "endDate": "",
            "progress": "",
            "taskStatus": "0",
            "status": "0",
            "remark": ""
        }
        workbook.xlsx.readFile('test.xlsx').then(function(){
            let worksheet = workbook.getWorksheet(1);
            let rows = worksheet.getRows(1);
            row.eachCell(function(cell, colNumber){
                let value = cell.value;
                if(typeof value == "object") value = value.text;
                data.push(value);   
            });
            rowData.period = data[0];
            rowData.target = data[1];
            rowData.dec = data[2];
            rowData.subProject = data[3];
            rowData.taskType = data[4];
            rowData.sonType = data[5];
            rowData.deliveryType = data[6];
            rowData.prods = data[7];
            rowData.version = data[8];
            rowData.proDutyPerson = data[9];
            rowData.taskDutyPerson = data[9];
            rowData.workload = data[10];
            rowData.workload = data[11];
            rowData.startDate = moment(data[12]).format('x');
            rowData.endDate = moment(data[13]).format('x');
            rowData.progress = data[14];
            cb(rowData);
        });
    }
}