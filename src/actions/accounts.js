import AppDispatcher from '../dispatcher'
import { DELETE_ACCOUNT, LOAD_ALL_ARICLES, LOAD_ACCOUNT_BY_ID } from './constants'
import { loadAll, loadAccountById as loadById} from './api/account'
import { asyncAC } from './api/utils'

export function deleteAccount(id) {
    AppDispatcher.dispatch({
        type: DELETE_Account,
        data: { id }
    })
}

export const loadAllAccounts = asyncAC(LOAD_ALL_ARICLES, loadAll)
export const loadAccountById = asyncAC(LOAD_ACCOUNT_BY_ID, loadById)