let PROJECT_ERR = sails.config.custom.PROJECT;
module.exports = {
    //添加项目
    async createProject(req, res) {
        try {
            let project = req.body;
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
            let prod = await Project.destroyOne({id: prodId});
            if (prod) {
                res.wrRes(PROJECT_ERR.del);
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
            var prods = await Project.find({ dutyPeople: prodPersonId });
            res.wrRes(PROJECT_ERR.getOk, prods);
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //获取区域项目
    async getProdByAreaId(req, res) {
        try {
            let prodAreaId = parseInt(req.param('areaId'));
            var prods = await Project.find({ belongArea: prodAreaId });
            res.wrRes(PROJECT_ERR.getOk, prods);
        } catch (error) {
            res.wrErrRes(error);
        }
    }
}