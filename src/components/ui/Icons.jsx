const S = (paths) => function Icon({ size = 24, stroke = 'currentColor', fill = 'none', strokeWidth = 2, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
};

const Raw = (html) => function Icon({ size = 24, stroke = 'currentColor', fill = 'none', strokeWidth = 2, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}
      dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export const ChevronRight = S(['M15 18l-6-6 6-6']);
export const ChevronLeft  = S(['M9 18l6-6-6-6']);
export const ChevronDown  = S(['M6 9l6 6 6-6']);
export const Search       = Raw('<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>');
export const Home         = Raw('<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>');
export const Book         = Raw('<path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 1 2-2h12"/>');
export const Cap          = Raw('<path d="M22 9L12 5 2 9l10 4 10-4z"/><path d="M6 11v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5"/>');
export const Check        = S(['M20 6L9 17l-5-5']);
export const CheckCircle  = Raw('<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>');
export const Clock        = Raw('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>');
export const Target       = Raw('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>');
export function Star({ size = 24, fill = 'currentColor', stroke = 'none', ...rest }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} stroke={stroke} {...rest}><polygon points="12 2 15 9 22 9.5 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9.5 9 9" /></svg>;
}
export const Heart        = Raw('<path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5.5 6 5.5c2 0 3.2 1.2 4 2.3.8-1.1 2-2.3 4-2.3 3.5 0 5 3.5 3.5 6.5C19 16.5 12 21 12 21z"/>');
export const User         = Raw('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>');
export const List         = Raw('<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="3.5" cy="6" r="1.2"/><circle cx="3.5" cy="12" r="1.2"/><circle cx="3.5" cy="18" r="1.2"/>');
export const Menu         = Raw('<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>');
export const ArrowLeft    = Raw('<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>');
export const Bell         = Raw('<path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/><path d="M10 20a2 2 0 0 0 4 0"/>');
export function Play({ size = 24, fill = 'currentColor', ...rest }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...rest}><polygon points="6 4 20 12 6 20" /></svg>;
}
export function Quote({ size = 24, fill = 'currentColor', ...rest }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...rest}><path d="M7 7h5v6c0 2.5-1.7 4-4 4.5V15c1-.3 1.5-1 1.5-2H7V7zm9 0h5v6c0 2.5-1.7 4-4 4.5V15c1-.3 1.5-1 1.5-2H16V7z" /></svg>;
}
export const ArrowUpRight = Raw('<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>');
