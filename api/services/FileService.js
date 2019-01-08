let Excel = require('exceljs');
let EXCELCONF = sails.config.custom.EXCEL;
let mockData = require("./mock");
let start = 2;
let end = 2;



function addProject(sheet, data) {
    if (!data || data.length == 0) {
        return;
    }
    start = end;
    end += data.length;
    data.map(item => {
        let tasks = item.children;
        end += tasks.length;
        delete item.children;
        let proRow = sheet.addRow(item);
        proRow.alignment = { vertical: 'middle'};
        proRow.height = 25;
        proRow.eachCell(function(cell) {
            cell.fill = EXCELCONF.fills.project;
        });
        if (tasks && tasks.length > 0) {
            sheet.addRows(tasks);
        }
    });
    sheet.mergeCells("A"+start, "A"+(end-1));
    sheet.getCell("A"+start).fill = EXCELCONF.fills.task;
}

function addProjSet(sheet, data) {
    if (!data || Object.values(data).length == 0) {
        return;
    }
    Object.values(data).map(item => {
        addProject(sheet, item);
    });
}


module.exports = {
    makeExcel() {
        //创建表格
        var workbook = new Excel.Workbook();
        //创建工作簿
        var wrSheet = workbook.addWorksheet('周报', {properties: {showGridLines: true}});
        //添加列
        wrSheet.columns = EXCELCONF.columns;
        //设置首行样式
        var header = wrSheet.getRow(1);
        header.alignment = { vertical: 'middle', horizontal: 'center' };
        header.height = 30;
        header.eachCell(function(cell) {
            cell.fill = EXCELCONF.fills.header;
            cell.font = {bold: true};
        });
        
        addProjSet(wrSheet, mockData);
        var periodCol = wrSheet.getColumn('period');
        periodCol.eachCell(function(cell) {
            if (cell.value == "本周") {
                cell.fill = {type: "pattern", pattern: "solid", fgColor: { argb: "FFC1FFC1" }}
            } else if(cell.value == "下周"){
                cell.fill = {type: "pattern", pattern: "solid", fgColor: { argb: "FFEEE0E5" }}
            }
        });

        var filename = 'test.xlsx';
        workbook.xlsx.writeFile(filename).then(function () {
            console.log('success');
        }, function (err) {
            console.log(err);
        });
    }
}