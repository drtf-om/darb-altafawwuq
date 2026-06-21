import { useState } from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconStart,
  iconEnd,
  disabled = false,
  full = false,
  onClick,
  type = 'button',
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const sizes = {
    sm: { fontSize: 14, padding: '8px 16px', gap: 8, radius: 'var(--radius-md)', icon: 16 },
    md: { fontSize: 16, padding: '11px 22px', gap: 9, radius: 'var(--radius-md)', icon: 18 },
    lg: { fontSize: 18, padding: '15px 30px', gap: 11, radius: 'var(--radius-lg)', icon: 20 },
  };
  const palette = {
    primary:   { bg: 'var(--olive-800)', bgH: 'var(--olive-900)', fg: '#fff',              bd: 'transparent' },
    accent:    { bg: 'var(--green-500)', bgH: 'var(--green-600)', fg: 'var(--olive-900)',   bd: 'transparent' },
    secondary: { bg: 'var(--blue-500)',  bgH: 'var(--blue-600)',  fg: '#fff',              bd: 'transparent' },
    outline:   { bg: 'transparent',     bgH: 'var(--paper-100)', fg: 'var(--olive-800)',   bd: 'var(--olive-800)' },
    ghost:     { bg: 'transparent',     bgH: 'var(--paper-100)', fg: 'var(--olive-800)',   bd: 'transparent' },
  };

  const s = sizes[size] || sizes.md;
  const p = palette[variant] || palette.primary;

  const style = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-base)',
    fontWeight: 700,
    fontSize: s.fontSize,
    lineHeight: 1.2,
    padding: s.padding,
    borderRadius: s.radius,
    border: `2px solid ${p.bd}`,
    background: disabled ? 'var(--paper-200)' : hover ? p.bgH : p.bg,
    color: disabled ? 'var(--ink-400)' : p.fg,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transform: active && !disabled ? 'scale(0.97)' : 'scale(1)',
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    boxShadow: variant === 'primary' && !disabled ? 'var(--shadow-sm)' : 'none',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  };

  const iconStyle = { width: s.icon, height: s.icon, display: 'inline-flex', flex: 'none' };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={style}
      {...rest}
    >
      {iconStart && <span style={iconStyle}>{iconStart}</span>}
      {children}
      {iconEnd && <span style={iconStyle}>{iconEnd}</span>}
    </button>
  );
}
