import { useEffect, useState } from 'react'

const QUERY = '(pointer: fine)'

export default function useFinePointer() {
  const [isFine, setIsFine] = useState(() => window.matchMedia(QUERY).matches)

  useEffect(() => {
    const media = window.matchMedia(QUERY)
    const update = () => setIsFine(media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return isFine
}
