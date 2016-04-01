import SimpleStore from './SimpleStore'
import AppDispatcher from '../dispatcher'
import { SET_SELECTED_ACCOUNT, LOAD_ALL_ACCOUNTS, LOAD_ACCOUNT_BY_ID, LOAD_MATRIX, _START, _FAIL, _SUCCESS } from '../actions/constants'
import { loadAllAccounts, loadMatrix } from '../actions/accounts'

class AccountStore extends SimpleStore {
    constructor(...args) {
        super(...args)
        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response, error } = action

            switch (type) {
                case SET_SELECTED_ACCOUNT:
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
                    response.forEach(this.add)
                    this.emitChange()
                    break;

                default: 
            }
        })
    }

    getOrLoadAll() {
        if (!this.loading && !this.loaded) {
            loadAllAccounts()
            loadMatrix()
        }
        return this.getAll()
    }

    getAccountsList(selectedIid, masterId) {
        if (!this.matrix) return {}
        if (!selectedIid) selectedIid = this.matrix[0].productId;

        const compatibleProducts = this.matrix.filter(item => item.productId === selectedIid)[0].compatibleProductId;
        let f = this.__items.filter(item => ~compatibleProducts.indexOf(item.id));
        const fil = masterId ? f.filter(item => item.id !== masterId) : f;
        const list = fil.map(({id, productName}) => {return {
            label: productName,
            value: id.toString()
        }});

        return Object.assign({}, fil[0], {
            selected: fil[0].id,
            list
        });
    }
}

export default AccountStore























