/**
 *
 * This will be available in controllers as res.wrErrRes('foo');
 */

module.exports = function wrErrRes(message, data) {
    var req = this.req;
    var res = this.res;
    var result = {};
    
    // Optional message
    result.code = message.code || 500;
    result.message = message.msg || message;
    result.data = data || [];
    
    if (req.wantsJSON) {
        sails.log.error(result);
        return res.json(result);
    }
}