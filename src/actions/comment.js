import AppDispatcher from '../dispatcher'
import { ADD_COMMENT, LOAD_COMMENTS_BY_ARTICLE_ID } from './constants'
import { loadCommentsByArticleId as loadComments} from './api/comment'
import { asyncAC } from './api/utils'

export function addComment(text, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {
            text,
            id: Date.now(),
            articleId
        }
    })
}

export const loadCommentsByArticleId = asyncAC(LOAD_COMMENTS_BY_ARTICLE_ID, loadComments)