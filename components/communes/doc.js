const geometries = [
  'centre',
  'contour',
  'bbox',
  'mairie'
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
const siren = {name: 'siren', description: 'Code SIREN de la commune', type: 'string'}
const codeEpci = {name: 'codeEpci', description: 'Code de l’EPCI associé', type: 'string'}
const codeDepartement = {name: 'codeDepartement', description: 'Code du département associé', type: 'string'}
const codeRegion = {name: 'codeRegion', description: 'Code de la région associée', type: 'string'}
const fields = {name: 'fields', description: 'Liste des champs souhaités dans la réponse', type: 'array [string]'}
const zone = {name: 'zone', description: 'Zone, métropole (metro), DROM (drom) et COM (com)', type: 'array [string]'}
const type = {name: 'type', description: 'Type, peut être commune-actuelle et/ou arrondissement-municipal', type: 'array [string]'}
const format = {name: 'format', description: 'Format de réponse attendu', type: 'string', data: formats}
const geometry = {name: 'geometry', description: 'Géométrie à utiliser pour la sortie géographique (format GeoJSON)', type: 'string', data: geometries}

const params = [
  codePostal,
  lon,
  lat,
  nom,
  boost,
  code,
  siren,
  codeEpci,
  codeDepartement,
  codeRegion,
  zone,
  type,
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

const mairie = {
  name: 'mairie',
  description: 'Géométrie de type point représentant l’emplacement la mairie de la commune sauf pour les communes mortes pour la France et les COM où l’on retourne le centre',
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
  description: 'Nombre d’habitants de la commune',
  type: 'number'
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
  {name: '/communes', description: 'Rechercher des communes', params},
  {name: '/communes/{code}', description: 'Récupérer les informations concernant une commune', params: [code, fields, format, geometry]},
  {name: '/epcis/{code}/communes', description: 'Renvoi les communes d’un EPCI', params: [code, fields, format, geometry]},
  {name: '/departements/{code}/communes', description: 'Renvoi les communes d’un département', params: [code, fields, format, geometry]}
]

const defaultModel = [
  {
    code: 'string',
    nom: 'string',
    codesPostaux: [
      'string'
    ],
    codeEpci: 'string',
    codeDepartement: 'string',
    codeRegion: 'string',
    population: 0,
    _score: 1
  }
]

const defaultAttributs = [
  code,
  nom,
  siren,
  codesPostaux,
  codeEpci,
  codeDepartement,
  codeRegion,
  population,
  _score
]

const optionAttributs = [
  type,
  epci,
  departement,
  region,
  surface,
  centre,
  contour,
  mairie,
  bbox
]

export default {paths, defaultModel, defaultAttributs, optionAttributs}
