export const VEICOLI = [
  { id: 1, nome: 'Heavy Duty',   peso: '290 kg', carico: '500 kg', coppia: '1000 Nm', ip: '65',           tipo: 'tracked' },
  { id: 2, nome: 'Tracked Pro',  peso: '180 kg', carico: '120 kg', coppia: null,       ip: '67',           tipo: 'tracked' },
  { id: 3, nome: 'Tracked Base', peso: '135 kg', carico: '80 kg',  coppia: null,       ip: '54',           tipo: 'tracked' },
  { id: 4, nome: 'Wheeled',      peso: '62 kg',  carico: '50 kg',  coppia: null,       ip: '22 / 44 / 64', tipo: 'wheeled' },
  { id: 5, nome: 'Tracked Mini', peso: '55 kg',  carico: '25 kg',  coppia: null,       ip: '67',           tipo: 'tracked' },
  { id: 6, nome: 'Wheeled Mini', peso: '23 kg',  carico: '20 kg',  coppia: null,       ip: '22',           tipo: 'wheeled' },
] as const

export const FEATURE_IA = [
  { id: 1, titolo: 'Azioni automatiche',                          descrizione: 'Esegue azioni automatiche se rileva malfunzionamenti ed intrusioni',                                                                                          icona: 'zap'      },
  { id: 2, titolo: 'Modalità collaborativa',                      descrizione: 'Lavora in modalità collaborativa con altri robot della stessa serie',                                                                                          icona: 'users'    },
  { id: 3, titolo: 'Comandato anche a distanza',                  descrizione: "Può essere comandato tramite apposita applicazione sia localmente che a distanza, per garantire la massima sicurezza agli operatori",                          icona: 'radio'    },
  { id: 4, titolo: 'Controllo programmato o automatico',          descrizione: 'Svolge un servizio di controllo programmabile o in automatico',                                                                                               icona: 'clock'    },
  { id: 5, titolo: 'Invia messaggi di allarme',                   descrizione: 'Invia messaggi di allarme agli operatori in campo ed alla centrale di sorveglianza',                                                                          icona: 'bell'     },
  { id: 6, titolo: 'Intercetta personale non autorizzato',        descrizione: "Intercetta e documenta le attività svolte da personale non autorizzato nell'area sorvegliata",                                                                icona: 'shield'   },
  { id: 7, titolo: 'Misurazioni analogiche e digitali',           descrizione: 'Rileva misurazioni analogiche e digitali in campo proveniente da sensoristica ed attuatori. Di conseguenza esegue azioni programmate',                        icona: 'activity' },
  { id: 8, titolo: 'Gestione flessibile',                         descrizione: 'Permette di gestire i sensori in modo flessibile, di pianificare le missioni, gestirle e di supervisionarne il funzionamento in tempo reale',                icona: 'settings' },
]

export const SETTORI = [
  { id: 1, titolo: 'Sicurezza e sorveglianza',      voci: ['Ronde', 'Rilevamento intrusi', 'Dissuasione'],                                                                  icona: '🔒', colore: 'blue'   },
  { id: 2, titolo: 'Sicurezza degli ambienti',       voci: ['Rilevamento perdite acqua', 'Rilevamento principi di incendio', 'Rilevamento gas', 'Rilevamento fumo'],         icona: '🏢', colore: 'blue'   },
  { id: 3, titolo: 'Agricoltura di precisione',      voci: ['Irrorazione fitofarmaci', 'Conferimento (raccolta)', 'Controllo inerbimento'],                                   icona: '🌱', colore: 'green'  },
  { id: 4, titolo: 'Sanità',                         voci: ['Sanificazione', 'Trasporto farmaci e campioni', 'Trasporto biancheria e rifiuti'],                               icona: '🏥', colore: 'teal'   },
  { id: 5, titolo: 'Movimentazione materiali',       voci: ['Con braccio manipolatore', 'Con integrazione alla logistica'],                                                   icona: '📦', colore: 'blue'   },
  { id: 6, titolo: 'Impianti industriali o centrali',voci: ['Ispezioni', 'Rilevamento'],                                                                                     icona: '🏭', colore: 'gray'   },
  { id: 7, titolo: 'Rilevamento laser',              voci: ['Rilevamenti laser scanner ad alta risoluzione di edifici', 'Digital twin'],                                      icona: '📡', colore: 'purple' },
  { id: 8, titolo: 'Primo intervento',               voci: ['Primo intervento dopo un disastro'],                                                                             icona: '🚨', colore: 'red'    },
]

export const STEPS_MISSIONE = [
  { numero: 1, titolo: 'Lista missioni configurate',        descrizione: 'Visualizza e gestisci tutte le missioni già configurate nel sistema',                                                              placeholderLabel: 'Lista missioni configurate' },
  { numero: 2, titolo: 'Configurazione di una missione',    descrizione: 'Area di editing con elenco delle azioni disponibili per ogni waypoint della missione',                                             placeholderLabel: 'Area di editing'            },
  { numero: 3, titolo: 'Associazione di azioni al waypoint',descrizione: "Collega azioni di tipo I/O a ciascun punto della missione per automatizzare i comportamenti del robot",                            placeholderLabel: 'Azioni di tipo IO'          },
  { numero: 4, titolo: 'Missione in corso e fase attuale',  descrizione: 'Supervisione in tempo reale della missione attiva e dello stato corrente del robot',                                               placeholderLabel: 'Missione in corso'          },
]

export const NAV_LINKS = [
  { label: 'Home',         href: '/'             },
  { label: 'Il Sistema',   href: '/sistema'       },
  { label: 'Funzionalità', href: '/funzionalita'  },
  { label: 'Applicazioni', href: '/applicazioni'  },
  { label: 'Contatti',     href: '/contatti'      },
]

export const REFERENTI = [
  { azienda: "Ud'Anet",            nome: 'Christian Sciarretta', ruolo: 'Presidente',                       email: 'christian.sciarretta@udanet.it', sito: 'https://www.udanet.it/'        },
  { azienda: 'Info Solution s.r.l.',nome: 'Marco Penco',          ruolo: 'Research and new products manager', email: 'm.penco@infosolution.it',        sito: 'https://www.infosolution.it/it/' },
]

export const CASO_DUSO_CARDS = [
  { titolo: 'Algoritmo di intelligenza artificiale', testo: "Il sistema è in grado di rilevare intrusioni, grazie alle telecamere a bordo del robot e ad un algoritmo ottimizzato di intelligenza artificiale, in grado di riconoscere persone o animali" },
  { titolo: 'Pianificazione',                        testo: "IntellySafe Edge è in grado di pianificare missioni e di programmare le azioni che il robot deve intraprendere ad ogni step." },
]

export const SCHEDULING_CARDS = [
  { titolo: 'Interfaccia per la sensoristica',   testo: 'La sensoristica a bordo può essere configurata e gestita da una specifica interfaccia di supervisione' },
  { titolo: 'Step di lavorazione personalizzati',testo: 'Tramite il sw a disposizione possiamo controllare il comportamento del robot e creare step di lavorazione personalizzati per ogni processo lavorativo' },
]
