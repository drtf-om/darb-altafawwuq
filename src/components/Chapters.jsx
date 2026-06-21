import { useState } from 'react';
import { ChevronDown, Check, Book } from './ui/Icons';

const CH = [
  { n: 1, t: 'سر البداية',                             tag: 'الانطلاقة الصحيحة', d: 'كلّ تفوّقٍ يبدأ بهدفٍ واضح وخطّةٍ تعرف بها من أين تبدأ ولماذا. هنا تبني أساسك.', b: ['حدّد هدفك بدقّة ووضوح', 'ابنِ خطّة أسبوعية واقعية', 'رسّخ عادات النجاح اليومية'] },
  { n: 2, t: 'التعامل مع الضغوط وبناء الصمود',          tag: 'قلبٌ مطمئن',        d: 'حين يثقل قلبك القلق، تحتاج أدواتٍ تعيد لك توازنك. تعلّم كيف تحوّل الضغط إلى دافع.', b: ['تعرّف على مصادر الضغط', 'تقنيات تهدئة القلق', 'توازن بين الدراسة والراحة'] },
  { n: 3, t: 'فن إتقان المواد الدراسية',               tag: 'افهم لتتقن',        d: 'لكلّ مادةٍ مفتاحها. أساليب الفهم العميق والحفظ الذكي التي تجعل المذاكرة أقصر وأعمق.', b: ['طرق الفهم العميق', 'أساليب الحفظ الفعّال', 'مذاكرة كل مادة بطريقتها'] },
  { n: 4, t: 'عادة التحضير والمراجعة الذكية',          tag: 'الخطوة الاستباقية', d: 'المتفوّق لا ينتظر الامتحان ليراجع. ابنِ عادتي التحضير قبل الحصة والمراجعة بعدها.', b: ['حضّر قبل الحصة', 'راجع بعد المدرسة', 'دورة المراجعة المتباعدة'] },
  { n: 5, t: 'اللمسة الأخيرة',                         tag: 'استعدادٌ للقمّة',   d: 'الأيام الأخيرة تصنع الفارق. خطّة المراجعة النهائية والاستعداد الذهني وحل الاختبار بثقة.', b: ['خطة المراجعة النهائية', 'الاستعداد الذهني والنفسي', 'استراتيجيات حل الاختبار'] },
];

function Row({ c, open, onToggle }) {
  const color = `var(--section-${c.n})`;
  const soft  = `var(--section-${c.n}-soft)`;
  return (
    <div className="chrow reveal" onClick={onToggle} style={{
      background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)',
      boxShadow: open ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      borderInlineStart: `6px solid ${color}`, overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '22px 26px' }}>
        <div style={{ width: 60, height: 60, flex: 'none', borderRadius: 18, background: color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, direction: 'ltr', boxShadow: `0 8px 18px ${color}55` }}>{c.n}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: color, background: soft, padding: '3px 11px', borderRadius: 999, whiteSpace: 'nowrap' }}>{c.tag}</span>
            <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, direction: 'ltr', whiteSpace: 'nowrap' }}>القسم {c.n}</span>
          </div>
          <h3 style={{ font: 'var(--type-h3)', fontSize: 22, color: 'var(--text-heading)', margin: '6px 0 0' }}>{c.t}</h3>
        </div>
        <span style={{ flex: 'none', width: 38, height: 38, borderRadius: '50%', background: soft, display: 'flex', alignItems: 'center', justifyContent: 'center', color: color, transition: 'transform var(--dur-base) var(--ease-out)', transform: open ? 'rotate(180deg)' : 'none' }}>
          <ChevronDown size={20} stroke={color} />
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateRows: open ? '1fr' : '0fr', transition: 'grid-template-rows var(--dur-slow) var(--ease-out)' }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ padding: '0 26px 24px 26px' }}>
            <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-body)', margin: '0 0 16px', maxWidth: '62ch' }}>{c.d}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {c.b.map((b, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: soft, color: 'var(--ink-800)', fontWeight: 600, fontSize: 14, padding: '8px 14px', borderRadius: 999 }}>
                  <Check size={15} stroke={color} strokeWidth={3} />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Chapters() {
  const [open, setOpen] = useState(0);
  return (
    <section id="chapters" style={{ background: 'var(--surface-page)', padding: '96px 0 96px' }}>
      <div className="wrap">
        <div className="reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 40 }}>
          <div style={{ maxWidth: 640 }}>
            <span className="eyebrow">خريطة الرحلة</span>
            <h2 style={{ font: 'var(--type-h1)', fontSize: 'clamp(32px, 4.5vw, 46px)', color: 'var(--text-heading)', margin: '20px 0 12px' }}>
              <span className="nowrap-lg">خمسة أقسام،</span>
              <br className="mobile-br" />
              {' '}<span className="grad-text nowrap-lg">دربٌ واحد نحو التفوّق</span>
            </h2>
            <p className="nowrap-lg" style={{ font: 'var(--type-body)', color: 'var(--text-muted)', margin: 0 }}>اضغط على أي قسمٍ لتكتشف ما ينتظرك بداخله.</p>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--surface-card)', color: 'var(--olive-800)', fontWeight: 700, padding: '10px 18px', borderRadius: 999, boxShadow: 'var(--shadow-sm)', whiteSpace: 'nowrap' }}>
            <Book size={18} stroke="var(--olive-800)" /> +100 صفحة
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {CH.map((c, i) => <Row key={c.n} c={c} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />)}
        </div>
      </div>
    </section>
  );
}
