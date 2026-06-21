const GLYPHS = {
  atom: (
    <g>
      <circle cx="24" cy="24" r="3.4" />
      <ellipse cx="24" cy="24" rx="20" ry="8" />
      <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(-60 24 24)" />
    </g>
  ),
  hex: (
    <g>
      <polygon points="24,6 39,15 39,33 24,42 9,33 9,15" />
      <line x1="24" y1="6" x2="24" y2="0" />
      <line x1="39" y1="33" x2="45" y2="37" />
      <line x1="9" y1="33" x2="3" y2="37" />
    </g>
  ),
  flask: (
    <g>
      <path d="M19 6h10M21 6v12L11 38a3 3 0 0 0 3 4h20a3 3 0 0 0 3-4L27 18V6" />
      <line x1="16" y1="30" x2="32" y2="30" />
    </g>
  ),
  book: (
    <g>
      <path d="M24 12c-4-3-10-3-14-2v26c4-1 10-1 14 2 4-3 10-3 14-2V10c-4-1-10-1-14 2z" />
      <line x1="24" y1="12" x2="24" y2="40" />
    </g>
  ),
};

export default function Glyph({ type = 'atom', size = 48, className = '', style }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {GLYPHS[type]}
    </svg>
  );
}
