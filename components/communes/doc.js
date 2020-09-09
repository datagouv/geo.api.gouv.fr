const geometries = [
  'centre',
  'contour'
]

const formats = [
  'json',
  'geojson'
]

// Fields
const codePostal = {name: 'codePostal', description: 'Code postal associé', type: 'string'}
const lat = {name: 'lat', description: 'Latitude (en degrés)', type: 'number'}
const lon = {name: 'lon', description: 'Longitude (en degrés)', type: 'number'}
const nom = {name: 'nom', description: 'Nom de la commune', type: 'string'}
const boost = {name: 'boost', description: 'Mode de boost de la recherche par nom', type: 'string'}
const code = {name: 'code', description: 'Code (INSEE) de la commune', type: 'string'}
const codeDepartement = {name: 'codeDepartement', description: 'Code du département associé', type: 'string'}
const codeRegion = {name: 'codeRegion', description: 'Code de la région associée', type: 'string'}
const fields = {name: 'fields', description: 'Liste des champs souhaités dans la réponse', type: 'array [string]'}
const format = {name: 'format', description: 'Format de réponse attendu', type: 'string', data: formats}
const geometry = {name: 'geometry', description: 'Géométrie à utiliser pour la sortie géographique (format GeoJSON)', type: 'string', data: geometries}

const params = [
  codePostal,
  lon,
  lat,
  nom,
  boost,
  code,
  codeDepartement,
  codeRegion,
  fields,
  format,
  geometry
]

// Arguments
const codesPostaux = {
  name: 'codesPostaux',
  description: 'Liste des codes postaux de la commune',
  type: 'array'
}

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

const surface = {
  name: 'surface',
  description: 'Surface de la commune exprimée en mètre carré',
  type: 'number'
}

const centre = {
  name: 'centre',
  description: 'Géométrie de type point représentant le centre géographique de la commune',
  type: 'object',
  model: {
    type: 'Point',
    coordinates: [
      'number'
    ]
  }
}

const population = {
  name: 'population',
  description: 'Nombre d’habitant de la commune',
  type: 'number'
}

const contour = {
  name: 'contour',
  description: 'Géométrie de type polygon représentant les contours de la communes',
  type: 'object',
  model: {
    type: 'Polygon',
    coordinates: [
      'number'
    ]
  }
}

const _score = {
  name: '_score',
  description: 'Score de correspondance allant de 0 à 1',
  type: 'number'
}

const paths = [
  {name: '/communes', description: 'Rechercher des communes', params},
  {name: '/communes/{code}', description: 'Récupérer les informations concernant une commune', params: [code, fields, format, geometry]},
  {name: '/departements/{codeDepartement}/communes', description: 'Renvoie les communes d’un département', params: [codeDepartement, fields, format, geometry]},
  {name: '/regions/{codeRegion}/communes', description: 'Renvoie les communes d’une région', params: [codeRegion, fields, format, geometry]}
]

const defaultModel = [
  {
    code: 'string',
    nom: 'string',
    codesPostaux: [
      'string'
    ],
    codeDepartement: 'string',
    codeRegion: 'string',
    population: 0,
    _score: 1
  }
]

const defaultAttributs = [
  code,
  nom,
  codesPostaux,
  codeDepartement,
  codeRegion,
  population,
  _score
]

const optionAttributs = [
  departement,
  region,
  surface,
  centre,
  contour
]

export default {paths, defaultModel, defaultAttributs, optionAttributs}
