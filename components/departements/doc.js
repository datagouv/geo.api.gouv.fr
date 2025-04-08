// Fields
const nom = {name: 'nom', description: 'Nom du département', type: 'string'}
const code = {name: 'code', description: 'Code (INSEE) du département', type: 'string'}
const codeRegion = {name: 'codeRegion', description: 'Code de la région associée', type: 'string'}
const zone = {name: 'zone', description: 'Zone, métropole (metro), DROM (drom) et COM (com)', type: 'array [string]'}
const chefLieu = {name: 'chefLieu', description: 'Code (INSEE) du chef-lieu associé au département', type: 'string'}
const fields = {name: 'fields', description: 'Liste des champs souhaités dans la réponse', type: 'array [string]'}

const region = {
  name: 'region',
  description: 'Région associée à la commune',
  type: 'object',
  model: {
    code: 'string',
    nom: 'string'
  }
}

const _score = {
  name: '_score',
  description: 'Score de correspondance allant de 0 à 1',
  type: 'number'
}

const paths = [
  {name: '/departements', description: 'Rechercher des départements', params: [code, codeRegion, nom, fields]},
  {name: '/departements/{code}', description: 'Récupérer les informations concernant un département', params: [code, fields]},
  {name: '/regions/{code}/departements', description: 'Renvoi les départements d’une région', params: [code, fields]}
]

const defaultModel = [
  {
    code: 'string',
    nom: 'string',
    codeRegion: 'string'
  }
]

const defaultAttributs = [
  code,
  nom,
  _score
]

const optionAttributs = [
  codeRegion,
  region,
  zone,
  chefLieu
]

export default {paths, defaultModel, defaultAttributs, optionAttributs}
