let Excel = require('exceljs');
let moment = require("moment");
let EXCELCONF = sails.config.custom.EXCEL;
let SQLS = sails.config.custom.SQLS;
let start = 2;
let end = 2;


function addProject(sheet, data, dict) {
    if (!data || data.length == 0) {return}
    start = end;
    end += data.projects.length;
    try {
        data.projects.map((p, index) => {
            let tasks = p.tasks;
            end += tasks.length;
            //添加项目
            p.areaname = data.areaname;
            p.taskDutyPerson = p.dutyPerson;
            p.taskStatus = getValue(dict.SUPPORT_TYPE, p.prostatus);
            p.index = index+1;
            p.prods = getValue(dict.PRODUCTS, p.prods);
            let proRow = sheet.addRow(p);
            proRow.alignment = { vertical: 'middle'};
            proRow.height = 25;
            proRow.eachCell({includeEmpty: true}, function(cell) {
                cell.fill = EXCELCONF.fills.project;
                cell.font = {bold: true, color: { argb: 'FF436EEE' }};
            });
            //添加任务
            tasks.map((t, i) => {
                t.index = i+1;
                t.period = getValue(dict.TASK_PERIOD, t.period);
                t.taskType = getValue(dict.TASK_TYPE, t.taskType);
                t.prods = getValue(dict.PRODUCTS, t.prods);
                t.startDate = moment(parseInt(t.startDate)).format('YYYY/MM/DD');
                t.endDate = moment(parseInt(t.endDate)).format('YYYY/MM/DD');
                t.progress = getValue(dict.TASK_PROGRESS, t.progress);
                t.taskStatus = getValue(dict.PRO_STATUS, t.taskStatus);
                sheet.addRow(t);
            });
        });
        if(start == end) return;
        sheet.mergeCells("A"+start, "A"+(end-1));
        sheet.getCell("A"+start).fill = EXCELCONF.fills.task;
    } catch (error) {
        throw error
    }
}

function addProjSet(sheet, data, dict) {
   try {
        if (!data || data.length == 0) {return}
        Object.values(data).map(item => {addProject(sheet, item, dict)});
   } catch (error) {
       throw error
   }
}

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
    async makeExcel(cb) {
        try {
            //创建表格
            var workbook = new Excel.Workbook();
            //创建工作簿
            var wrSheet = workbook.addWorksheet(moment().format('YYYY-MM-DD周报'), {
                properties: {showGridLines: true},
                views:[{showGridLines: true}]
            });
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
            let data = await this.getExcelData();
            addProjSet(wrSheet, data.areas, data.dict);
            var periodCol = wrSheet.getColumn('period');
            periodCol.eachCell(function(cell) {
                if (cell.value == "本周") {
                    cell.fill = {type: "pattern", pattern: "solid", fgColor: { argb: "FFC1FFC1" }}
                } else if(cell.value == "下周"){
                    cell.fill = {type: "pattern", pattern: "solid", fgColor: { argb: "FFEEE0E5" }}
                }
            });
            var filename = moment().format(EXCELCONF.wrExcelName)+".xlsx";
            workbook.xlsx.writeFile(EXCELCONF.wrOutPath+filename).then(res => {
                cb(EXCELCONF.wrPrefix + filename);
            }, function (error) {
                throw error
            });
        } catch (error) {
            throw error;
        }
    },
    async getExcelData() {
        try {
            let startDate = moment().startOf('isoWeek').add(-7, 'days').format('x'); // 上周一 00时00分00秒
            let endDate =  moment().endOf('isoWeek').add(-7, 'days').format('x'); // 上周日 23时59分59秒
            let areas = await Area.find();
            let projects = await sails.sendNativeQuery(SQLS.EXCEL_PROJECT);
            let tasks = await sails.sendNativeQuery(SQLS.TASK_LIST, [startDate, endDate]);
            projects.rows.map(p => {p.tasks = tasks.rows.filter(t => t.pid == p.id)});
            areas.map(a => {a.projects = projects.rows.filter(p => p.area == a.id);});
            let dict = await System.findOne({where: {key: 'dict'}, select: ['value']});
            return await {areas: areas, dict: JSON.parse(dict.value)};
        } catch (error) {
            throw error;
        }
    }
}