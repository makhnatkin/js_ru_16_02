//import {accounts, comments} from '../fixtures'
import AccountStore from './AccountStore'
import CommentStore from './CommentStore'

let stores = {}
Object.assign(stores, {
    accounts: new AccountStore(stores),
    comments: new CommentStore(stores)
})

window.stores = stores

export const accountsStore = stores.accounts
export const commentStore = stores.comments
