let PROJECT_ERR = sails.config.custom.PROJECT;
let SQLS = sails.config.custom.SQLS;
let COMMON = sails.config.custom.COMMON;
module.exports = {
    //获取项目
    async getProdList(req, res) {
        try {
            let {
                areaId = 1,
                pageIndex = COMMON.pageIndex,
                pageSize = COMMON.pageSize
            } = req.query;
            let prods = await sails.sendNativeQuery(SQLS.PROJECT_SEARCH, [areaId, pageIndex * pageSize, (pageIndex + 1) * pageSize]);
            let putCounts = await sails.sendNativeQuery(SQLS.PUT_COUNT);
            prods.rows.map(item => {
                let oneCount = putCounts.rows.filter(count => item.id == count.pid)[0];
                item.putCount = oneCount ? oneCount.count : 0;
            })
            prods.rows.sort((a, b) => {return b.putCount - a.putCount;});
            res.wrRes(PROJECT_ERR.getOk, prods.rows);
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //添加项目
    async createProject(req, res) {
        try {
            let project = req.body;
            let person = req.session.curuser;
            project.createPerson = person.id;
            Project.findOrCreate({name: project.name}, project).exec(async(err, project, wasCreated)=> {
                if (err) { res.wrErrRes(err); }
                if (!wasCreated && project) {
                    res.wrRes(PROJECT_ERR.has, project);
                } else {
                    res.wrRes(PROJECT_ERR.add, project);
                }
            })
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    // 删除项目
    async deleteProject(req, res) {
        try {
            let prodId = req.param('id');
            let prod = await Project.updateOne({id: prodId}).set({status: COMMON.deleted});
            if (prod) {
                res.wrRes(PROJECT_ERR.del);
            } else {
                res.wrRes(PROJECT_ERR.no);
            }
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //修改项目
    async updateProdById(req, res) {
        try {
            let project = req.body;
            var updatedProd = await Project.updateOne({id: project.id}).set(project);
            if (updatedProd) {
                res.wrRes(PROJECT_ERR.update, updatedProd);
            } else {
                res.wrRes(PROJECT_ERR.updateErr);
            }
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //根据id获取项目
    async getProdById(req, res) {
        try {
            let prodId = parseInt(req.param('id'));
            var prod = await Project.findOne({id: prodId});
            res.wrRes(PROJECT_ERR.getOk, prod);
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //获取责任人项目
    async getProdByPersonId(req, res) {
        try {
            let prodPersonId = parseInt(req.param('dutyId'));
            var prods = await Project.find({ dutyPerson: prodPersonId });
            res.wrRes(PROJECT_ERR.getOk, prods);
        } catch (error) {
            res.wrErrRes(error);
        }
    }
}