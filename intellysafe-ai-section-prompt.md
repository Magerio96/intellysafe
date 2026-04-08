# Fix Sezione — "Il Sistema di Intelligenza Artificiale" (Homepage)

## Obiettivo

Ricostruisci completamente la sezione `AICapabilities` in homepage.
La vecchia versione mostra un layout a due colonne con card piatte e uno screenshot di tablet/device.
La nuova versione deve essere moderna, in linea con la palette IntellySafe (#FA5A14 + #1E2846)
e sostituire lo screenshot con un mockup UI generato in codice (niente immagini esterne).

---

## Contenuto da preservare (identico alla versione originale)

### Label e titolo
- Label: **"Il Sistema di Intelligenza Artificiale"** (arancione, font mono uppercase)
- Titolo: **"IntellySafe Edge System"**

### Le 8 capability (testo esatto)

| # | Titolo | Descrizione |
|---|--------|-------------|
| 1 | Azioni automatiche | Esegue azioni automatiche se rileva malfunzionamenti ed intrusioni |
| 2 | Modalità collaborativa | Lavora in modalità collaborativa con altri robot della stessa serie |
| 3 | Comandato anche a distanza | Può essere comandato tramite apposita applicazione sia localmente che a distanza, per garantire la massima sicurezza agli operatori |
| 4 | Controllo programmato o automatico | Svolge un servizio di controllo programmabile o in automatico |
| 5 | Invia messaggi di allarme | Invia messaggi di allarme agli operatori in campo ed alla centrale di sorveglianza |
| 6 | Misurazioni analogiche e digitali | Rileva misurazioni analogiche e digitali in campo proveniente da sensoristica ed attuatori. Di conseguenza esegue azioni programmate |
| 7 | Intercetta le attività del personale non autorizzato | Intercetta e documenta le attività svolte da personale non autorizzato nell'area sorvegliata |
| 8 | Gestione flessibile | Permette di gestire i sensori in modo flessibile, di pianificare le missioni, gestirle e di supervisionarne il funzionamento in tempo reale |

---

## Layout della nuova sezione

### Struttura generale
- Background: `--bg-secondary` (#F5F7FA) — sezione chiara
- Layout desktop: due colonne 55% / 45% — sinistra testo+capability, destra mockup UI
- Layout mobile: stacked, mockup sopra o sotto le capability

### Colonna sinistra — testo e capability

**Header:**
```
[label arancione mono]
Il Sistema di Intelligenza Artificiale

[titolo navy bold display]
IntellySafe Edge System
```

**Capability — nuovo layout a griglia 2 colonne:**
- Abbandona le card con bordo piatto della versione originale
- Usa una griglia 2×4 di item compatti
- Ogni item:
  - Icona Lucide pertinente (w-5 h-5) in arancione
  - Titolo in navy bold (font-semibold)
  - Descrizione in testo secondario (text-small, text-text-secondary)
  - Nessun bordo, nessuna card box — sfondo trasparente
  - Separatore sottile orizzontale sotto ogni item (border-b border-border)

Icone Lucide suggerite per ogni capability:
1. Azioni automatiche → `Zap`
2. Modalità collaborativa → `Network`
3. Comandato a distanza → `Radio`
4. Controllo programmato → `CalendarClock`
5. Messaggi di allarme → `BellRing`
6. Misurazioni analogiche/digitali → `Activity`
7. Intercetta personale → `ScanEye`
8. Gestione flessibile → `Settings2`

**Animazione colonna sinistra:**
- Label e titolo: `fadeInUp` on scroll
- Le 8 capability: `staggerChildren` con delay 0.06s, `fadeInUp` per ognuna

---

### Colonna destra — Mockup UI generato in codice

**NON usare screenshot, immagini o placeholder.**
Costruisci un mockup dell'interfaccia di controllo del robot interamente in JSX/Tailwind.
Deve sembrare credibile come una vera dashboard operativa, non un wireframe.

#### Struttura del mockup

Il mockup simula un tablet in landscape con la dashboard del sistema IntellySafe.
Usa un wrapper con:
```css
border-radius: 16px;
background: #1E2846;
box-shadow: 0 32px 80px rgba(30,40,70,0.35), 0 0 0 1px rgba(255,255,255,0.08);
overflow: hidden;
```

**Barra superiore del mockup (navbar interna):**
- Background: `#141C32`
- Sinistra: logo testuale "IntellySafe" in bianco + dot arancione animato (pulse)
- Centro: nome robot "Robot — Unit 01" in font mono small
- Destra: 3 indicatori di stato — `●` verde (Online), `●` giallo (GPS), `●` arancione (AI Active)

**Corpo del mockup — layout a 3 colonne:**

*Colonna sinistra (sidebar, ~20% larghezza):*
- Background: `#141C32`
- Lista voci nav:
  - `🗺 DASHBOARD` (voce attiva — background arancione, testo bianco)
  - `📅 CALENDAR`
  - `🎯 MISSIONS`
  - `☁ STORAGE`
  - `⚙ SETTINGS`
  - `⚡ DEVELOP`
- Stile: font mono uppercase, text-small, padding `py-3 px-4`
- Voce attiva: `background: #FA5A14; color: white;`
- Voci inattive: `color: rgba(255,255,255,0.5);`

*Colonna centrale (area principale, ~55% larghezza):*
- Background: `#1E2846`
- Riga superiore — 3 metric card affiancate:
  ```
  [  0 km/h  ]  [  0 m/s  ]  [  Battery ████░░  ]
  ```
  Ogni metric card:
  - Background: `rgba(255,255,255,0.05)`
  - Border: `1px solid rgba(255,255,255,0.08)`
  - Valore in JetBrains Mono bold bianco
  - Label in mono small `rgba(255,255,255,0.4)`

- Area mappa centrale:
  - Background: `rgba(0,0,0,0.2)`
  - Border radius: 8px
  - Centro: icona razzo (SVG semplice o emoji 🚀) in arancione, dimensione 40px
  - Sotto icona: testo mono `"NO MISSION SCHEDULED"` in `rgba(255,255,255,0.3)` small
  - Sotto: button piccolo `"START NOW"` background arancione, testo bianco, border-radius 4px
  - Angoli della mappa: 4 piccole label `"CAMERA Front"`, `"CAMERA Left"` ecc. in mono xs

- Riga inferiore — indicatori di navigazione:
  - 6 dot di cui 3 arancioni e 3 grigi
  - Frecce `‹ ›` ai lati

*Colonna destra (pannello dettaglio, ~25% larghezza):*
- Background: `#141C32`
- Titolo `"CAMERA"` in mono uppercase arancione
- 3 riquadri camera feed simulati:
  ```
  [ CAMERA Front  ]  → rettangolo con gradient scuro
  [ CAMERA Close  ]  → rettangolo con gradient scuro
  [ CAMERA Left   ]  → rettangolo con gradient scuro
  ```
  Ogni riquadro:
  - Background: `rgba(0,0,0,0.3)`
  - Border: `1px solid rgba(255,255,255,0.08)`
  - Label in mono xs `rgba(255,255,255,0.4)`
  - Dot verde animato (pulse) nell'angolo → simula live feed

**Animazione mockup:**
- Al mount: fade-in con `scale(0.96) → scale(1)` + opacity 0→1, duration 0.8s
- Il dot "AI Active" nella navbar: `animate-pulse` in arancione
- I dot "live" nelle camera feed: `animate-pulse` in verde
- Nessun'altra animazione nel mockup — deve sembrare uno strumento, non un sito

**Effetto floating del mockup:**
```css
animation: float 6s ease-in-out infinite;

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}
```

**Decorazioni attorno al mockup:**
- Blob gradient arancione molto sfumato in background (`opacity: 0.08`, `blur: 80px`)
- 2-3 linee diagonali sottili in background (`rgba(250,90,20,0.06)`) — effetto griglia tecnica

---

## Implementazione

### File da modificare
`components/sections/AICapabilities.tsx`

### Struttura JSX di massima

```tsx
<section className="py-24 bg-surface-light">
  <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">

      {/* Colonna sinistra */}
      <motion.div variants={staggerContainer} ...>
        <span className="label-orange">Il Sistema di Intelligenza Artificiale</span>
        <h2 className="text-h1 text-navy mt-2 mb-10">IntellySafe Edge System</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {capabilities.map((cap) => (
            <motion.div key={cap.id} variants={fadeInUp} className="py-4 border-b border-border">
              <div className="flex items-start gap-3">
                <cap.icon className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-navy text-sm mb-1">{cap.title}</p>
                  <p className="text-text-secondary text-small leading-relaxed">{cap.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Colonna destra — mockup */}
      <motion.div variants={scaleIn} ...>
        <DashboardMockup />
      </motion.div>

    </div>
  </div>
</section>
```

### Componente separato
Estrai il mockup in un componente dedicato:
`components/ui/DashboardMockup.tsx`

Questo mantiene `AICapabilities.tsx` leggibile e permette di riutilizzare il mockup
nella pagina `/sistema` se necessario.

---

## Checklist sezione

- [ ] Label arancione mono uppercase visibile
- [ ] Titolo "IntellySafe Edge System" in navy bold
- [ ] Tutte le 8 capability presenti con testo esatto
- [ ] Icone Lucide pertinenti, colore arancione, allineate in cima al testo
- [ ] Griglia 2 colonne per le capability su desktop, 1 colonna su mobile
- [ ] Mockup costruito interamente in codice (zero immagini)
- [ ] Sidebar con voci nav e voce DASHBOARD attiva in arancione
- [ ] 3 metric card con valori numerici in font mono
- [ ] Area mappa con icona robot + "NO MISSION" + button START NOW
- [ ] Pannello camera con 3 feed simulati e dot pulse verde
- [ ] Effetto float animato sul mockup
- [ ] Animazioni Framer Motion on scroll per la colonna sinistra
- [ ] Responsive: stacked su mobile, side-by-side su lg+
- [ ] Sfondo sezione `--bg-secondary`, coerente con l'alternanza chiaro/scuro del sito
