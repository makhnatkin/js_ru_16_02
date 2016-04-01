import AppDispatcher from '../dispatcher'
import { ADD_ACCOUNT, SET_SELECTED_ACCOUNT, LOAD_ALL_ACCOUNTS, LOAD_ACCOUNT_BY_ID, LOAD_MATRIX } from './constants'
import { loadAllAccounts as loadAll } from './api/account'
import { loadMatrix as loadM } from './api/matrix'
import { asyncAC } from './api/utils'

export function addAccount(id, masterId) {
    AppDispatcher.dispatch({
        type: ADD_ACCOUNT,
        data: { id, masterId }
    })
}

export function setSelectedAccount(id, selected) {
    AppDispatcher.dispatch({
        type: SET_SELECTED_ACCOUNT,
        data: { id, selected }
    })
}

export const loadAllAccounts = asyncAC(LOAD_ALL_ACCOUNTS, loadAll)
export const loadMatrix = asyncAC(LOAD_MATRIX, loadM)

//export const loadAccountById = asyncAC(LOAD_ACCOUNT_BY_ID, loadById)