import {useState, useEffect} from 'react'

export function useQuery(value, func) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const query = func(value)
    setQuery(query)
  }, [func, value])
  return [query]
}
