module.exports = {
    "GET /area/get_area" :                            { action: 'Area/getAllArea'}, //获取项目集
    "POST /area/add_area" :                           { action: 'Area/addOneArea'}, //添加项目集
    "POST /area/update_area" :                        { action: 'Area/updateOneArea'}, //修改一个项目集
    "POST /area/update_arealist":                     { action: 'Area/updateAreas'}, //修改多个项目集
    'DELETE /area/delete/:id':                        { action: 'Area/delOneArea' }, //删除项目集
}