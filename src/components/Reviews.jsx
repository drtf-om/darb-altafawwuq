import { useState } from 'react';

const REVIEWS = [
  {
    name: 'سلطان الراشدي',
    text: 'كتاب غيّر طريقة تفكيري في الدراسة كلياً. الاستراتيجيات عملية وقابلة للتطبيق فوراً، وأنا شخصياً رفعت نسبتي بعد تطبيق ما فيه.',
  },
  {
    name: 'نور الهاشمية',
    text: 'أخيراً كتاب عُماني يتكلم بلغتنا وعن تجارب حقيقية. أحسست أن الكتّاب فاهمين ضغط الدراسة وكيف نتعامل معه.',
  },
  {
    name: 'عبدالله المعمري',
    text: 'القسم الخاص بتنظيم الوقت وحده يستحق الشراء. طريقة مرتبة وواضحة، غيّرت روتيني اليومي بالكامل.',
  },
  {
    name: 'ريم البوسعيدية',
    text: 'أهدته لأخي في الصف العاشر وكان أفضل هدية. الأسلوب سلس وما فيه تعقيد، ويحفز على الاستمرار.',
  },
  {
    name: 'يوسف الكندي',
    text: 'ما توقعت يكون في كتاب عُماني هالمستوى. تصميمه جميل وتنظيمه ممتاز، وكل قسم يكمّل الثاني.',
  },
  {
    name: 'منى الشعيلية',
    text: 'قرأته في يومين ما قدرت أوقفه! الأسلوب محمّس ومباشر، وحسست إن اللي كتبوه عارفين تماماً ما يحتاجه الطالب.',
  },
];

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);

  const cardStyle = (i) => ({
    background: '#fff', borderRadius: 'var(--radius-xl)',
    padding: '26px 24px', boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--border-subtle)',
    display: 'flex', flexDirection: 'column', gap: 12,
    animation: `fadeUp 0.4s ease ${i * 0.08}s both`,
    flex: '0 1 420px', minWidth: 300,
  });

  const gridStyle = { display: 'flex', flexWrap: 'wrap', gap: 22, justifyContent: 'center', maxWidth: 960, margin: '0 auto' };

  return (
    <section id="reviews" style={{ background: 'var(--paper-50)', padding: '96px 0 100px', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: -80, insetInlineStart: -80, width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(187,191,115,0.1), transparent 70%)' }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
          <span style={{ display: 'inline-block', background: 'var(--olive-800)', color: '#fff', fontWeight: 800, fontSize: 14, padding: '7px 18px', borderRadius: 999 }}>آراء القرّاء</span>
          <h2 style={{ font: 'var(--type-h1)', fontSize: 'clamp(30px, 4vw, 44px)', color: 'var(--olive-900)', margin: '20px 0 14px' }}>
            ماذا قالوا عن <span className="grad-text">درب التفوّق</span>
          </h2>
          <p style={{ font: 'var(--type-body)', fontSize: 17, color: 'var(--ink-600)', margin: 0 }}>
            آراء حقيقية من طلاب دحيحية 😉
          </p>
        </div>

        {/* Always-visible first 2 */}
        <div style={gridStyle}>
          {REVIEWS.slice(0, 2).map((r, i) => (
            <div key={i} style={cardStyle(i)}>
              <p style={{ font: 'var(--type-body-sm)', color: 'var(--ink-700)', margin: 0, lineHeight: 1.85, flex: 1 }}>"{r.text}"</p>
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 12 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--olive-800)' }}>{r.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Collapsible extra reviews */}
        <div style={{
          overflow: 'hidden',
          maxHeight: showAll ? 1000 : 0,
          opacity: showAll ? 1 : 0,
          transition: 'max-height 0.5s ease, opacity 0.4s ease',
          marginTop: showAll ? 22 : 0,
        }}>
          <div style={gridStyle}>
            {REVIEWS.slice(2).map((r, i) => (
              <div key={i} style={cardStyle(i)}>
                <p style={{ font: 'var(--type-body-sm)', color: 'var(--ink-700)', margin: 0, lineHeight: 1.85, flex: 1 }}>"{r.text}"</p>
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 12 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--olive-800)' }}>{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <button onClick={() => setShowAll(!showAll)} style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15,
            color: 'var(--olive-800)', background: '#fff',
            border: '1.5px solid var(--border-strong)', borderRadius: 999,
            padding: '10px 28px', cursor: 'pointer',
            boxShadow: 'var(--shadow-xs)', transition: 'background 0.2s',
          }}>
            {showAll ? 'إخفاء ↑' : 'المزيد من الآراء ↓'}
          </button>
        </div>
      </div>
    </section>
  );
}
