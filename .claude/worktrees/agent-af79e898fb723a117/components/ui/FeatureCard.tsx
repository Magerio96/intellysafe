import { Zap, Users, Radio, Clock, Bell, Shield, Activity, Settings, type LucideIcon } from 'lucide-react'
import { FeatureIA } from '@/types'

const iconeMap: Record<string, LucideIcon> = {
  zap: Zap,
  users: Users,
  radio: Radio,
  clock: Clock,
  bell: Bell,
  shield: Shield,
  activity: Activity,
  settings: Settings,
}

export default function FeatureCard({ feature }: { feature: FeatureIA }) {
  const Icon = iconeMap[feature.icona] || Zap
  return (
    <div className="glass-card p-6 h-full flex flex-col">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
        style={{ backgroundColor: 'rgba(255,98,25,0.15)', border: '1px solid rgba(255,98,25,0.25)' }}
      >
        <Icon className="w-5 h-5" style={{ color: '#FF6219' }} />
      </div>
      <h3 className="font-display font-semibold text-base mt-4 text-white">{feature.titolo}</h3>
      <p className="text-sm leading-relaxed mt-2 flex-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
        {feature.descrizione}
      </p>
    </div>
  )
}
