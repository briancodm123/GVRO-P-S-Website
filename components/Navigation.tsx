'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/departments', label: 'Departments' },
    { href: '/applications', label: 'Applications' },
    { href: '/radio-codes', label: 'Radio Codes' },
    { href: '/handbook', label: 'Handbook' },
    { href: '/staff', label: 'Staff' },
  ]

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  if (!mounted) {
    return (
      <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-md text-white p-4 shadow-md border-b border-white/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-wide">Department Hub</div>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.href} className="text-white">
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-md text-white p-4 shadow-md border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-wide hover:text-[#ffa94d] transition-colors duration-200"
          onClick={closeMenu}
        >
          Department Hub
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? 'text-[#ffa94d] bg-white/10'
                  : 'text-white hover:text-[#ffa94d] hover:bg-white/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen
          ? 'max-h-96 opacity-100'
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/20 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? 'text-[#ffa94d] bg-white/10'
                  : 'text-white hover:text-[#ffa94d] hover:bg-white/5'
              }`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation