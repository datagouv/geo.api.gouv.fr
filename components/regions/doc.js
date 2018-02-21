// Fields
const nom = {name: 'nom', description: 'Nom de la région', type: 'string'}
const code = {name: 'code', description: 'Code (INSEE) de la région', type: 'string'}
const codeDepartement = {name: 'codeDepartement', description: 'Code du département associé', type: 'string'}
const fields = {name: 'fields', description: 'Liste des champs souhaités dans la réponse', type: 'array [string]'}

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

const _score = {
  name: '_score',
  description: 'Score de correspondance allant de 0 à 1',
  type: 'number'
}

const paths = [
  {name: '/regions', description: 'Rechercher des régions', params: [code, nom, fields]},
  {name: '/regions/{code}', description: 'Récupérer les informations concernant une commune', params: [code, fields]}
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
  codeDepartement,
  _score
]

const optionAttributs = [
  departement
]

export default {paths, defaultModel, defaultAttributs, optionAttributs}
