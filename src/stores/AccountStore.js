import SimpleStore from './SimpleStore'
import AppDispatcher from '../dispatcher'
import { DELETE_ACCOUNT, LOAD_ALL_ACCOUNTS, LOAD_ACCOUNT_BY_ID, LOAD_MATRIX, _START, _FAIL, _SUCCESS } from '../actions/constants'
import { loadAllAccounts, loadMatrix } from '../actions/accounts'

class AccountStore extends SimpleStore {
    constructor(...args) {
        super(...args)
        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response, error } = action

            switch (type) {
                case DELETE_ACCOUNT:
                    this.delete(data.id)
                    break;

                // case ADD_COMMENT:
                //     AppDispatcher.waitFor([this.__stores.comments.dispatchToken])
                //     const account = this.getById(data.accountId)
                //     account.comments = (account.comments || []).concat(data.id)
                //     break

                case LOAD_MATRIX + _SUCCESS:
                    this.addMatrix(response)
                    break;

                case LOAD_ALL_ACCOUNTS + _START:
                    this.loading = true
                    this.loaded = false
                    break;

                case LOAD_ALL_ACCOUNTS + _FAIL:
                    this.loaded = false
                    this.loading = false
                    this.error = error
                    break

                case LOAD_ALL_ACCOUNTS + _SUCCESS:
                    this.loaded = true
                    this.loading = false
                    response.forEach(this.add)
                    break;

                // case LOAD_COMMENTS_FOR_ACCOUNT + _SUCCESS:
                //     AppDispatcher.waitFor([this.__stores.comments.dispatchToken])
                //     break;

                default: return
            }

            this.emitChange()
        })
    }

    getOrLoadAll() {
        if (!this.loading && !this.loaded) {
            loadAllAccounts()
            loadMatrix()
        }
        return this.getAll()
    }

    addMatrix(matrix) {
        this.matrix = matrix
    }

    getBySelectedId = (selectedIid, masterId) => {
        return this.__items.filter((item) => item.id == id)[0]
    }

}

export default AccountStore























