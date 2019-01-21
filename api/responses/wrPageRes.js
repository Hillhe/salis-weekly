/**
 *
 * This will be available in controllers as res.wrErrRes('foo');
 */
let COMMON = sails.config.custom.COMMON;
module.exports = function wrPageRes(message, total = 0, pageIndex = COMMON.pageIndex, pageSize = COMMON.pageSize, data = []) {
    var req = this.req;
    var res = this.res;
    var result = {}, resultData = {};
    
    // Optional message
    result.code = message.code || 200;
    result.message = message.msg || message;
    resultData.total = total;
    resultData.pageIndex = pageIndex;
    resultData.pageSize = pageSize;
    resultData.list = data;
    result.data = resultData;
    
    if (req.wantsJSON) {
        sails.log.info(result);
        return res.json(result);
    }
}