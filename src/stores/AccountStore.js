import SimpleStore from './SimpleStore'
import { LOAD_COMMENTS_FOR_ACCOUNT, DELETE_ACCOUNT, ADD_COMMENT, LOAD_ALL_ARICLES, LOAD_ACCOUNT_BY_ID,_START, _FAIL, _SUCCESS } from '../actions/constants'
import AppDispatcher from '../dispatcher'
import { loadAllAccounts } from '../actions/accounts'

class AccountStore extends SimpleStore {
    constructor(...args) {
        super(...args)
        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response, error } = action

            switch (type) {
                case DELETE_ACCOUNT:
                    this.delete(data.id)
                    break;

                case ADD_COMMENT:
                    AppDispatcher.waitFor([this.__stores.comments.dispatchToken])
                    const account = this.getById(data.accountId)
                    account.comments = (account.comments || []).concat(data.id)
                    break

                case LOAD_ALL_ARICLES + _START:
                    this.loading = true
                    this.loaded = false
                    break;

                case LOAD_ALL_ARICLES + _FAIL:
                    this.loaded = false
                    this.loading = false
                    this.error = error
                    break

                case LOAD_ALL_ARICLES + _SUCCESS:
                    this.loaded = true
                    this.loading = false
                    response.forEach(this.add)
                    break;

                case LOAD_ACCOUNT_BY_ID + _START:
                    this.getById(data.id).loading = true
                    break;

                case LOAD_ACCOUNT_BY_ID + _SUCCESS:
                    this.add(response)
                    break;

                case LOAD_COMMENTS_FOR_ACCOUNT + _SUCCESS:
                    AppDispatcher.waitFor([this.__stores.comments.dispatchToken])
                    break;

                default: return
            }

            this.emitChange()
        })
    }

    getOrLoadAll() {
        if (!this.loading && !this.loaded) loadAllAccounts()
        return this.getAll()
    }
}

export default AccountStore