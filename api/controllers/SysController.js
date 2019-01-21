let COMMON = sails.config.custom.COMMON;
let SELECT = sails.config.custom.SELECT;
let SYS = sails.config.custom.SYS;
module.exports = {
    //获取项目配置
    async getSysConf(req, res) {
        try {
            var rawResult = await System.find();
            let result = {};
            if (rawResult && rawResult.length > 0) {
                rawResult.map(item => {
                    result[item.key] = item.value;
                });
            }
            res.wrRes(SYS.ok, result);
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //获取组织树
    async getOrgTree(req, res) {
        try {
            let { type = 'org' } = req.query;
            let orgs = await Org.find(), users = [];
            if (type == "user") {
                users = await User.find({
                    where: {
                        status: { '!=': COMMON.deleted }
                    },
                    select: SELECT.user_select
                })
            };
            let treeRoot = orgs.filter(item => item.parentId == COMMON.rootParentId);
            treeRoot.map(root => {
                root.children = orgs.filter(item => item.parentId == root.orgCode);
                root.children.map(child => { child.children = users.filter(user => user.orgCode == child.orgCode); });
            });
            res.wrRes(SYS.ok, treeRoot);
        } catch (error) {
            res.wrErrRes(error);
        }
    }
}