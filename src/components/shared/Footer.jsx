import { useState, useEffect } from 'react';
import logoSrc from '/assets/logo.png';

function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/drtf-om/visits/up')
      .then(r => r.json())
      .then(d => setCount(d.count))
      .catch(() => {});
  }, []);

  if (count === null) return null;

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      margin: '6px 0 0', fontSize: 12.5, color: 'rgba(255,255,255,0.4)',
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
      <span>عدد الزيارات: <strong style={{ color: 'rgba(255,255,255,0.6)' }}>{count.toLocaleString('en-US')}</strong></span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--olive-900)', color: 'rgba(255,255,255,0.82)', paddingTop: 64 }}>
      <div className="wrap footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr', gap: 40, paddingBottom: 48 }}>
        <div className="footer-col">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <span style={{ display: 'inline-flex', borderRadius: 12, padding: 4 }}>
              <img src={logoSrc} alt="درب التفوق" style={{ width: 38, height: 38, objectFit: 'contain' }} />
            </span>
          </div>
          <p style={{ font: 'var(--type-body-sm)', color: 'rgba(255,255,255,0.62)', maxWidth: '34ch', margin: 0 }}>
            <span style={{ display: 'block', fontWeight: 700, color: 'rgba(255,255,255,0.82)', marginBottom: 6 }}>لمن يطلب المعالي ويسعى للتميّز.</span>
            كتابٌ من تأليف طلابٍ عُمانيين متفوّقين، يأخذ بيدك خطوة بخطوة نحو هدفك.
          </p>
        </div>
        <div className="footer-col">
          <h4 style={{ font: 'var(--type-label)', color: '#fff', margin: '4px 0 16px', fontSize: 15 }}>روابط</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
            <a href="#learn"    style={{ color: 'rgba(255,255,255,0.74)' }}>عن الكتاب</a>
            <a href="#chapters" style={{ color: 'rgba(255,255,255,0.74)' }}>الأقسام الخمسة</a>
            <a href="#authors"  style={{ color: 'rgba(255,255,255,0.74)' }}>المؤلفون</a>
            <a href="#order"    style={{ color: 'rgba(255,255,255,0.74)' }}>اطلب الكتاب</a>
          </div>
        </div>
        <div className="footer-col">
          <h4 style={{ font: 'var(--type-label)', color: '#fff', margin: '4px 0 16px', fontSize: 15 }}>تواصل معنا</h4>
          <div className="footer-contacts" style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 14 }}>
            <a href="https://wa.me/96877667760" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, textDecoration: 'none' }}>
              <span style={{ color: 'var(--green-300)', fontWeight: 700 }}>للطلب</span>
              <span style={{ direction: 'ltr', color: 'rgba(255,255,255,0.74)' }}>+968 77667760</span>
            </a>
            <a href="https://wa.me/96877667765" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, textDecoration: 'none' }}>
              <span style={{ color: 'var(--green-300)', fontWeight: 700 }}>للاستفسار</span>
              <span style={{ direction: 'ltr', color: 'rgba(255,255,255,0.74)' }}>+968 77667765</span>
            </a>
            <a href="https://instagram.com/drtf.om" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, color: 'var(--green-300)', fontWeight: 700 }}>
              <span>إنستغرام</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, direction: 'ltr' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                @drtf.om
              </span>
            </a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="footer-bottom wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 6, padding: '20px 28px', fontSize: 12.5, color: 'rgba(255,255,255,0.5)' }}>
          <span>© 2026 درب التفوق · النسخة الأولى · مايو 2026م · جميع الحقوق محفوظة</span>
          <span>تم ترخيص الكتاب من وزارة الإعلام - سلطنة عُمان</span>
          <span>الرقم المعياري الدولي (ISBN): 978-99992-22-46-4</span>
          <span>رقم الإيداع: 2026/10884</span>
          <VisitorCounter />
        </div>
      </div>
    </footer>
  );
}
