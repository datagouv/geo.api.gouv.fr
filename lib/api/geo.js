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

export function getDepartements(args) {
  let url = `${API_GEO_URL}/departements`

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
