interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  variant?: 'light' | 'dark'
  centered?: boolean
}
export default function SectionTitle({
  label,
  title,
  subtitle,
  variant = 'light',
  centered = false,
}: SectionTitleProps) {
  const isLight = variant === 'light'
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {label && (
        <span className={isLight ? 'section-label' : 'section-label-light'}>
          {label}
        </span>
      )}
      <div
        style={{
          display: 'block',
          width: '3rem',
          height: '2px',
          backgroundColor: '#FF6219',
          borderRadius: '9999px',
          marginTop: '0.75rem',
          marginBottom: '1rem',
          ...(centered ? { marginLeft: 'auto', marginRight: 'auto' } : {}),
        }}
      />
      <h2
        className="text-4xl md:text-5xl font-display font-bold tracking-tight"
        style={{ color: isLight ? '#252849' : 'white' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''}`}
          style={{ color: isLight ? '#5A5C78' : 'rgba(255,255,255,0.6)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
