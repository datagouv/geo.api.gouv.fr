import PropTypes from 'prop-types'
import Link from 'next/link'

import {MapPin, Compass} from 'react-feather'

import Page from '../layouts/main'

import theme from '../styles/theme'

import Hero from '../components/hero'
import Section from '../components/section'

import Infolettre from '../components/home/infolettre'

const title = 'geo.api.gouv.fr'
const tagline = 'Interrogez les référentiels géographiques plus facilement.'

const apis = [
  {
    title: 'API Découpage administratif',
    href: '/decoupage-administratif',
    description: <span>Rechercher et localiser les communes, communes associées et déléguées, EPCI, départements et régions.</span>,
    icon: <MapPin />
  },
  {
    title: 'API Adresse',
    href: 'https://adresse.data.gouv.fr/api-doc/adresse',
    description: <span>Rechercher et localiser des adresses et lieux-dits.</span>,
    icon: <Compass />
  }
]

function Api({title, icon, description, href}) {
  return (
    <Link href={href}>
      <div className='article__author panel'>
        <div className='article__author-info'>
          <div className='article__author-name'>{title}</div>
          <div className='article__author-role'>Etalab</div>
        </div>
        <div className='article__author-img'><span className='feather-icon'>{icon}</span></div>
        <p className='article__author-description'>{description}</p>
        <style jsx>{`
          .article__author:hover {
            cursor: pointer;
            border-color: ${theme.primary};
          }

          .article__author-img {
            display: inline-block;
            float: right;
            font-size: x-large;
          }
        `}</style>
      </div>
    </Link>
  )
}

Api.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
}

export default () => (
  <Page title={title} description={tagline}>
    <Hero title={title} tagline={tagline} />
    <Section title='Les API actuellement en production'>
      <div className='apis'>
        {apis.map(({title, href, description, icon}) => (
          <Api
            key={title}
            title={title}
            href={href}
            description={description}
            icon={icon}
          />
        ))}
      </div>
    </Section>
    <Infolettre />

    <style jsx>{`
      .apis {
        display: flex;
        justify-content: space-between;
        margin-top: 2em;
      }
      `}</style>
  </Page>
)
