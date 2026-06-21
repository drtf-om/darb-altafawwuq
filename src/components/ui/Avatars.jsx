export function Avatar({ gender = 'm', skin = '#f2c89b', shirt = '#427db8', hair = '#3a2a1c', hijab = '#5db5d2', delay = 0, cap = false, size = 132 }) {
  const blinkStyle = {
    transformOrigin: '60px 56px',
    animation: `blink ${4 + (delay % 3)}s ease-in-out ${delay * 0.4}s infinite`,
  };
  return (
    <svg viewBox="0 0 120 130" width={size} height={size * 130 / 120} style={{ overflow: 'visible' }}>
      <defs>
        <clipPath id={'face' + gender + delay}><circle cx="60" cy="54" r="26" /></clipPath>
      </defs>

      <path d={'M22 130 C22 100 38 86 60 86 C82 86 98 100 98 130 Z'} fill={shirt} />
      <path d={'M48 86 L60 98 L72 86 Z'} fill="#ffffff" opacity="0.92" />
      <path d="M52 88 L60 97 L68 88" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />

      <rect x="53" y="72" width="14" height="18" rx="6" fill={skin} />

      {gender === 'f' ? (
        <>
          <path d="M30 56 C30 30 46 18 60 18 C74 18 90 30 90 56 C90 84 80 96 80 96 L40 96 C40 96 30 84 30 56 Z" fill={hijab} />
          <circle cx="60" cy="54" r="25" fill={skin} />
          <path d="M35 54 C35 32 47 22 60 22 C73 22 85 32 85 54 C85 60 84 64 84 64 C84 50 74 40 60 40 C46 40 36 50 36 64 C36 64 35 60 35 54 Z" fill={hijab} />
          <path d="M36 60 C36 48 47 41 60 41 C73 41 84 48 84 60" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
        </>
      ) : (
        <>
          <circle cx="60" cy="54" r="26" fill={skin} />
          <path d="M34 50 C34 28 48 22 60 22 C72 22 86 28 86 50 C86 44 80 36 70 35 C66 41 54 41 50 35 C40 36 34 44 34 50 Z" fill={hair} />
          <path d="M34 50 C32 44 33 36 36 33" fill="none" stroke={hair} strokeWidth="5" strokeLinecap="round" />
        </>
      )}

      <g style={blinkStyle}>
        <circle cx="51" cy="56" r="2.6" fill="#2d3740" />
        <circle cx="69" cy="56" r="2.6" fill="#2d3740" />
      </g>
      <path d="M46 49 q5 -3 10 0" fill="none" stroke="#2d3740" strokeWidth="1.6" strokeLinecap="round" opacity="0.55" />
      <path d="M64 49 q5 -3 10 0" fill="none" stroke="#2d3740" strokeWidth="1.6" strokeLinecap="round" opacity="0.55" />
      <circle cx="46" cy="64" r="4" fill="#ef9a9a" opacity="0.45" />
      <circle cx="74" cy="64" r="4" fill="#ef9a9a" opacity="0.45" />
      <path d="M52 66 q8 8 16 0" fill="none" stroke="#2d3740" strokeWidth="2.2" strokeLinecap="round" />

      {cap && (
        <g transform="translate(60 22)">
          <polygon points="-22,-2 0,-12 22,-2 0,8" fill="var(--olive-800)" />
          <polygon points="-12,2 -12,10 12,10 12,2 0,7" fill="var(--olive-800)" />
          <line x1="22" y1="-2" x2="24" y2="10" stroke="var(--green-500)" strokeWidth="2" />
          <circle cx="24" cy="11" r="2.4" fill="var(--green-500)" />
        </g>
      )}
    </svg>
  );
}
