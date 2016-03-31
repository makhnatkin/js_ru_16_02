import $ from 'jquery'

export function loadAllAccounts() {
    return $.get('/api/account')
}