// Fields
const nom = {name: 'nom', description: 'Nom de la région', type: 'string'}
const code = {name: 'code', description: 'Code (INSEE) de la région', type: 'string'}
const zone = {name: 'zone', description: 'Zone, métropole (metro), DROM (drom) et COM (com)', type: 'array [string]'}
const fields = {name: 'fields', description: 'Liste des champs souhaités dans la réponse', type: 'array [string]'}

const _score = {
  name: '_score',
  description: 'Score de correspondance allant de 0 à 1',
  type: 'number'
}

const paths = [
  {name: '/regions', description: 'Rechercher des régions', params: [code, nom, fields]},
  {name: '/regions/{code}', description: 'Récupérer les informations concernant une région', params: [code, fields]}
]

const defaultModel = [
  {
    code: 'string',
    nom: 'string'
  }
]

const defaultAttributs = [
  code,
  nom,
  _score
]

const optionAttributs = [
  zone
]

export default {paths, defaultModel, defaultAttributs, optionAttributs}
