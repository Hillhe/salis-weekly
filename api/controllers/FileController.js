let FILECONF = sails.config.custom.FILECONF;
let FILE_ERR = sails.config.custom.FILE;
var path = require("path");
function resolve(dir) {
    return path.join(__dirname, "../../", dir);
}
module.exports = {
    //上传文件
    async upload(req, res) {
        try {
            req.file('file').upload({
                maxBytes: FILECONF.maxBytes,
                dirname: resolve(FILECONF.imgOutPath),
                saveAs: function (__newFileStream, next) { 
                    return next(undefined, __newFileStream.filename);
                }
            }, function whenDone(err, uploadedFiles) {
                if (err) {
                    res.wrErrRes(err);
                } else {
                    let imgUrl = "/imgs/" + uploadedFiles[0].filename;
                    res.wrRes(FILE_ERR.uploadok, {imgurl: imgUrl});
                }
            });
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //导出excel
    async exportWeeklyExcel(req, res) {
        try {
            await FileService.makeExcel(result => {
                sails.log.debug(result);
                res.wrRes(FILE_ERR.exportok, result);
            });
        } catch (error) {
            res.wrErrRes(error);
        }
    }
}