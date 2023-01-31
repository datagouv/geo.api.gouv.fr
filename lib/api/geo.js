import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()
const API_GEO_URL = publicRuntimeConfig.API_GEO_URL || 'https://geo.api.gouv.fr'

function buildQuery({params, fields, format, geometry, boost, limit}) {
  let query = ''
  let nextParam = false

  if (params) {
    query += `?${Object.keys(params).map(k => `${k}=${params[k]}`).join('&')}`
    nextParam = true
  }

  if (fields) {
    query += `${nextParam ? '&' : '?'}fields=${fields.join(',')}`
    nextParam = true
  }

  if (boost) {
    query += `${nextParam ? '&' : '?'}boost=population`
    nextParam = true
  }

  if (format) {
    query += `${nextParam ? '&' : '?'}format=${format}`
    nextParam = true
  }

  if (geometry) {
    query += `${nextParam ? '&' : '?'}geometry=${geometry}`
    nextParam = true
  }

  if (limit) {
    query += `${nextParam ? '&' : '?'}limit=${limit}`
    nextParam = true
  }

  return query
}

export function getRegions(args) {
  let url = `${API_GEO_URL}/regions`

  if (args) {
    const query = buildQuery(args)
    url += query
  }

  return {url}
}

export function getRegionDepartements(code) {
  const url = `${API_GEO_URL}/regions/${code}/departements`
  return {url}
}

export function getDepartements(args) {
  let url = `${API_GEO_URL}/departements`

  if (args) {
    const query = buildQuery(args)
    url += query
  }

  return {url}
}

export function getEpcis(args) {
  let url = `${API_GEO_URL}/epcis`

  if (args) {
    const query = buildQuery(args)
    url += query
  }

  return {url}
}

export function getDepartementCommunes(code) {
  const url = `${API_GEO_URL}/departements/${code}/communes`
  return {url}
}

export function getEpciCommunes(code) {
  const url = `${API_GEO_URL}/epcis/${code}/communes`
  return {url}
}

export function getCommunes(args) {
  let url = `${API_GEO_URL}/communes`

  if (args) {
    const query = buildQuery(args)
    url += query
  }

  return {url}
}

export function getCommune(code, args) {
  let url = `${API_GEO_URL}/communes/${code}`

  if (args) {
    const query = buildQuery(args)
    url += query
  }

  return {url}
}

export function getCommunesAssocieesDeleguees(args) {
  let url = `${API_GEO_URL}/communes_associees_deleguees`

  if (args) {
    const query = buildQuery(args)
    url += query
  }

  return {url}
}

export function getCommuneAssocieeDeleguee(code, args) {
  let url = `${API_GEO_URL}/communes_associees_deleguees/${code}`

  if (args) {
    const query = buildQuery(args)
    url += query
  }

  return {url}
}
