import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])

  const solid = scrolled || open

  return (
    <header className={`nav ${solid ? 'nav-solid' : 'nav-clear'} ${open ? 'nav-open' : ''}`}>
      <div className="w nav-row">
        <Link to="/" className="logo">
          <span className="logo-imo">IMÓ</span>
          <span className={solid ? 'logo-now-d' : 'logo-now-l'}>NOW</span>
        </Link>
        <nav className={`nav-menu ${open ? 'is-open' : ''}`}>
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/recrutamento">Recrutamento</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
          <Link to="/contacto" className="btn btn-p btn-sm nav-cta">Vender casa</Link>
        </nav>
        <button
          className={`nav-burger ${open ? 'is-open' : ''} ${solid ? 'burger-dark' : 'burger-light'}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
