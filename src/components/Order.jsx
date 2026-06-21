import Button from './ui/Button';
import { ArrowUpRight, Bell } from './ui/Icons';
import coverFullSrc from '/assets/cover-full.png';
import omrSrc from '/assets/omr-symbol.png';

function WhatsIcon({ size = 30 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}

function Method({ icon, badge, title, desc, btn, btnVariant, href, accent, onClick }) {
  const inner = (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
        <span style={{ width: 56, height: 56, flex: 'none', borderRadius: 16, background: accent.soft, color: accent.fg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
        <div>
          <span style={{ display: 'inline-block', fontSize: 11.5, fontWeight: 800, color: accent.fg, background: accent.soft, padding: '3px 10px', borderRadius: 999, marginBottom: 4, whiteSpace: 'nowrap' }}>{badge}</span>
          <h3 style={{ font: 'var(--type-h3)', fontSize: 20, color: 'var(--text-heading)', margin: 0 }}>{title}</h3>
        </div>
      </div>
      <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: '0 0 20px', textAlign: 'right', flex: 1 }}>{desc}</p>
      <Button variant={btnVariant} size="md" full iconEnd={<ArrowUpRight size={18} />}>{btn}</Button>
    </>
  );

  const cardStyle = {
    display: 'flex', flexDirection: 'column', background: 'var(--surface-card)',
    borderRadius: 'var(--radius-xl)', padding: '30px 28px', height: '100%',
  };

  if (onClick) {
    return (
      <div onClick={onClick} className="method" role="button" tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        style={{ ...cardStyle, cursor: 'pointer' }}>
        {inner}
      </div>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className="method" style={{ ...cardStyle, textDecoration: 'none' }}>
      {inner}
    </a>
  );
}

export default function Order({ onWhatsapp }) {
  return (
    <section id="order" style={{ padding: '96px 0 100px', background: 'var(--surface-page)' }}>
      <div className="wrap">
        {/* price banner */}
        <div className="reveal price-banner" style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-2xl)', background: 'var(--brand-gradient)', padding: '40px 44px', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 30, flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div className="price-banner-inner" style={{ display: 'flex', alignItems: 'center', gap: 26, flex: '1 1 360px' }}>
            {/* Full book cover */}
            <img src={coverFullSrc} alt="غلاف الكتاب" className="bob"
              style={{ width: 260, borderRadius: 10, boxShadow: '0 20px 44px rgba(0,0,0,0.3)', flex: 'none' }} />
            <div>
              <span style={{ display: 'inline-block', background: 'var(--olive-900)', color: '#fff', fontWeight: 700, fontSize: 13, padding: '5px 14px', borderRadius: 999, marginBottom: 12, whiteSpace: 'nowrap' }}>النسخة الأولى · إصدار محدود</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 3.4vw, 38px)', lineHeight: 1.15, color: 'var(--olive-900)', margin: '0 0 8px' }}>ابدأ رحلتك اليوم</h2>
              <p style={{ font: 'var(--type-body)', color: 'rgba(44,46,31,0.8)', margin: 0 }}>كتابٌ ورقيٌّ يصلك إلى باب بيتك.</p>
            </div>
          </div>
          <div className="price-value" style={{ textAlign: 'center', flex: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, direction: 'ltr' }}>
              <img src={omrSrc} alt="ر.ع" style={{ width: 46, height: 46, objectFit: 'contain', filter: 'brightness(0) saturate(100%)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 56, color: 'var(--olive-900)', lineHeight: 1 }}>3.000</span>
            </div>
            <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--olive-700)', marginTop: 6 }}>غير شامل سعر التوصيل</div>
          </div>
        </div>

        {/* method header */}
        <div className="reveal d1" style={{ textAlign: 'center', marginBottom: 24 }}>
          <span className="eyebrow">طريقة الطلب</span>
          <h3 style={{ font: 'var(--type-h2)', fontSize: 'clamp(24px, 3vw, 32px)', color: 'var(--text-heading)', margin: '14px 0 0' }}>
            اطلب نسختك <span className="grad-text">عبر واتساب</span>
          </h3>
        </div>

        <div className="reveal d2" style={{ maxWidth: 480, margin: '0 auto' }}>
          <Method
            onClick={onWhatsapp}
            icon={<WhatsIcon size={30} />}
            badge="اضغط للطلب"
            title="اطلب عبر واتساب"
            desc="قم بتعبئة نموذج الطلب ثم ارسله لنا وسنتواصل معك لتأكيد طلبك."
            btn="فتح نموذج الطلب"
            btnVariant="accent"
            accent={{ soft: '#dcf5e3', fg: '#1f8a4c' }}
          />
        </div>

        <p className="reveal d4" style={{ textAlign: 'center', marginTop: 22, color: 'var(--text-muted)', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
          <Bell size={16} stroke="var(--text-muted)" />
          لأي استفسار: <a href="https://wa.me/96877667765" target="_blank" rel="noreferrer" style={{ direction: 'ltr', fontWeight: 700, color: 'var(--olive-800)', textDecoration: 'none' }}>+968 77667765</a>
          <span>·</span>
          <a href="https://instagram.com/drtf.om" target="_blank" rel="noreferrer" style={{ color: 'var(--blue-600)', fontWeight: 700, direction: 'ltr' }}>@drtf.om</a>
        </p>
      </div>
    </section>
  );
}
