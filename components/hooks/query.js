import {useState, useEffect} from 'react'

export function useQuery(value, func) {
  const [query, setQuery] = useState({})

  useEffect(() => {
    if (value && func) {
      const query = func(value)
      setQuery(query)
    }
  }, [func, value])
  return [query]
}
