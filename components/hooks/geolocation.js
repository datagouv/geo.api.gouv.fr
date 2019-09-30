import {useState, useCallback, useEffect} from 'react'

export function useGeolocation() {
  const [position, setPosition] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (position || error) {
      setLoading(false)
    }
  }, [position, error])

  const handleLocation = useCallback(() => {
    if (!loading) {
      setLoading(true)
      navigator.geolocation.getCurrentPosition(setPosition, error => setError(error))
    }
  }, [loading])

  return [position, handleLocation, loading, error]
}
