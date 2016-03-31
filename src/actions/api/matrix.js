import $ from 'jquery'

export function loadMatrix() {
    return $.get(`/api/productCompatibility`)
}