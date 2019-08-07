import {useState, useCallback} from 'react'
import PropTypes from 'prop-types'

import {getCommunes} from '../../../lib/api/geo'

import theme from '../../../styles/theme'

import Section from '../../section'
import Tuto from '../../tuto'

import {useInput} from '../../hooks/input'
import {useFetch} from '../../hooks/fetch'

import TryPostalCode from '../demo/try-postal-code'

const ByCode = ({title, id, icon}) => {
  const [input, setInput] = useInput('78000')
  const [{url, options}, setQuery] = useState(getCommunes({params: {codePostal: input}}))
  const [response, loading, error] = useFetch(url, options, false)

  const handleInput = input => {
    setInput(input)
  }

  const handleSubmit = useCallback(() => {
    const query = getCommunes({params: {codePostal: input}})
    setQuery(query)
  }, [input, setQuery])

  return (
    <Section background='grey'>
      <div id={id}>
        <Tuto
          title={title}
          description='Il est possible de rechercher une commune avec son code postal.'
          icon={icon}
          exemple={url}
          results={response}
          side='left'
          loading={loading}
        >
          <div>
              La variable <span className='field'>codePostal</span> permet de récuperer <b>la liste des communes</b> associées à un code postal.
          </div>
        </Tuto>

        <TryPostalCode
          input={input}
          onChange={handleInput}
          onSubmit={handleSubmit}
          error={error}
          loading={loading} />
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

ByCode.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}

export default ByCode
