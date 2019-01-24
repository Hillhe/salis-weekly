let moment = require("moment");
module.exports = {
    weekExcel: {
        sheetOpt: {
            startRow: 1,
            curRow: 1,
            sheetName: moment().format('YYYY-MM-DD周报'),
            properties: {
                showGridLines: true,
                defaultRowHeight: 30
            },
            columns: [
                { header: '项目集', key: 'areaname', width: 10 },
                { header: '序号', key: 'index', width: 8 },
                { header: '项目', key: 'name', width: 20 },
                { header: '周期', key: 'period', width: 5 },
                { header: '目标任务', key: 'target', width: 20 },
                { header: '任务描述', key: 'dec', width: 20 },
                { header: '所属子项', key: 'subProject', width: 12 },
                { header: '类型', key: 'taskType', width: 12 },
                { header: '子类型', key: 'sonType', width: 12 },
                { header: '交付方式', key: 'deliveryType', width: 12 },
                { header: '产品', key: 'prods', width: 20 },
                { header: '版本号', key: 'version', width: 12 },
                { header: '责任人', key: 'dutyPersonName', width: 12 },
                { header: '工作量', key: 'workload', width: 12 },
                { header: '开始日期', key: 'startDate', width: 12 },
                { header: '交付日期', key: 'endDate', width: 12 },
                { header: '当前进度', key: 'progress', width: 12 },
                { header: '当前状态', key: 'taskStatus', width: 12 },
                { header: '备注', key: 'remark', width: 20 }
            ]
        },
        headerOpt: {
            alignment: { vertical: 'middle', horizontal: 'center' },
            height: 30,
            fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFFF4500" } },
            font: { bold: true }
        },
        projectOpt: {
            alignment: { vertical: 'middle', wrapText: true },
            height: 30,
            fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFD39B" } },
            font: { bold: true, color: { argb: 'FF436EEE' } }
        },
        taskOpt: {
            alignment: { vertical: 'middle', wrapText: true },
            fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFF2F2F2" } }
        },
        nullRowOpt: {
            data: { index: "暂无" },
            option: {
                alignment: { vertical: 'middle', horizontal: 'center' },
                fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFF2F2F2" } }
            }
        },
        proSetOpt: {
            fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFF2F2F2" } },
            alignment: { vertical: 'middle' }
        },
        wrOutPath: "/home/weekly-reports/outfiles/excel/",
        wrExcelName: "YYYYMMDD(第w周)西北-集成研发部_周会_项目梳理",
        wrPrefix: "/excel/"
    }
}