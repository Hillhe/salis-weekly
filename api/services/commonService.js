module.exports = {
    async batchUpdateById(Model, data) {
        if(!data || data.length == 0) Promise.resolve([]);
        let tasks = [];
        for (let i = 0; i < data.length; i++) {
            const ele = data[i];
            let result = await Model.updateOne({id: ele.id}).set(ele);
            tasks.push(result);
        }
        return await tasks;
    }
}