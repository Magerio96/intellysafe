import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Logo } from '@/components/ui/Logo'
import { REFERENTI } from '@/lib/constants'

export default async function Footer() {
  const t = await getTranslations('footer')
  const tn = await getTranslations('nav')

  const navLinks = [
    { label: tn('home'), href: '/' as const },
    { label: tn('sistema'), href: '/sistema' as const },
    { label: tn('funzionalita'), href: '/funzionalita' as const },
    { label: tn('applicazioni'), href: '/applicazioni' as const },
    { label: tn('contatti'), href: '/contatti' as const },
  ]

  return (
    <footer
      className="noise"
      style={{ backgroundColor: '#161728', borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="container-max py-16 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {t('description')}
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="https://www.udanet.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#FF6219]"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Ud&apos;Anet →
            </a>
            <a
              href="https://www.infosolution.it/it/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#FF6219]"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Info Solution s.r.l. →
            </a>
          </div>
        </div>
        <div>
          <span className="section-label-light block mb-4">{t('navigation')}</span>
          <ul className="space-y-2">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors hover:text-[#FF6219]"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="section-label-light block mb-4">{t('contacts')}</span>
          <div className="space-y-4 text-sm">
            {REFERENTI.map(r => (
              <div key={r.email}>
                <p className="font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>{r.nome}</p>
                <a
                  href={`mailto:${r.email}`}
                  className="transition-colors hover:text-[#FF6219]"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                >
                  {r.email}
                </a>
              </div>
            ))}
            <a
              href="https://www.udanet.it/wp-content/uploads/2023/10/Presentazione-UdAnetInfoSolution-Kit-Moliris.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-xs px-3 py-1.5 rounded-lg transition-colors hover:text-[#FF6219]"
              style={{ color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              📄 {t('brochure')}
            </a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container-max py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm relative z-10" style={{ color: 'rgba(255,255,255,0.25)' }}>
          <span>{t('copyright')}</span>
          <div className="flex items-center gap-4">
            <a
              href="https://www.iubenda.com/privacy-policy/38114373"
              className="iubenda-white iubenda-noiframe iubenda-embed transition-colors hover:text-[#FF6219]"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/38114373/cookie-policy"
              className="iubenda-white iubenda-noiframe iubenda-embed transition-colors hover:text-[#FF6219]"
              title="Cookie Policy"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
