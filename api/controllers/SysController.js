let COMMON = sails.config.custom.COMMON;
let SYS = sails.config.custom.SYS;
module.exports = {
    //获取项目配置
    async getSysConf(req, res) {
        try {
            var rawResult = await SYS.find();
            let result = {};
            if (rawResult && rawResult.rows.length > 0) {
                rawResult.rows.map(item => {
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
            let orgs = await Org.find(); 
            let users = await User.find();
            let treeRoot = orgs.filter(item => item.parentId == COMMON.rootParentId);
            treeRoot.map(root => {
                root.children = orgs.filter(item => item.parentId == root.orgCode);
                root.children.map(child => {
                    child.children = users.filter(user => user.orgCode == child.orgCode);
                });
            });

            res.wrRes(SYS.ok, treeRoot);
        } catch (error) {
            res.wrErrRes(error);
        }
    }
}