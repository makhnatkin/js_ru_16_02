import $ from 'jquery'

export function loadCommentsByArticleId({ id }) {
    return $.get(`/api/comment/?article=${id}`)
    // return $.get(`/api/article/${id}`)
}