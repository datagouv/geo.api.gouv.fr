import Link from 'next/link'
import FaQuestion from 'react-icons/lib/fa/question'

import Page from '../layouts/main'

import Section from '../components/section'
import Question from '../components/faq/question'
import Head from '../components/head'

export default () => (
  <Page title='Foire aux questions'>
    <Head title='Foire aux questions' icon={<FaQuestion />} />

    <Section>
      <div className='faq-row'>
        <div className='theme'>
          <h3>API de géocodage</h3>

          <Question question='Quelle est la licence des données proposées par l’API de géocodage ?'>
            <p>Les données utilisées par <Link href='/adresse'><a>l’API disponible sur ce site</a></Link> sont celles sous licence ODbL.</p>
          </Question>

          <Question question='Quelle sont les limitations en vigueur sur l’API de géocodage ?'>
            <>
              <p>Les appels sont limités à :</p>
              <ul>
                <li>50 requêtes par seconde et par IP pour le géocodage simple ;</li>
                <li>2 requêtes simultanées par IP pour le géocodage de masse (maximum 6 Mo par envoi de fichier).</li>
              </ul>
            </>
          </Question>

          <Question question='Est-il possible de faire lever les limites de l’API ?'>
            <>
              <p>Oui, mais uniquement si vous êtes un service public ou chargé d’une mission de service public</p>
              <p>Dans le cas contraire, vous pouvez aussi héberger notre API de géocodage chez vous, en suivant <a href='https://github.com/etalab/addok-docker'>ces instructions</a>.</p>
            </>
          </Question>
        </div>

        <style jsx>{`
            .theme {
              margin: 1em 0;
            }

            .faq-row {
              display: flex;
              flex-direction: column;
            }
          `}</style>
      </div>
    </Section>
  </Page>
)
