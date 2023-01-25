import {useState, useEffect} from 'react'
import {List} from 'react-feather'

import theme from '../../../styles/theme'

import Tuto from '../../tuto'
import Section from '../../section'
import TryList from '../../demo/try-list'

import {useFetch} from '../../hooks/fetch'
import {useQuery} from '../../hooks/query'
import {getDepartements, getCommunesAssocieesDeleguees} from '../../../lib/api/geo'

function CommunesAssocieesDelegueesList() {
  const [code, setCode] = useState('08')
  const [departements, setDepartements] = useState({url: '', option: null})
  const [url, options] = useQuery(code, code => getCommunesAssocieesDeleguees({params: {codeDepartement: code}}))
  const [response, loading, error] = useFetch(url, options, false)

  const handleSelect = option => {
    const code = option.split(' ')[0]
    setCode(code)
  }

  useEffect(() => {
    const departements = getDepartements()
    setDepartements(departements)
  }, [])

  return (
    <Section background='grey'>
      <div id='communes-list'>
        <Tuto
          title='Liste de communes associées et déléguées par départements'
          description=''
          icon={<List />}
          exemple={url}
          results={response || []}
          side='left'
          loading={loading}
        >
          <p>
            <span className='field'>/communes_associees_deleguees?codeDepartement=[codeDepartement]</span> permet de récuperer <b>la liste des communes associées et déléguées</b> d'un un département.
          </p>
          <p>
            Vous pouvez ajoutez un paramètre <span className='field'>type=commune-associee</span> ou <span className='field'>type=commune-deleguee</span> pour filtrer sur un seul type de commune.
          </p>
        </Tuto>

        <TryList
          value={code}
          items={response || []}
          description='communes associées ou déléguées dans ce département'
          label='Départements'
          query={departements}
          loading={loading}
          error={error}
          handleSelect={handleSelect} />
      </div>

      <style jsx>{`
          .field {
            background: ${theme.primary};
            color: ${theme.colors.white};
            border-radius: 2px;
            padding: 0.1em 0.3em;
          }
      `}</style>
    </Section>
  )
}

export default CommunesAssocieesDelegueesList
