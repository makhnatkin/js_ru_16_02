import $ from 'jquery'

export function loadForAccount({ accountId }) {
    return $.get(`/api/comment?account=${accountId}`)
}