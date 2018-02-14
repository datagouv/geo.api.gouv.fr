const geometries = [
  'centre',
  'contour'
]

const formats = [
  'json',
  'geojson'
]

// Fields
const nom = {name: 'nom', description: 'Nom du département', type: 'string'}
const code = {name: 'code', description: 'Code (INSEE) du département', type: 'string'}
const codeRegion = {name: 'codeRegion', description: 'Code de la région associée', type: 'string'}
const fields = {name: 'fields', description: 'Liste des champs souhaités dans la réponse', type: 'array [string]'}
const format = {name: 'format', description: 'Format de réponse attendu', type: 'string', data: formats}
const geometry = {name: 'geometry', description: 'Géométrie à utiliser pour la sortie géographique', type: 'string', data: geometries}

// Arguments
const departement = {
  name: 'departement',
  description: 'Département associé à la commune',
  type: 'object',
  model: {
    code: 'string',
    nom: 'string',
    codeRegion: 'string'
  }
}

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
  {name: '/departements/{code}/communes', description: 'Renvoi les communes d’un département', params: [code, fields, format, geometry]},
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
  codeRegion,
  region,
  _score
]

const optionAttributs = [
  departement,
  region
]

export default {paths, defaultModel, defaultAttributs, optionAttributs}
