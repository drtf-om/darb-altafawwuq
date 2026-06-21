const pageSrc = 'https://drtf-om.replit.app/assets/page-section1.png';

export default function Preview() {
  return (
    <section id="preview" style={{ position: 'relative', overflow: 'hidden', padding: '96px 0 100px', background: 'var(--cover-gradient)' }}>
      <div aria-hidden style={{ position: 'absolute', top: '20%', insetInlineStart: '-8%', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,228,78,0.16), transparent 70%)' }} />

      <div className="wrap" style={{ position: 'relative', textAlign: 'center' }}>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 48px' }}>
          <h2 style={{ font: 'var(--type-h1)', fontSize: 'clamp(32px, 4.5vw, 46px)', color: '#fff', margin: '0 0 12px' }}>
            نظرةٌ من <span className="grad-text animated">داخل الكتاب</span>
          </h2>
          <p style={{ font: 'var(--type-body)', color: 'rgba(255,255,255,0.78)', margin: '0 auto', maxWidth: 480, textAlign: 'center' }}>
            صفحةٌ حقيقية من القسم الأول «سر البداية» — هكذا يخاطبك الكتاب: بتصميمٍ مريح ونصائح تُطبَّق فورًا.
          </p>
        </div>

        <div className="reveal d1" style={{ maxWidth: 1040, margin: '0 auto', position: 'relative' }}>
          <div aria-hidden style={{ position: 'absolute', inset: -18, borderRadius: 28, background: 'radial-gradient(circle at 50% 45%, rgba(244,228,78,0.18), transparent 72%)', filter: 'blur(6px)' }} />
          <img src={pageSrc} alt="صفحة من القسم الأول: وضع خطة واضحة" style={{
            position: 'relative', display: 'block', width: '100%', height: 'auto',
            borderRadius: 16, boxShadow: '0 50px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.12)',
          }} />
        </div>

        <p className="reveal d2" style={{ textAlign: 'center', marginTop: 26, color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
          صفحتان من أكثر من مئة صفحةٍ تنتظرك
        </p>
      </div>
    </section>
  );
}
