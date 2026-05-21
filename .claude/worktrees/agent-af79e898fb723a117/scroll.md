# Fix: Bug footer con effetto scroll home page

---

## Problema

Con l'effetto scroll a blocchi attivo sulla home page, navigando verso un'altra pagina e tornando alla home il footer rimane sovrapposto graficamente alla pagina, tagliandola.

---

## Causa

Il footer è incluso nel wrapper dello stacking sticky. Essendo un elemento `sticky` con `z-index` elevato, rimane nel layer visivo anche dopo la navigazione.

---

## Soluzione

Il footer deve essere **escluso dal wrapper dello stacking** e posizionato fuori da esso come elemento normale nel flusso della pagina.

```html
<!-- CORRETTO -->
<div class="sections-wrapper">
  <section>...</section>
  <section>...</section>
  <!-- tutte le sezioni della home -->
</div>

<footer>
  <!-- footer FUORI dal wrapper, nel flusso normale -->
</footer>
```

```html
<!-- SBAGLIATO -->
<div class="sections-wrapper">
  <section>...</section>
  <section>...</section>
  <footer>...</footer> <!-- non deve stare qui -->
</div>
```

---

## Reset scroll al cambio pagina

Aggiungere un reset della posizione di scroll quando si lascia la home, per evitare che venga ripristinata a metà stack al ritorno:

```javascript
// Vanilla JS
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

// Se si usa un SPA router (Nuxt, Next.js, Vue Router...)
router.beforeEach(() => {
  window.scrollTo(0, 0);
});

// Se il sito usa history API
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
```

---

## Importante

Nessun elemento visivo deve essere modificato — colori, layout, animazioni e stile dello scroll rimangono invariati. Questo intervento riguarda **esclusivamente la struttura HTML del wrapper** e il reset dello scroll.