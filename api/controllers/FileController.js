let FILECONF = sails.config.custom.FILECONF;
let FILE_ERR = sails.config.custom.FILE;
let TaskController = require("./TaskController");
module.exports = {
    //导出周报
    async exportWeeklyExcel(req, res) {
        try {
            let data = await TaskController.getExcelData();
            await FileService.makeWeekExcel(data, result => {
                res.wrRes(FILE_ERR.exportok, result);
            });
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //上传文件-测试
    async upload(req, res) {
        try {
            req.file('file').upload({
                maxBytes: FILECONF.maxBytes,
                dirname: FILECONF.imgOutPath,
                saveAs: function (__newFileStream, next) { 
                    return next(undefined, __newFileStream.filename);
                }
            }, function whenDone(err, uploadedFiles) {
                if (err) {
                    throw err;
                } else {
                    let imgUrl = "/imgs/" + uploadedFiles[0].filename;
                    res.wrRes(FILE_ERR.uploadok, {imgurl: imgUrl});
                }
            });
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //导出周报-测试
    async export(req, res) {
        try {
            let data = await TaskController.getExcelData();
            await ExcelService.makeWeekExcel(data, result => {
                res.wrRes(FILE_ERR.exportok, result);
            });
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //读周报-测试
    async readExcel(req, res) {
        try {
            await ExcelService.readWeekExcel(async(result) => {
                let create = await Task.create(result);
                res.wrRes(FILE_ERR.exportok, create);
            });
        } catch (error) {
            res.wrErrRes(error);
        }
    }
}