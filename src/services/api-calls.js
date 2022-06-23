const baseURL = 'https://www.dnd5eapi.co'

export function getClassList() {
    return fetch(`${baseURL}/api/classes`)
    .then(res => res.json())
}