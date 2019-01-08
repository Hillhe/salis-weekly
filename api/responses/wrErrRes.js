/**
 *
 * This will be available in controllers as res.myResponse('foo');
 */

module.exports = function wrErrRes(message, data, code) {
    var req = this.req;
    var res = this.res;
    var result = {};
    
    // Optional message
    result.code = code || 500;
    result.message = message || "";
    result.data = data || [];
    
    if (req.wantsJSON) {
        sails.log('--------response error---------', JSON.stringify(result));
        return res.json(result);
    }
}