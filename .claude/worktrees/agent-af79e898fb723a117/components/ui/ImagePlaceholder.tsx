interface ImagePlaceholderProps {
  label?: string
  className?: string
  aspectRatio?: 'video' | 'square' | 'wide'
}
export default function ImagePlaceholder({ label, className = '', aspectRatio = 'video' }: ImagePlaceholderProps) {
  const ratios = { video: 'aspect-video', square: 'aspect-square', wide: 'aspect-[16/7]' }
  return (
    <div
      className={`relative ${ratios[aspectRatio]} rounded-2xl overflow-hidden ${className}`}
      style={{ backgroundColor: '#1E2040', border: '1px solid #2E3160' }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,98,25,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,98,25,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Orange glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(ellipse at center, rgba(255,98,25,0.15) 0%, transparent 70%)' }}
      />
      {/* Icon + label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: 'rgba(255,98,25,0.2)', border: '1px solid rgba(255,98,25,0.3)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,98,25,0.6)" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>
        {label && (
          <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.3)' }}>{label}</span>
        )}
      </div>
    </div>
  )
}
