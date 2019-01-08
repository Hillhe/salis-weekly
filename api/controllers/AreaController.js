let AREA_ERR = sails.config.custom.AREA;
let COMMON = sails.config.custom.COMMON;
module.exports = {
    //获取所有区域
    async getAllArea(req, res) {
        try {
            var rawResult = await Area.find({status: { '!=' : COMMON.deleted }});
            res.wrRes("ok", rawResult);
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //新增区域
    async addOneArea(req, res) {
        try {
            let { name } = req.body;
            Area.findOrCreate({ name: name }, {name: name}).exec(async (err, area, wasCreated) => {
                if (err) { res.wrErrRes(err); }
                let areas = await Area.find({status: { '!=' : COMMON.deleted }});
                if (!wasCreated && area) {
                    res.wrRes(AREA_ERR.has, areas);
                } else {
                    res.wrRes(AREA_ERR.success, areas);
                }
            });
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //跟新区域
    async updataOneArea(req, res) {
        try {
            let { id, name } = req.body;
            var updateArea = await Area.updateOne({ id: id }).set({ name: name });
            if (updateArea) {
                res.wrRes(AREA_ERR.success, updateArea);
            } else {
                res.wrRes(AREA_ERR.no);
            }
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //删除区域
    async delOneArea(req, res) {
        try {
            let areaId = req.param('id');
            let area = await Area.updateOne({id: areaId}).set({status: 1});
            res.wrRes(AREA_ERR.success);
        } catch (error) {
            res.wrErrRes(error);
        }
    }
}