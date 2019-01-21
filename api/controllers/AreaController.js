let AREA_ERR = sails.config.custom.AREA;
let COMMON = sails.config.custom.COMMON;
module.exports = {
    //获取所有区域
    async getAllArea(req, res) {
        try {
            var rawResult = await await Area.find({ status: { '!=': COMMON.deleted } }).sort('order ASC');
            res.wrRes("ok", rawResult);
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //新增区域
    async addOneArea(req, res) {
        try {
            let { name } = req.body;
            Area.findOrCreate({ areaname: name }, { areaname: name }).exec(async (err, area, wasCreated) => {
                if (err) { res.wrErrRes(err); }
                await Area.updateOne({ id: area.id }).set({ order: area.id });
                let areas = await Area.find({ status: { '!=': COMMON.deleted } }).sort('order ASC');
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
    //更新一个区域
    async updateOneArea(req, res) {
        try {
            let { id, name } = req.body;
            var updateArea = await Area.updateOne({ id: id }).set({ areaname: name });
            if (updateArea) {
                res.wrRes(AREA_ERR.success, updateArea);
            } else {
                res.wrRes(AREA_ERR.no);
            }
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //更新多个区域
    async updateAreas(req, res) {
        try {
            let { areas = '[]' } = req.body;
            areas = JSON.parse(areas);
            sails.log.info(areas);
            let areaList = await commonService.batchUpdateById(Area, areas);
            res.wrRes(AREA_ERR.success, areaList);
        } catch (error) {
            res.wrErrRes(error);
        }
    },
    //删除区域
    async delOneArea(req, res) {
        try {
            let areaId = req.param('id');
            let area = await Area.updateOne({ id: areaId }).set({ status: COMMON.deleted });
            res.wrRes(AREA_ERR.success);
        } catch (error) {
            res.wrErrRes(error);
        }
    }
}