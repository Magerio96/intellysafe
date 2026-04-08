import { Veicolo } from '@/types'

export default function VeicoloCard({ veicolo }: { veicolo: Veicolo }) {
  return (
    <div className="card-dark rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
      <div className="px-5 py-4 flex items-center justify-between" style={{ backgroundColor: '#252849' }}>
        <h3 className="font-display font-bold text-xl text-white">{veicolo.nome}</h3>
        <span className="badge-orange">{veicolo.tipo}</span>
      </div>
      <div className="p-5 space-y-3">
        {[
          { label: 'Peso', value: veicolo.peso },
          { label: 'Carico utile', value: veicolo.carico },
          ...(veicolo.coppia ? [{ label: 'Coppia', value: veicolo.coppia }] : []),
          { label: 'IP Rating', value: veicolo.ip },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between items-center text-sm">
            <span style={{ color: '#9698B0' }}>{label}</span>
            <span className="font-semibold text-white">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
