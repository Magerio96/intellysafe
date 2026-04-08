# Sezione: IntellySafe Edge System

> La sezione è divisa in **2 blocchi scroll distinti e separati** nel codice (es. due `<section>` indipendenti).
> L'effetto scroll a blocchi della pagina tratta ciascuno come uno snap point separato: prima si scrolla sul blocco 1 (titolo + video), poi sul blocco 2 (feature grid + stats bar).
> Lo sfondo è identico su entrambi (`#f5f6fa`) per dare continuità visiva e far sembrare un'unica sezione, pur essendo due blocchi distinti.

---

## Struttura HTML

```
<section id="edge-system-intro">   ← BLOCCO 1 — snap point 1
  ...titolo, sottotitolo, bottoni, video...
</section>

<section id="edge-system-features"> ← BLOCCO 2 — snap point 2
  ...feature grid + stats bar...
</section>
```

Entrambe le sezioni hanno `scroll-snap-align: start` (o equivalente nel sistema scroll della pagina).

---

## Blocco 1 — Presentazione + Video

**Sfondo:** `#f5f6fa`
**Padding:** 56px 60px
**Layout:** 2 colonne 50/50, allineate verticalmente al centro, gap 40px

### Colonna sinistra
- Label uppercase arancione con underline bottom 2px `#ff6a1f`, font-size 11px, letter-spacing 2.5px:
  `IL SISTEMA DI INTELLIGENZA ARTIFICIALE`
- Titolo H2 34px bold, line-height 1.15:
  - `IntellySafe` → colore `#0f1221`
  - `Edge System` → colore `#ff6a1f`
  - (a capo tra i due)
- Sottotitolo 14px, colore `#6b7290`, line-height 1.6:
  `"Veicoli a guida autonoma che operano in campo senza ausilio del personale — sicuri, programmabili e sempre attivi."`
- Due bottoni affiancati (gap 10px):
  - **Primario:** `Scopri il sistema →` — background `#ff6a1f`, testo bianco, 13px bold, padding 11px 22px, border-radius 8px
  - **Secondario:** `Guarda la demo` — background trasparente, testo `#0f1221`, border 1.5px solid `#c8cedd`, stessi padding e radius

### Colonna destra
- Card video con background `#0f1221`, border-radius 14px, box-shadow `0 6px 30px rgba(15,18,33,0.12)`
- **Barra superiore** background `#161b2e`, padding 8px 12px:
  - 3 dot circolari 7px: rosso `#ff5f57`, giallo `#febc2e`, verde `#28c840`
  - Label 11px colore `#3a4060`: `Demo — Associazione azioni al WP`
- **Area video** background `#0a0d1a`, altezza 160px, contenuto centrato:
  - Bottone play circolare 42px, background `#ff6a1f`, icona play SVG bianca 16px
  - Testo sotto 12px colore `#3a4060`: `Guarda la demo completa`

---

## Blocco 2 — Feature Grid + Stats Bar

**Sfondo:** `#f5f6fa`
**Padding:** 40px 60px (padding top ridotto — continuazione naturale del blocco 1)

### Griglia feature
- 3 colonne × 2 righe, gap 10px

**Ogni card:**
- Background `#fff`, border 1px solid `#e4e8f0`, border-radius 12px, padding 16px 15px
- Layout interno **orizzontale**: icona a sinistra + testo a destra, gap 12px, allineati in alto
- **Icona:** quadrato 32×32px, background `#fff3ee`, border-radius 8px, icona SVG 18px colore `#ff6a1f`
  - Usare le **stesse icone SVG già in uso nel sito** (line-style o filled minimal, coerenti col design system esistente). NON usare emoji.
- **Titolo:** 12px, font-weight 600, colore `#0f1221`, margin-bottom 3px
- **Descrizione:** 11px, colore `#8a94b0`, line-height 1.45

**Hover su card:**
- Border-color → `#ff6a1f66`
- Lineetta 2px arancione `#ff6a1f` che scorre da sinistra a destra sul fondo della card (CSS transform scaleX 0→1, transition 0.25s)

**Le 6 feature:**
| Icona (set esistente) | Titolo | Descrizione |
|---|---|---|
| bolt / fulmine | Azioni automatiche | Esegue azioni se rileva malfunzionamenti o intrusioni |
| wifi / segnale | Controllo remoto | Comandato localmente o a distanza tramite apposita app |
| bell / campana | Allarmi istantanei | Messaggi di allarme agli operatori e alla centrale h24 |
| network / nodi | Modalità collaborativa | Lavora in sinergia con altri robot della stessa serie |
| chart / grafico | Misurazioni in campo | Rileva dati da sensoristica ed attuatori in tempo reale |
| settings / ingranaggio | Gestione flessibile | Pianifica, gestisce e supervisiona le missioni autonomamente |

### Stats bar
- Margin-top 20px dal grid
- Background `#0f1221`, border-radius 12px, overflow hidden
- 4 celle in flex (flex: 1 ciascuna), separate da bordi verticali `1px solid #1f2a45`
- Ultima cella senza bordo destro
- Ogni cella padding 18px 0, testo centrato:
  - Numero: 24px bold, colore `#ff6a1f`
  - Label: 11px, colore `#5a6480`, margin-top 3px

**Valori stats:**
| Numero | Label |
|---|---|
| h24 | Operatività continua |
| 6+ | Modelli robot |
| 8 | Settori applicativi |
| IP67 | Protezione massima |

---

## Note generali

- **Accent color:** `#ff6a1f`
- **Colore testo principale:** `#0f1221`
- **Colore testo secondario:** `#6b7290` / `#8a94b0`
- **Font:** Inter o equivalente sans-serif
- Nessun gradiente, nessuna shadow pesante — stile **flat/clean**
- Coerente con il design system dark/light alternato della home