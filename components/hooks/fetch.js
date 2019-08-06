import {useState, useCallback, useEffect} from 'react'
import {useDebouncedCallback} from 'use-debounce'

export function useFetch(call, debounced) {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const _search = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await call()
      setResponse(response)
    } catch (error) {
      setError(error)
    }

    setLoading(false)
  }, [call])

  const [debouncedFunction] = useDebouncedCallback(_search, 200)

  useEffect(() => {
    if (call) {
      if (debounced) {
        debouncedFunction()
      } else {
        _search()
      }
    }
  }, [_search, call, debounced, debouncedFunction])

  return [response, loading, error]
}
