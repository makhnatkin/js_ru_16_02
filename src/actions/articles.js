import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, LOAD_ALL_ARICLES, LOAD_ARTICLE_BY_ID, GET_FILTERED_ARTICLES } from './constants'
import { loadAll, loadArticleById as loadById} from './api/article'
import { asyncAC } from './api/utils'

export function deleteArticle(id) {
    AppDispatcher.dispatch({
        type: DELETE_ARTICLE,
        data: { id }
    })
}

export function selecteArticles(ids) {
    AppDispatcher.dispatch({
        type: GET_FILTERED_ARTICLES,
        data: { ids }
    })
}

export const loadAllArticles = asyncAC(LOAD_ALL_ARICLES, loadAll)
export const loadArticleById = asyncAC(LOAD_ARTICLE_BY_ID, loadById)