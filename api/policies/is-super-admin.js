/**
 * is-super-admin
 *
 * A simple policy that blocks requests from non-super-admins.
 *
 * For more about how to use policies, see:
 *   https://sailsjs.com/config/policies
 *   https://sailsjs.com/docs/concepts/policies
 *   https://sailsjs.com/docs/concepts/policies/access-control-and-permissions
 */
module.exports = async function (req, res, proceed) {

  // First, check whether the request comes from a logged-in user.
  // > For more about where `req.session.isLogin` comes from, check out this app's
  if (!req.session.curuser) {
    return res.unauthorized();
  }//•

  // Then check that this user is a "super admin".
  sails.log(req.session.isSuperAdmin);
  if (!req.session.isSuperAdmin) {
    return res.unauthorized();
  }//•

  // IWMIH, we've got ourselves a "super admin".
  return proceed();

};
