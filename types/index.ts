export interface Veicolo {
  id: number
  nome: string
  peso: string
  carico: string
  coppia: string | null
  ip: string
  tipo: 'tracked' | 'wheeled'
}

export interface FeatureIA {
  id: number
  titolo: string
  descrizione: string
  icona: string
}

export interface Settore {
  id: number
  titolo: string
  voci: string[]
  icona: string
  colore: string
}

export interface StepMissione {
  numero: number
  titolo: string
  descrizione: string
  placeholderLabel: string
}

export interface NavLink {
  label: string
  href: string
}

export interface Referente {
  azienda: string
  nome: string
  ruolo: string
  email: string
  sito: string
}
