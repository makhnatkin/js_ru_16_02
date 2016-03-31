import AccountStore from './AccountStore'

let stores = {}
Object.assign(stores, {
    accounts: new AccountStore(stores)
})

window.stores = stores

export const accountsStore = stores.accounts
