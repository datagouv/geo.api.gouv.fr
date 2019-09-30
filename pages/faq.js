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
          <h3>Généralités</h3>

          <Question question='Quelle sont les limitations en vigueur sur les APIs ?'>
            <>
              <p>Les appels sont limités à :</p>
              <ul>
                <li>10 requêtes par seconde et par IP pour l’API Découpage administratif ;</li>
                <li>50 requêtes par seconde et par IP pour le géocodage simple via l’API Adresse ;</li>
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

          <h3>API Adresse</h3>

          <Question question='Quelle est la licence des données proposées par l’API Adresse ?'>
            <p>Les données utilisées sont les données <strong>Adresses ODbL</strong> disponibles <a href='https://adresse.data.gouv.fr/donnees-nationales'>sur cette page</a>. Ces données sont sous licence <strong>ODbL 1.0</strong>.</p>
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
