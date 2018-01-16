import piwikConnector from 'piwik-react-router'

const piwik = piwikConnector({
  url: 'https://stats.data.gouv.fr',
  siteId: '43'
})

piwik.push(['setDomains', ['*.geo.api.gouv.fr']])

export default piwik
