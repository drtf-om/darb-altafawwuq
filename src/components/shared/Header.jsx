import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { ChevronLeft } from '../ui/Icons';
import logoSrc from '/assets/logo.png';

export default function Header({ onOrder }) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    window.addEventListener('scroll', on, { passive: true });
    on();
    return () => window.removeEventListener('scroll', on);
  }, []);

  const links = [['عن الكتاب', '#learn'], ['الأقسام', '#chapters'], ['من الكتاب', '#preview'], ['المؤلفون', '#authors'], ['آراء القرّاء', '#reviews']];

  return (
    <header style={{
      position: 'fixed', top: 0, insetInline: 0, zIndex: 200,
      background: solid ? 'rgba(250,249,244,0.82)' : 'transparent',
      backdropFilter: solid ? 'blur(14px)' : 'none',
      WebkitBackdropFilter: solid ? 'blur(14px)' : 'none',
      borderBottom: solid ? '1px solid var(--border-subtle)' : '1px solid transparent',
      boxShadow: solid ? 'var(--shadow-xs)' : 'none',
      transition: 'background .3s, box-shadow .3s, border-color .3s',
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <span style={{ display: 'inline-flex', padding: 4, borderRadius: 12, background: 'transparent' }}>
            <img src={logoSrc} alt="درب التفوق" style={{ width: 42, height: 42, objectFit: 'contain' }} />
          </span>
        </a>
        <nav className="nav-links" style={{ display: 'flex', gap: 30 }}>
          {links.map((l, i) => (
            <a key={i} href={l[1]} className="navlink" style={{ color: solid ? 'var(--ink-700)' : 'rgba(255,255,255,0.9)' }}>{l[0]}</a>
          ))}
        </nav>
        <Button variant="accent" size="sm" onClick={onOrder} iconEnd={<ChevronLeft size={18} />}>احصل على نسختك</Button>
      </div>
    </header>
  );
}
