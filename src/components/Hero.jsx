import { useRef, useState } from 'react';
import Button from './ui/Button';
import CountUp from './shared/CountUp';
import Glyph from './shared/Glyph';
import Formula from './shared/Formula';
import { ChevronLeft, ChevronDown, List, Book } from './ui/Icons';
import { useScrollY } from './shared/hooks';
import coverSrc from '/assets/cover-front.jpg';
import omrSrc   from '/assets/omr-symbol.png';

const FLOATS = [
  { kind: 'glyph', t: 'hex',   top: 16, left: 12, size: 58, p: 0.18, d: 9 },
  { kind: 'glyph', t: 'atom',  top: 30, left: 84, size: 70, p: 0.30, d: 11 },
  { kind: 'glyph', t: 'flask', top: 60, left: 8,  size: 54, p: 0.22, d: 8 },
  { kind: 'glyph', t: 'book',  top: 70, left: 88, size: 60, p: 0.16, d: 10 },
  { kind: 'glyph', t: 'hex',   top: 78, left: 22, size: 40, p: 0.40, d: 7 },
  { kind: 'f', c: 'E=mc²', top: 12, left: 70, size: 22, p: 0.26, d: 9 },
  { kind: 'f', c: 'H₂O',  top: 48, left: 90, size: 20, p: 0.34, d: 8 },
  { kind: 'f', c: '∑',    top: 84, left: 76, size: 30, p: 0.5,  d: 10 },
  { kind: 'f', c: 'π',    top: 24, left: 6,  size: 26, p: 0.44, d: 7.5 },
];

export default function Hero({ onOrder }) {
  const y = useScrollY();
  const heroRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const r = heroRef.current.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width - 0.5;
    const cy = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: cy * -10, y: cx * 14 });
  };
  const onLeave = () => setTilt({ x: 0, y: 0 });

  const scrollTo = (id, offset = 70) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      ref={heroRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ position: 'relative', overflow: 'hidden', background: 'var(--cover-gradient)' }}
    >
      {/* twinkling stars */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {Array.from({ length: 36 }).map((_, i) => {
          const top = i * 53 % 96, left = i * 71 % 98, s = i % 3 + 1.5;
          return <span key={i} className="twinkle" style={{ position: 'absolute', top: top + '%', left: left + '%', width: s, height: s, borderRadius: '50%', background: '#fff', opacity: 0.5, animationDelay: i % 7 * 0.4 + 's' }} />;
        })}
      </div>

      {/* golden portal glow */}
      <div aria-hidden style={{
        position: 'absolute', bottom: '-6%', left: '50%',
        transform: `translateX(-50%) translateY(${y * 0.12}px)`,
        width: 'min(620px, 80vw)', height: 520, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,228,78,0.42) 0%, rgba(244,228,78,0.16) 38%, rgba(244,228,78,0) 70%)',
        animation: 'glowPulse 5s ease-in-out infinite', pointerEvents: 'none',
      }} />

      {/* parallax floats */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', color: 'rgba(244,228,78,0.55)' }}>
        {FLOATS.map((f, i) => (
          <div key={i} className="drift" style={{
            position: 'absolute', top: f.top + '%', left: f.left + '%',
            transform: `translateY(${y * f.p}px)`, '--dur': f.d + 's',
            '--dx': (i % 2 ? 12 : -10) + 'px', '--dy': '-14px',
          }}>
            {f.kind === 'glyph' ? (
              <Glyph type={f.t} size={f.size} className="twinkle" style={{ filter: 'drop-shadow(0 0 12px rgba(244,228,78,0.5))', animationDuration: f.d - 2 + 's' }} />
            ) : (
              <Formula style={{ fontSize: f.size, color: 'rgba(244,228,78,0.7)', textShadow: '0 0 14px rgba(244,228,78,0.45)' }}>{f.c}</Formula>
            )}
          </div>
        ))}
      </div>

      <div className="wrap hero-grid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: 48, alignItems: 'center', padding: '120px 28px 110px', minHeight: '88vh' }}>
        {/* copy */}
        <div style={{ transform: `translateY(${y * -0.04}px)` }}>
          <div className="hero-badge-wrap" style={{ marginBottom: 26 }}>
            <span className="nowrap-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.22)', color: '#eef0dc', fontWeight: 700, fontSize: 12, padding: '7px 14px', borderRadius: 999 }}>
              <span className="twinkle" style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green-300)' }} />
              النسخة الأولى · من تأليف طلابٍ عُمانيين متفوّقين
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(48px, 7vw, 84px)', lineHeight: 1.04, margin: '0 0 18px', color: '#fff', letterSpacing: '-0.01em' }}>
            <span className="grad-text animated">درب التفوّق</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(20px, 2.6vw, 28px)', color: '#cfe0f0', margin: '0 0 18px' }}>
            لمن يطلب المعالي ويسعى للتميّز
          </p>
          <p className="hero-desc" style={{ font: 'var(--type-body)', fontSize: 19, color: 'rgba(255,255,255,0.8)', maxWidth: '48ch', margin: '0 auto 36px', textAlign: 'right' }}>
            صعودك إلى نسبة <Formula style={{ color: 'var(--green-300)', fontWeight: 800, fontSize: 21 }}>+98%</Formula> يبدأ بخطوة. كتابٌ يجمع الاستراتيجيات والنصائح التي سار عليها طلابٌ حقّقوا أعلى النسب — ليأخذ بيدك خطوة بخطوة نحو هدفك بثقةٍ وطمأنينة.
          </p>
          <div className="hero-stats hero-cta" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'stretch', marginBottom: 44 }}>
            <div style={{ flex: '1 1 200px', display: 'flex' }}>
              <Button variant="accent" size="md" full onClick={onOrder} iconEnd={<ChevronLeft size={18} />}>
                احصل على نسختك · 3.000 <img src={omrSrc} alt="ر.ع" style={{ width: 20, height: 20, objectFit: 'contain', verticalAlign: 'middle', marginInlineStart: 2, filter: 'brightness(0) saturate(100%)' }} />
              </Button>
            </div>
            <a href="#chapters" style={{ flex: '1 1 200px', display: 'flex' }}
              onClick={(e) => { e.preventDefault(); scrollTo('chapters'); }}>
              <Button variant="accent" size="md" full iconEnd={<ChevronLeft size={18} />}>تصفّح الأقسام الخمسة</Button>
            </a>
          </div>
          <div className="hero-stats" style={{ display: 'flex', gap: 38 }}>
            {[['5', 'أقسام عملية', List], ['+100', 'صفحة إرشاد', Book]].map((s, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, color: 'var(--green-300)', direction: 'ltr' }}>
                  {s[0].startsWith('+') ? <><span>+</span><CountUp to={parseInt(s[0].slice(1))} /></> : <CountUp to={parseInt(s[0])} />}
                </div>
                <div style={{ font: 'var(--type-caption)', color: 'rgba(255,255,255,0.62)', textAlign: 'center' }}>{s[1]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* floating book cover */}
        <div style={{ display: 'flex', justifyContent: 'center', perspective: 1200 }}>
          <div className="bob" style={{ transform: `translateY(${y * -0.06}px)`, width: 'min(360px, 78vw)' }}>
            <div style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform .2s var(--ease-out)',
              transformStyle: 'preserve-3d',
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', inset: -24, borderRadius: 28, background: 'radial-gradient(circle at 50% 40%, rgba(244,228,78,0.35), transparent 70%)', filter: 'blur(8px)' }} />
              <img src={coverSrc} alt="غلاف كتاب درب التفوق" style={{
                position: 'relative', display: 'block', width: '100%', borderRadius: 16,
                boxShadow: '0 40px 90px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.1)',
              }} />
              <span style={{ position: 'absolute', top: 16, insetInlineStart: -14, background: 'var(--brand-gradient)', color: 'var(--olive-900)', fontWeight: 800, fontSize: 13, padding: '8px 14px', borderRadius: 999, boxShadow: 'var(--shadow-md)', transform: 'translateZ(40px)' }}>
                إصدار محدود
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div aria-hidden style={{ position: 'absolute', bottom: 0, insetInline: 0, height: 90, background: 'linear-gradient(to bottom, transparent, var(--surface-page))' }} />

      {/* scroll cue */}
      <a href="#learn" aria-label="انزل للأسفل"
        style={{ position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)', zIndex: 5, color: 'rgba(255,255,255,0.7)' }}
        onClick={(e) => { e.preventDefault(); scrollTo('learn', 20); }}>
        <span className="bob" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <ChevronDown size={26} />
        </span>
      </a>
    </section>
  );
}
