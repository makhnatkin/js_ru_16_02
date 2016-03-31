import $ from 'jquery'

export function loadAll() {
    return $.get('/api/account')
}

export function loadAccountById({ id }) {
    return $.get(`/api/account/${id}`)
}