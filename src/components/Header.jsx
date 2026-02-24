import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({to, children}) => (
  <NavLink
    to={to}
    className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium transition
      ${isActive ? 'bg-primary text-white' : 'text-secondary hover:text-white hover:bg-[rgba(243,156,18,0.12)]'}`}
  >
    {children}
  </NavLink>
)

export default function Header(){
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-4">
          {/* blank image tag for company logo (no src attribute) */}
          <img src="./assets/logo.png" alt="company logo" className="w-14 h-14 rounded-md bg-[var(--primary)]/10 border border-white/10" />
          <div>
            <div className="text-xs text-secondary font-semibold">ZAIN TECHNICAL</div>
            <div className="text-sm font-bold text-[var(--secondary)]">Integrated Services</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/services">Our Services</NavItem>
        </nav>

        {/* mobile menu icon (simple) */}
        <div className="md:hidden">
          <details className="relative">
            <summary className="list-none cursor-pointer p-2 rounded-md bg-white/10 text-secondary"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={getComputedStyle(document.documentElement).getPropertyValue('--secondary') || '#1b4f72'}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg></summary>
            <div className="absolute right-0 mt-2 w-44 bg-white/90 rounded-md p-2 shadow-lg glass">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About</NavItem>
              <NavItem to="/contact">Contact</NavItem>
              <NavItem to="/services">Our Services</NavItem>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}