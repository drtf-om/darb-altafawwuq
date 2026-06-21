import Card from './ui/Card';
import { Target, Book, Cap } from './ui/Icons';

function Svg(html) {
  return function Icon({ size = 24, stroke = 'currentColor', strokeWidth = 2, ...rest }) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}
        dangerouslySetInnerHTML={{ __html: html }} />
    );
  };
}
const BrainIcon   = Svg('<path d="M9 4a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 5 11a2.5 2.5 0 0 0 1 4.5A2.5 2.5 0 0 0 9 20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><path d="M15 4a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 11a2.5 2.5 0 0 1-1 4.5A2.5 2.5 0 0 1 15 20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>');
const RefreshIcon = Svg('<path d="M3 11a8 8 0 0 1 14-5l2 2"/><path d="M21 13a8 8 0 0 1-14 5l-2-2"/><path d="M19 4v4h-4"/><path d="M5 20v-4h4"/>');
const PenIcon     = Svg('<path d="M12 19l7-7-4-4-7 7-1 5z"/><path d="M15 8l1-1a2 2 0 0 1 3 3l-1 1"/><line x1="6" y1="22" x2="18" y2="22"/>');

const VALUES = [
  { icon: Target,      t: 'تحديد الهدف ووضع الخطة',         d: 'كيف ترسم طريقك من اليوم الأول.',                      tint: 'var(--green-100)', edge: 'green', ic: 'var(--green-700)' },
  { icon: Book,        t: 'بناء عادات دراسية ثابتة',          d: 'انضباطٌ يحوّل المجهود إلى نتيجة.',                   tint: 'var(--blue-50)',   edge: 'blue',  ic: 'var(--blue-600)' },
  { icon: BrainIcon,   t: 'التعامل مع الضغط والقلق',           d: 'صمودٌ نفسي وتوازنٌ بين الدراسة والراحة.',            tint: '#e7f3f6',          edge: 'teal',  ic: 'var(--teal-600)' },
  { icon: Cap,         t: 'فن إتقان كل مادة',                  d: 'طرق الفهم والحفظ ومصادر موثوقة لكل مادة.',          tint: 'var(--green-100)', edge: 'green', ic: 'var(--green-700)' },
  { icon: RefreshIcon, t: 'روتين المراجعة الذكية',              d: 'كيف تراجع بثباتٍ بلا إرهاق.',                       tint: 'var(--blue-50)',   edge: 'blue',  ic: 'var(--blue-600)' },
  { icon: PenIcon,     t: 'استراتيجيات يوم الاختبار',          d: 'من خطة المراجعة النهائية إلى ورقة الإجابة.',         tint: '#e7f3f6',          edge: 'teal',  ic: 'var(--teal-600)' },
];

export default function Learn() {
  return (
    <section id="learn" style={{ position: 'relative', padding: '96px 0 88px' }}>
      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
          <span className="eyebrow">محاور الكتاب</span>
          <h2 style={{ font: 'var(--type-h1)', fontSize: 'clamp(32px, 4.5vw, 46px)', color: 'var(--text-heading)', margin: '20px 0 14px' }}>
            لماذا هذا <span className="grad-text">الكتاب؟</span>
          </h2>
          <p style={{ font: 'var(--type-body)', fontSize: 20, color: 'var(--text-body)', margin: 0, fontWeight: 600 }}>
            لأنه سيعلّمك هذا:
          </p>
        </div>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {VALUES.map((v, i) => (
            <Card key={i} accent={v.edge} elevation="raised" padding="lg" className={'reveal lift d' + ((i % 3) + 1)} style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ width: 64, height: 64, borderRadius: 18, background: v.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <v.icon size={32} stroke={v.ic} />
              </div>
              <h3 style={{ font: 'var(--type-h3)', fontSize: 22, color: 'var(--text-heading)', margin: '0 0 10px' }}>{v.t}</h3>
              <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: 0 }}>{v.d}</p>
              <span style={{ position: 'absolute', bottom: -28, insetInlineEnd: -22, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 130, lineHeight: 1, color: v.tint, opacity: 0.55, direction: 'ltr', userSelect: 'none' }}>{i + 1}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
