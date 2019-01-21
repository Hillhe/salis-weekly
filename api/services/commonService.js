module.exports = {
    //根据id批量更新
    async batchUpdateById(Model, data) {
        if(!data || data.length == 0) return Promise.resolve([]);
        let tasks = [];
        for (let i = 0; i < data.length; i++) {
            const ele = data[i];
            let result = await Model.updateOne({id: ele.id}).set(ele).fetch();
            tasks.push(result);
        }
        return await tasks;
    }
}