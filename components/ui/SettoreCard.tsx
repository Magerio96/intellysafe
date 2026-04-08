import { Settore } from '@/types'

export default function SettoreCard({ settore }: { settore: Settore }) {
  return (
    <div className="card-light p-6 flex flex-col hover:-translate-y-0.5 transition-all duration-300">
      <span className="text-4xl mb-4 block">{settore.icona}</span>
      <h3 className="font-display font-bold text-lg mb-3" style={{ color: '#252849' }}>{settore.titolo}</h3>
      <ul className="space-y-1.5 flex-1">
        {settore.voci.map((voce, i) => (
          <li key={i} className="text-sm flex items-start gap-2" style={{ color: '#5A5C78' }}>
            <span className="mt-1 shrink-0 text-xs" style={{ color: '#FF6219' }}>●</span>
            {voce}
          </li>
        ))}
      </ul>
      <div
        className="mt-auto pt-4"
        style={{ borderTop: '2px solid rgba(255,98,25,0.2)' }}
      />
    </div>
  )
}
