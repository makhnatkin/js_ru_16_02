import AppDispatcher from '../dispatcher'
import { ADD_COMMENT, LOAD_COMMENTS_FOR_ACCOUNT } from './constants'
import { loadForAccount } from './api/comment'
import { asyncAC } from './api/utils'

export function addComment(text, accountId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {
            text,
            id: Date.now(),
            accountId
        }
    })
}

export const loadCommentsForAccount = asyncAC(LOAD_COMMENTS_FOR_ACCOUNT, loadForAccount)