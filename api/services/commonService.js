module.exports = {
    //根据id批量更新
    async batchUpdateById(Model, data) {
        if (!data || data.length == 0) return Promise.resolve([]);
        let tasks = [];
        for (let i = 0; i < data.length; i++) {
            const ele = data[i];
            let result = await Model.updateOne({ id: ele.id }).set(ele);
            tasks.push(result);
        }
        return await tasks;
    },
    //根据id, 获取字典值
    getValue(dict, keys) {
        try {
            if (!keys || !dict) return "";
            keys = keys.split(",");
            let matchs = Object.values(dict).filter(d => keys.includes(d.key + ""));
            let values = matchs.map(m => m.value);
            return values.join("、");
        } catch (error) {
            throw error
        }
    }
}