# Scroll Snap Homepage — Fade + Slide

## Obiettivo

Implementa scroll snapping con transizione fade + slide **esclusivamente sulla homepage** (`app/page.tsx`).
Le pagine interne (`/sistema`, `/funzionalita`, `/veicoli`, `/applicazioni`, `/contatti`)
mantengono lo scroll normale — non toccarle.

---

## Comportamento atteso

- L'utente scrolla normalmente con mouse wheel, trackpad o touch
- Quando lo scroll supera una soglia (~30% della sezione successiva), il sito
  "aggancia" automaticamente alla sezione più vicina
- La transizione è: la sezione corrente sfuma verso l'alto mentre la nuova
  sale da sotto con un leggero movimento (fade + slide)
- Indicatore laterale fisso mostra in quale sezione ci si trova
- Frecce navigazione opzionali (su/giù) per accessibilità

---

## Struttura delle sezioni homepage (tutte a `min-h-screen`)

Ogni sezione della homepage deve occupare `min-h-screen` e centrare il contenuto
verticalmente. Adatta i contenuti esistenti di conseguenza.

| # | Sezione | Componente | Background |
|---|---------|------------|------------|
| 0 | Hero | `Hero` | `--bg-dark` |
| 1 | Sistema (teaser) | `SystemTeaser` | `--bg-secondary` |
| 2 | AI Capabilities | `AICapabilities` | `--bg-dark-alt` |
| 3 | Veicoli (teaser) | `VehiclesTeaser` | `--bg-secondary` |
| 4 | Settori (teaser) | `SectorsTeaser` | `--bg-dark` |
| 5 | CTA finale + contatti | `CTABlock` | `--bg-navy` |

> **Importante:** i componenti "teaser" sono versioni compatte delle sezioni complete
> che vivono nelle pagine interne. Mostrano 3-4 elementi max con un link "Scopri di più → /pagina".
> Non ripetere tutto il contenuto — solo un assaggio.

---

## Implementazione tecnica

### Approccio scelto: CSS Scroll Snap + Framer Motion

Usa **CSS Scroll Snap** per il comportamento di aggancio nativo (performante, no JS pesante)
combinato con **Framer Motion** per le transizioni visive fade+slide.

### 1. Wrapper principale in `app/page.tsx`

```tsx
// app/page.tsx
'use client'

export default function HomePage() {
  return (
    <main
      className="h-screen overflow-y-scroll snap-container"
      style={{
        scrollSnapType: 'y mandatory',
        overflowY: 'scroll',
        height: '100vh',
      }}
    >
      <SnapSection id="hero" index={0}>
        <Hero />
      </SnapSection>

      <SnapSection id="sistema" index={1}>
        <SystemTeaser />
      </SnapSection>

      <SnapSection id="ai" index={2}>
        <AICapabilities />
      </SnapSection>

      <SnapSection id="veicoli" index={3}>
        <VehiclesTeaser />
      </SnapSection>

      <SnapSection id="settori" index={4}>
        <SectorsTeaser />
      </SnapSection>

      <SnapSection id="contatti" index={5}>
        <CTABlock />
      </SnapSection>

      <ScrollDots totalSections={6} />
    </main>
  )
}
```

### 2. Componente `SnapSection`

Crea `/components/ui/SnapSection.tsx`:

```tsx
'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface SnapSectionProps {
  id: string
  index: number
  children: React.ReactNode
}

export default function SnapSection({ id, index, children }: SnapSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { amount: 0.5 })

  return (
    <section
      ref={ref}
      id={id}
      style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
      className="relative min-h-screen w-full flex flex-col"
    >
      <motion.div
        className="flex-1 flex flex-col"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </section>
  )
}
```

**Nota:** `scrollSnapStop: 'always'` forza il sito a fermarsi su ogni sezione —
l'utente non può saltarne una con uno scroll veloce.
Rimuovilo se preferisci permettere lo skip rapido.

### 3. Componente `ScrollDots` — indicatore laterale

Crea `/components/ui/ScrollDots.tsx`:

```tsx
'use client'
import { useEffect, useState } from 'react'

const SECTION_IDS = ['hero', 'sistema', 'ai', 'veicoli', 'settori', 'contatti']
const SECTION_LABELS = ['Home', 'Il Sistema', 'Intelligenza Artificiale', 'Veicoli', 'Settori', 'Contatti']

interface ScrollDotsProps {
  totalSections: number
}

export default function ScrollDots({ totalSections }: ScrollDotsProps) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    // Usa IntersectionObserver per tracciare la sezione attiva
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id, index) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActive(index)
          }
        },
        {
          root: document.querySelector('main'),
          threshold: 0.5,
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      aria-label="Navigazione sezioni"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 hidden lg:flex"
    >
      {SECTION_IDS.map((id, i) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          title={SECTION_LABELS[i]}
          aria-label={`Vai a ${SECTION_LABELS[i]}`}
          className="group flex items-center gap-2 justify-end"
        >
          {/* Label tooltip che appare su hover */}
          <span className="
            opacity-0 group-hover:opacity-100
            text-xs font-mono text-white bg-brand-navy
            px-2 py-1 rounded
            transition-opacity duration-200
            pointer-events-none
            whitespace-nowrap
          ">
            {SECTION_LABELS[i]}
          </span>

          {/* Dot */}
          <span className={`
            block rounded-full transition-all duration-300
            ${i === active
              ? 'w-3 h-3 bg-brand-orange shadow-[0_0_8px_rgba(250,90,20,0.6)]'
              : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }
          `} />
        </button>
      ))}
    </nav>
  )
}
```

### 4. Frecce navigazione su/giù (opzionale ma consigliata)

Aggiungi in ogni `SnapSection` (o nel layout generale) due frecce
per accessibilità da tastiera e mobile:

```tsx
// Freccia "scorri giù" — visibile solo se non è l'ultima sezione
{index < totalSections - 1 && (
  <button
    onClick={() => scrollToNext(index)}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors animate-bounce"
    aria-label="Sezione successiva"
  >
    <ChevronDown className="w-6 h-6" />
  </button>
)}
```

---

## CSS globale da aggiungere in `globals.css`

```css
/* Nasconde la scrollbar visivamente ma mantiene la funzionalità */
main.snap-container {
  scrollbar-width: none;        /* Firefox */
  -ms-overflow-style: none;     /* IE/Edge */
}
main.snap-container::-webkit-scrollbar {
  display: none;                /* Chrome/Safari */
}

/* Previene lo scroll del body quando il main è in snap mode */
body:has(main.snap-container) {
  overflow: hidden;
}

/* Smooth scroll solo per le pagine interne */
html {
  scroll-behavior: smooth;
}
```

---

## Navbar — fix per scroll snap

La Navbar è fixed e deve rimanere visibile su tutte le sezioni.
Due piccoli fix necessari:

1. **Colore adattivo** — la navbar cambia colore in base alla sezione attiva:
   - Sezioni scure (Hero, AI, Settori, CTA) → navbar con testo bianco
   - Sezioni chiare (Sistema, Veicoli) → navbar con testo navy

```tsx
// In Navbar.tsx — aggiungi logica colore basata su sezione attiva
const darkSections = ['hero', 'ai', 'settori', 'contatti']
const isDark = darkSections.includes(activeSection)
```

2. **Z-index** — verifica che la navbar sia sopra tutto: `z-50` minimo.

---

## Pagine interne — nessuna modifica

Le pagine `/sistema`, `/funzionalita`, `/veicoli`, `/applicazioni`, `/contatti`
mantengono lo scroll normale.

Verifica che queste pagine abbiano:
```tsx
// Ogni pagina interna — layout standard, NO snap
<main className="min-h-screen">
  <PageHero ... />
  {/* sezioni con scroll normale */}
</main>
```

E che il `body:has(main.snap-container)` nel CSS non influenzi le pagine interne
(funziona perché il selettore è specifico per `main.snap-container`).

---

## Checklist

- [ ] `app/page.tsx` usa il wrapper con `scrollSnapType: 'y mandatory'`
- [ ] Ogni sezione homepage è wrappata in `SnapSection` con `scrollSnapAlign: 'start'`
- [ ] Tutte le sezioni homepage hanno `min-h-screen`
- [ ] Transizione fade+slide attiva correttamente on scroll (opacity 0→1, y 40→0)
- [ ] `ScrollDots` visibili a destra su desktop (hidden su mobile)
- [ ] Dot attivo evidenziato in arancione `#FA5A14` con glow
- [ ] Tooltip label appare su hover dei dot
- [ ] Scrollbar nascosta visivamente su homepage
- [ ] `body` non scrolla quando si è in homepage
- [ ] Frecce ChevronDown presenti nelle sezioni intermedie
- [ ] Navbar cambia stile testo in base alla sezione chiara/scura
- [ ] Pagine interne non sono influenzate — scroll normale funzionante
- [ ] Testato con mouse wheel, trackpad e tasto freccia da tastiera
