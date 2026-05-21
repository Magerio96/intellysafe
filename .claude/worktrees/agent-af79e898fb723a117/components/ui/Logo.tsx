export function Logo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/IntellySafe_logo_arancione-bianco.png"
      alt="IntellySafe"
      style={{ height: '36px', width: 'auto', objectFit: 'contain', display: 'block' }}
    />
  )
}
