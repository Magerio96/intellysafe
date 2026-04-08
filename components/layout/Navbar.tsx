'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/lib/constants'
import { Logo } from '@/components/ui/Logo'

// Sections with dark backgrounds on the homepage snap layout
const DARK_SECTIONS = new Set(['hero', 'premio', 'veicoli', 'contatti'])

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHomepage = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (pathname === '/') setActiveSection('hero')
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const onSectionChange = (e: Event) => {
      setActiveSection((e as CustomEvent<string>).detail)
    }
    window.addEventListener('sectionchange', onSectionChange)
    return () => window.removeEventListener('sectionchange', onSectionChange)
  }, [])

  const linkColor = (href: string) => {
    if (pathname === href) return '#FF6219'
    return 'rgba(255,255,255,0.85)'
  }

  const navLinks = NAV_LINKS.filter(l => l.href !== '/contatti')

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: 'rgba(22, 23, 40, 0.96)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="container-max flex items-center justify-between h-16">
          <Link href="/">
            <Logo variant="light" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: linkColor(link.href) }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/contatti" className="btn-primary text-sm">
              Contattaci →
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            style={{ color: 'rgba(255,255,255,0.85)' }}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu — rendered outside nav to avoid backdrop-filter stacking context */}
      <div
        className="md:hidden fixed inset-0 top-16 z-[99] flex flex-col gap-6 px-6 py-8"
        style={{
          backgroundColor: '#161728',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: mobileOpen ? 1 : 0,
          transition: 'transform 0.18s ease-out, opacity 0.18s ease-out',
          pointerEvents: mobileOpen ? 'auto' : 'none',
          willChange: 'transform',
        }}
      >
        {NAV_LINKS.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-lg font-medium"
            style={{ color: pathname === link.href ? '#FF6219' : 'rgba(255,255,255,0.85)' }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}
