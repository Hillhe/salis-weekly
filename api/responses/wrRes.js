/**
 *
 * This will be available in controllers as res.myResponse('foo');
 */

module.exports = function wrRes(message, data, code) {
    var req = this.req;
    var res = this.res;
    var result = {};
    
    // Optional message
    result.code = code || 200;
    result.message = message || "";
    result.data = data || [];
    
    // If the user-agent wants a JSON response, send json
    if (req.wantsJSON) {
        sails.log.info(JSON.stringify(result));
        return res.json(result);
    }
}