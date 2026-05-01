import { useState, useEffect } from 'react'

export function useMobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    setMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  useEffect(() => () => { document.body.style.overflow = '' }, [])

  return { menuOpen, openMenu, closeMenu }
}
