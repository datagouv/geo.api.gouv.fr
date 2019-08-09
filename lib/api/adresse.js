import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()
const API_ADRESSE = publicRuntimeConfig.API_ADRESSE || 'https://api-adresse.data.gouv.fr'

export function search(args) {
  const {q, ...params} = args
  let url = `${API_ADRESSE}/search/?q=${encodeURI(q)}`

  if (params) {
    url += `?${Object.keys(params).map(k => params[k] !== null && `${k}=${params[k]}`).join('&')}`
  }

  return {url}
}

export function reverse(coordinates) {
  const lng = coordinates[0]
  const lat = coordinates[1]
  const url = `${API_ADRESSE}/reverse/?lng=${lng}&lat=${lat}`

  return {url}
}

export function csv(requestBody) {
  const url = `${API_ADRESSE}/search/csv/`
  const options = {method: 'POST', body: requestBody}

  return {url, options}
}
