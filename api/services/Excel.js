
let merge = require('merge');
let border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
module.exports = function WooKSheet(workBook, options = {}) {
    this.startRow = options.startRow;
    this.curRow = options.curRow;
    this.workSheet = workBook.addWorksheet(options.sheetName, options.properties);
    this.workSheet.columns = options.columns;


    this.setRowStyle = function (rowNum, option) {
        let row = this.workSheet.getRow(rowNum);
        row.alignment = option.alignment || {};
        row.height = option.height || 30;
        row.eachCell({ includeEmpty: true }, function (cell) {
            cell.fill = option.fill || {};
            cell.font = option.font || {};
            cell.border = merge(border, option.border || {});
        });
    };
    this.setColStyle = function (colId, option) {
        let col = this.workSheet.getColumn(colId);
        col.alignment = option.alignment || {};
        col.height = option.height || 30;
        col.eachCell({ includeEmpty: true }, function (cell) {
            cell.fill = option.fill || {};
            cell.font = option.font || {};
            cell.border = merge(border, option.border || {});
        });
    };
    this.addOneRow = function (data, option) {
        this.curRow++;
        let row = this.workSheet.addRow(data);
        row.alignment = option.alignment || {};
        if (option.height) {
            row.height = option.height
        }
        row.eachCell({ includeEmpty: true }, function (cell) {
            cell.fill = option.fill || {};
            cell.font = option.font || {};
            cell.border = merge(border, option.border || {});
        });
    };
    this.mergeCell = function (start, end) {
        if (start == end) return;
        this.workSheet.mergeCells(start, end);
    };
    this.setOneCellStyle = function (cellNum, option) {
        let cell = this.workSheet.getCell(cellNum);
        cell.fill = option.fill || {};
        cell.border = merge(border, option.border || {});
        cell.alignment = option.alignment || {};
    }
}
