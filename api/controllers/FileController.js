let FILECONF = sails.config.custom.upload;
let FILE_ERR = sails.config.custom.UPLOAD;
var path = require("path");
function resolve(dir) {
    return path.join(__dirname, "../../", dir);
}
module.exports = {
    async upload(req, res) {
        try {
            req.file('file').upload({
                maxBytes: FILECONF.maxBytes,
                dirname: resolve(FILECONF.imgpath),
                saveAs: function (__newFileStream, next) { 
                    return next(undefined, __newFileStream.filename);
                }
            }, function whenDone(err, uploadedFiles) {
                if (err) {
                    res.wrErrRes(err);
                } else {
                    let imgUrl = "/imgs/" + uploadedFiles[0].filename;
                    res.wrRes(FILE_ERR.success, {imgurl: imgUrl});
                }
            });
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    async export(req, res) {
        FileService.makeExcel();
    }
}