import PropTypes from 'prop-types'
import Link from 'next/link'

import FaCompass from 'react-icons/lib/fa/compass'
import FaConnectdevelop from 'react-icons/lib/fa/connectdevelop'
import FaMapSigns from 'react-icons/lib/fa/map-signs'

import Page from '../layouts/main'

import theme from '../styles/theme'

import Hero from '../components/hero'
import Section from '../components/section'

import Subscribe from '../components/home/subscribe'

const title = 'Documentation geo.api.gouv.fr'
const tagline = 'Interrogez les référentiels géographiques plus facilement.'

const apis = [
  {
    title: 'Adresse',
    href: '/adresse',
    description: <span>Cherchez des adresses et lieux-dits.</span>,
    icon: <FaCompass />
  },
  {
    title: 'Cadastre',
    href: '/cadastre',
    description: <span>Récuper les informations cadastral.</span>,
    icon: <FaConnectdevelop />
  },
  {
    title: 'Découpage admministratif',
    href: '/decoupage-administratif',
    description: <span>Récupérez facilement les informations dont vous avez besoin pour chaque découpage administratif.</span>,
    icon: <FaMapSigns />
  }
]

const Api = ({title, icon, description, href}) => {
  return (
    <Link href={href}>
      <div className='article__author panel'>
        <div className='article__author-info'>
          <div className='article__author-name'>{title}</div>
          <div className='article__author-role'>Etalab</div>
        </div>
        <div className='article__author-img'>{icon}</div>
        <p className='article__author-description'>{description}</p>
        <style jsx>{`
          .article__author {
            min-width: 270px;
          }

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
    <Section title='Les API géographique publique' subtitle={tagline}>
      <div className='apis grid'>
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
    <Subscribe />

    <style jsx>{`
      .apis {
        margin-top: 2em;
      }
      `}</style>
  </Page>
)
