import {useState, useCallback, useEffect} from 'react'
import {useDebouncedCallback} from 'use-debounce'

import api from '../../lib/api'

export function useSearch(query, debounced) {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const _search = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await api(query)
      setResponse(response)
    } catch (error) {
      setError(error)
    }

    setLoading(false)
  }, [query, setResponse, setError, setLoading])

  const [debouncedFunction] = useDebouncedCallback(_search, 200)

  useEffect(() => {
    if (debounced) {
      debouncedFunction()
    } else {
      _search()
    }
  }, [_search, debounced, debouncedFunction, query])

  return [response, loading, error]
}
