'use client'
import { useEffect, useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { Logo } from '@/components/ui/Logo'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHomepage = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  const linkColor = (href: string) => {
    if (pathname === href) return '#FF6219'
    return 'rgba(255,255,255,0.85)'
  }

  const navLinks = [
    { label: t('home'), href: '/' as const },
    { label: t('sistema'), href: '/sistema' as const },
    { label: t('funzionalita'), href: '/funzionalita' as const },
    { label: t('applicazioni'), href: '/applicazioni' as const },
  ]

  const allNavLinks = [
    ...navLinks,
    { label: t('contatti'), href: '/contatti' as const },
  ]

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

          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <div
              className="flex items-center gap-1 rounded-lg overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.15)', padding: '2px' }}
            >
              {(['it', 'en'] as const).map(loc => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className="text-xs font-bold uppercase px-2.5 py-1 rounded-md transition-colors duration-150"
                  style={locale === loc
                    ? { backgroundColor: '#FF6219', color: '#fff' }
                    : { color: 'rgba(255,255,255,0.45)', backgroundColor: 'transparent' }
                  }
                >
                  {loc}
                </button>
              ))}
            </div>

            <Link href="/contatti" className="btn-primary text-sm">
              {t('cta')}
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
        {allNavLinks.map(link => (
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

        {/* Mobile language switcher */}
        <div className="flex items-center gap-1 rounded-lg overflow-hidden self-start mt-2"
          style={{ border: '1px solid rgba(255,255,255,0.15)', padding: '2px' }}
        >
          {(['it', 'en'] as const).map(loc => (
            <button
              key={loc}
              onClick={() => { switchLocale(loc); setMobileOpen(false) }}
              className="text-xs font-bold uppercase px-2.5 py-1 rounded-md transition-colors duration-150"
              style={locale === loc
                ? { backgroundColor: '#FF6219', color: '#fff' }
                : { color: 'rgba(255,255,255,0.45)', backgroundColor: 'transparent' }
              }
            >
              {loc}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
