const baseURL = 'https://www.dnd5eapi.co'

export function getClassList() {
    return fetch(`${baseURL}/api/classes`)
    .then(res => res.json())
};

export function getDetails(apiURL) {
    return fetch(`${baseURL}${apiURL}`)
    .then(res => res.json())
};

export function getMonsterList(){
    return fetch(`${baseURL}/api/monsters`)
    .then(res => res.json())
}

export function spellSearch(formData) {
    return fetch(`${baseUrl}/api/spells/?name=${formData.query}`)
    .then(res => res.json())
  }

