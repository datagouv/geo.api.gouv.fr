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
const code = {name: 'code', description: 'Code (SIREN) de l’EPCI', type: 'string'}
const nom = {name: 'nom', description: 'Nom de l’EPCI', type: 'string'}
const boost = {name: 'boost', description: 'Mode de boost de la recherche par nom', type: 'string'}
const codeDepartement = {name: 'codeDepartement', description: 'Code du département associé', type: 'string'}
const codeRegion = {name: 'codeRegion', description: 'Code de la région associée', type: 'string'}
const type = {name: 'type', description: 'Type de l’EPCI, soit communauté d’agglomération (CA), soit communauté de communes (CC), soit communauté urbaine (CU), soit métropole de Lyon (MET69), soit métropole (METRO)', type: 'string'}
const financement = {name: 'financement', description: 'Financement de l’EPCI, soit fiscalité additionnelle (FA), soit en fiscalité professionnelle unique (FPU)', type: 'string'}
const fields = {name: 'fields', description: 'Liste des champs souhaités dans la réponse', type: 'array [string]'}
const format = {name: 'format', description: 'Format de réponse attendu', type: 'string', data: formats}
const geometry = {name: 'geometry', description: 'Géométrie à utiliser pour la sortie géographique (format GeoJSON)', type: 'string', data: geometries}

const params = [
  code,
  nom,
  boost,
  codeDepartement,
  codeRegion,
  fields,
  format,
  geometry
]

// Arguments
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
  description: 'Nombre d’habitants de la commune',
  type: 'number'
}

const contour = {
  name: 'contour',
  description: 'Géométrie de type polygon représentant le contour de l’EPCI',
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
  description: 'Géométrie de type polygon représentant la bbox de l’EPCI',
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
  {name: '/epcis', description: 'Rechercher des EPCI', params},
  {name: '/epcis/{code}', description: 'Récupérer les informations concernant un EPCI', params: [code, fields, format, geometry]},
  {name: '/epcis/{code}/communes', description: 'Renvoi les communes d’un EPCI', params: [code, fields, format, geometry]}
]

const defaultModel = [
  {
    code: 'string',
    nom: 'string',
    codesDepartements: ['string'],
    codesRegions: ['string'],
    population: 0,
    _score: 1
  }
]

const defaultAttributs = [
  code,
  nom,
  codeDepartement,
  codeRegion,
  population,
  _score
]

const optionAttributs = [
  financement,
  type,
  surface,
  centre,
  contour,
  bbox
]

export default {paths, defaultModel, defaultAttributs, optionAttributs}
