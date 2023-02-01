const geometries = [
  'centre',
  'contour',
  'bbox'
]

const formats = [
  'json',
  'geojson'
]

// Fields
const lat = {name: 'lat', description: 'Latitude (en degrés)', type: 'number'}
const lon = {name: 'lon', description: 'Longitude (en degrés)', type: 'number'}
const nom = {name: 'nom', description: 'Nom de la commune', type: 'string'}
const code = {name: 'code', description: 'Code (INSEE) de la commune', type: 'string'}
const codeEpci = {name: 'codeEpci', description: 'Code de l’EPCI associé', type: 'string'}
const chefLieu = {name: 'chefLieu', description: 'Commune chef-lieu de la commune associé ou déléguée', type: 'string'}
const codeDepartement = {name: 'codeDepartement', description: 'Code du département associé', type: 'string'}
const codeRegion = {name: 'codeRegion', description: 'Code de la région associée', type: 'string'}
const fields = {name: 'fields', description: 'Liste des champs souhaités dans la réponse', type: 'array [string]'}
const type = {name: 'type', description: 'Type, peut être commune-associee et/ou commune-deleguee', type: 'array [string]'}
const format = {name: 'format', description: 'Format de réponse attendu', type: 'string', data: formats}
const geometry = {name: 'geometry', description: 'Géométrie à utiliser pour la sortie géographique (format GeoJSON)', type: 'string', data: geometries}

const params = [
  lon,
  lat,
  nom,
  code,
  chefLieu,
  codeEpci,
  codeDepartement,
  codeRegion,
  type,
  fields,
  format,
  geometry
]

// Arguments
const epci = {
  name: 'epci',
  description: 'EPCI associé à la commune',
  type: 'object',
  model: {
    code: 'string',
    nom: 'string'
  }
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
  description: 'Surface de la commune, en hectares',
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

const contour = {
  name: 'contour',
  description: 'Géométrie de type polygon représentant le contour de la commune',
  type: 'object',
  model: {
    type: 'Polygon',
    coordinates: [
      'number'
    ]
  }
}

const bbox = {
  name: 'bbox',
  description: 'Géométrie de type polygon représentant la bbox de la commune',
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
  {name: '/communes_associees_deleguees', description: 'Rechercher des communes', params},
  {name: '/communes_associees_deleguees/{code}', description: 'Récupérer les informations concernant une commune', params: [code, fields, format, geometry]}
]

const defaultModel = [
  {
    code: 'string',
    nom: 'string',
    type: 'string',
    chefLieu: 'string',
    codeEpci: 'string',
    codeDepartement: 'string',
    codeRegion: 'string',
    _score: 1
  }
]

const defaultAttributs = [
  code,
  nom,
  type,
  chefLieu,
  codeEpci,
  codeDepartement,
  codeRegion,
  _score
]

const optionAttributs = [
  epci,
  departement,
  region,
  surface,
  centre,
  contour,
  bbox
]

export default {paths, defaultModel, defaultAttributs, optionAttributs}
