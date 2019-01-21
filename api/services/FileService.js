let moment = require("moment");
module.exports = {
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
                    res.wrRes(FILE_ERR.uploadok, { imgurl: imgUrl });
                }
            });
        } catch (error) {
            res.wrErrRes(error);
        }
    }
}