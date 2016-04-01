import SimpleStore from './SimpleStore'
import AppDispatcher from '../dispatcher'
import { ADD_ACCOUNT, SET_SELECTED_ACCOUNT, LOAD_ALL_ACCOUNTS, LOAD_ACCOUNT_BY_ID, LOAD_MATRIX, _START, _FAIL, _SUCCESS } from '../actions/constants'

class AccountStore extends SimpleStore {
    constructor(...args) {
        super(...args)
        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response, error } = action

            switch (type) {
                case ADD_ACCOUNT:
                    this.add({
                        id: data.id,
                        masterId: data.masterId,
                        selected: data.selected
                    })
                    this.emitChange()
                    break;

                case SET_SELECTED_ACCOUNT:
                    this.setSelected({
                        id: data.id,
                        selected: data.selected
                    })
                    this.emitChange()
                    break;

                case LOAD_MATRIX + _SUCCESS:
                    this.matrix = response
                    this.emitChange()
                    break;

                case LOAD_ALL_ACCOUNTS + _START:
                    this.loading = true
                    this.loaded = false
                    this.emitChange()
                    break;

                case LOAD_ALL_ACCOUNTS + _FAIL:
                    this.loaded = false
                    this.loading = false
                    this.error = error
                    this.emitChange()
                    break;

                case LOAD_ALL_ACCOUNTS + _SUCCESS:
                    this.loaded = true
                    this.loading = false
                    this.products = response
                    this.emitChange()
                    break;

                default: 
            }
        })
    }

    setSelected({id, selected}) {
        const masterId = this.getById(id).masterId;
        this.add({id, selected, masterId})
    }

    getById = (id) => {
        if (!this.matrix || !this.products) return null;

        // get item by id
        let item = this.__items.filter(item => item.id == id)[0];

        // add selected and list to item
        let selected = item.selected ? item.selected : this.matrix[0].productId;
        const masterSelected = item.masterId ? this.getById(item.masterId).selected : null; 
        const list = this.getItemList(selected, masterSelected);
        selected = item.masterId ? this.getSelected(selected, list) : selected;
        // console.log('====', selected, list)

        return Object.assign({}, item, {selected, list});
    }

    getItemList(selected, masterId) {
        const compatibleProducts = this.matrix.filter(item => item.productId === selected)[0].compatibleProductId;
        let f = this.products.filter(item => ~compatibleProducts.indexOf(item.id));
        const filtered = masterId ? f.filter(item => item.id !== masterId) : f;
        return filtered.map(({id, productName}) => {
            return {
                label: productName,
                value: id.toString()
            }
        });
    }

    getSelected(selected, list) {
        const inside = list.filter(i => i.value === selected).length;
        return inside ? selected : list[0].value;
    }
}

export default AccountStore























