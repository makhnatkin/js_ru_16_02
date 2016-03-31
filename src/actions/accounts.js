import AppDispatcher from '../dispatcher'
import { DELETE_ACCOUNT, LOAD_ALL_ACCOUNTS, LOAD_ACCOUNT_BY_ID, LOAD_MATRIX } from './constants'
import { loadAllAccounts as loadAll } from './api/account'
import { loadMatrix as loadM } from './api/matrix'
import { asyncAC } from './api/utils'

export function deleteAccount(id) {
    AppDispatcher.dispatch({
        type: DELETE_ACCOUNT,
        data: { id }
    })
}

export const loadAllAccounts = asyncAC(LOAD_ALL_ACCOUNTS, loadAll)
export const loadMatrix = asyncAC(LOAD_MATRIX, loadM)

//export const loadAccountById = asyncAC(LOAD_ACCOUNT_BY_ID, loadById)