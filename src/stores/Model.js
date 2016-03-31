class Model {
    constructor(data, stores) {
        Object.assign(this, data)
        this.__stores = stores
    }
}

export default Model