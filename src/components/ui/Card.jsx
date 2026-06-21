export default function Card({
  children,
  accent,
  elevation = 'flat',
  padding = 'md',
  className = '',
  style = {},
  ...rest
}) {
  const shadows = {
    flat:   'none',
    raised: 'var(--shadow-md)',
    high:   'var(--shadow-lg)',
  };
  const paddings = {
    sm: '16px',
    md: '24px',
    lg: '28px 30px',
    xl: '36px 40px',
  };
  const accentColors = {
    green: 'var(--green-500)',
    blue:  'var(--blue-500)',
    teal:  'var(--teal-500)',
    olive: 'var(--olive-800)',
  };

  return (
    <div
      className={className}
      style={{
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: shadows[elevation] || shadows.flat,
        padding: paddings[padding] || paddings.md,
        borderTop: accent ? `3px solid ${accentColors[accent] || accent}` : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
