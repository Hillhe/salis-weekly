let moment = require('moment');
let USER_ERR = sails.config.custom.USER;
let COMMON = sails.config.custom.COMMON;
module.exports = {
    //用户登陆
    async login(req, res) {
        try {
            let {name, password} = req.body;
            let user = await User.findOne({or: [{username: name}, {email: name}, {realname: name}]});
            if (!user) {
                res.wrRes(USER_ERR.no);
            } else {
                if (user.password == password) {
                    var updatedUser = await User.updateOne({id: user.id}).set({lastLogin: moment().format('x'), visitTimes: ++user.visitTimes});
                    //保存到session
                    req.session.curuser = updatedUser;
                    res.wrRes(USER_ERR.logok, updatedUser);
                } else {
                    res.wrRes(USER_ERR.logerr);
                }
            }
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //新建用户
    createUser(req, res) {
        try {
            let role = req.body;
            User.findOrCreate({realname: role.realname}, role).exec(async(err, user, wasCreated) => {
                if (err) { res.wrErrRes(err);}
                if (!wasCreated && user) {
                    res.wrRes(USER_ERR.has, user);
                } else {
                    res.wrRes(USER_ERR.add, user);
                }
            });
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //删除用户
    async deleteUser(req, res) {
        try {
            let userId = req.param('id');
            let user = await User.updateOne({id: userId}).set({status: 1});
            if (user) {
                res.wrRes(USER_ERR.del);
            } else{
                res.wrRes(USER_ERR.no);
            }
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //密码修改
    async updatePassword(req, res) {
        try {
            let {userId, oldPass, newPass} = req.body;
            let user = await User.findOne({id: userId});
            if (!user) {
                res.wrRes(USER_ERR.no, user);
            } else {
                if (user.password == oldPass) {
                    var updatedUser = await User.updateOne({id: user.id}).set({password:newPass});
                    res.wrRes(USER_ERR.updateok, updatedUser);
                } else {
                    res.wrRes(USER_ERR.updateerr);
                }
            }
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //用户信息修改
    async updateInfo(req, res) {
        try {
            let newUser = req.body;
            let user = await User.findOne({id: newUser.id});
            if (!user) {
                res.wrRes(USER_ERR.no, user);
            } else {
                if (user.password == newUser.password) {
                    var updatedUser = await User.updateOne({id: user.id}).set(newUser);
                    res.wrRes(USER_ERR.updateok, updatedUser);
                } else {
                    res.wrRes(USER_ERR.updateerr);
                }
            }
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //获取用户列表
    async getUserList(req, res) {
        try {
            let { pageIndex = COMMON.pageIndex, pageSize = COMMON.pageSize, name = "", org = ""} = req.query;
            let users = await User.find({
                skip: pageIndex,
                limit: pageSize,
                where: {
                    or: [
                        { username: {contains: name }},
                        { realname: {contains: name }}
                    ],
                    orgCode: {contains: org },
                    status: { '!=' : COMMON.deleted }
                }
            })
            res.wrRes(USER_ERR.getok, users);
        } catch (error) {
            res.wrErrRes(error);
        }
    }
}