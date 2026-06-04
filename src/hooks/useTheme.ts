import { useEffect, useState } from 'react'

export function useTheme() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('light', isLight)
  }, [isLight])

  const toggle = () => setIsLight((prev) => !prev)

  return { isLight, toggle }
}
