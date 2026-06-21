import { useState } from 'react';
import { Avatar } from './ui/Avatars';
import { ChevronDown } from './ui/Icons';

const TEAM = [
  { name: 'مروان الخروصي',   role: 'فكرة وإعداد وتأليف', g: 'm', skin: '#e8b486', col: '#bbbf73', hair: '#2c2218', cap: true,  lead: true,
    bio: 'خريج دفعة 25، مبتعث من المدينة الطبية للأجهزة الأمنية والعسكرية لدراسة تخصص الطب البشري في جامعة كلية دبلن (UCD) في جمهورية إيرلندا 🇮🇪.' },
  { name: 'شهاب الكندي',     role: 'تأليف',               g: 'm', skin: '#f2c89b', col: '#427db8', hair: '#1f1a14',
    bio: 'خريج دفعة 25، مبتعث ضمن برنامج رُوّاد عُمان الدولي، أدرس في مدرسة UWC-USA العالمية بالولايات المتحدة الأمريكية، وتخصصي الهيدروجين وتقنيات الطاقة 🇺🇸.' },
  { name: 'باسل العلوي',     role: 'تأليف',               g: 'm', skin: '#d9a06b', col: '#5db5d2', hair: '#241a12',
    bio: 'خريج دفعة 25، مبتعث من وزارة التعليم لدراسة تخصص هندسة الميكاترونيكس في جامعة مانشستر (MUN) في إنجلترا 🏴󠁧󠁢󠁥󠁮󠁧󠁿.' },
  { name: 'هاجر الحوسنية',   role: 'تأليف',               g: 'f', skin: '#f0c49a', col: '#9aa863', hijab: '#9aa863',
    bio: 'خريجة دفعة 25، أدرس تخصص دكتور في الطب (MD) في كلية الطب والعلوم الصحية بجامعة السلطان قابوس 🇴🇲.' },
  { name: 'مريان البلوشية',  role: 'تأليف',               g: 'f', skin: '#e8b486', col: '#5db5d2', hijab: '#5db5d2',
    bio: 'خريجة دفعة 25، مبتعثة من وزارة التعليم لدراسة تخصص الطب البشري في الكلية الملكية للجراحين (RCSI) في البحرين 🇧🇭.' },
];

function BoldPercent({ text }) {
  const parts = text.split(/(نسبة [\d.]+%)/);
  return <>{parts.map((p, i) => i % 2 === 1 ? <strong key={i} style={{ color: '#fff' }}>{p}</strong> : p)}</>;
}

function AvatarOrb({ a, i, size = 120 }) {
  const orb = size + 8;
  return (
    <div style={{ position: 'relative', width: orb, height: orb, margin: '0 auto 16px' }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: `radial-gradient(circle at 50% 35%, ${a.col}55, ${a.col}22)`, boxShadow: `0 12px 30px ${a.col}33` }} />
      <div style={{ position: 'absolute', inset: 6, borderRadius: '50%', overflow: 'hidden', background: `linear-gradient(160deg, ${a.col}33, transparent)` }}>
        <div style={{ position: 'absolute', bottom: -6, left: '50%', transform: 'translateX(-50%)', animation: `avBob ${5 + i % 3}s ease-in-out ${i * 0.3}s infinite` }}>
          <Avatar gender={a.g} skin={a.skin} shirt={a.col} hijab={a.hijab} hair={a.hair} cap={a.cap} delay={i} size={size} />
        </div>
      </div>
    </div>
  );
}

function LeadCard({ a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="reveal lift" style={{
      background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(244,228,78,0.35)',
      borderRadius: 'var(--radius-2xl)', padding: '30px 40px', textAlign: 'center',
      position: 'relative', maxWidth: 420, width: '100%',
      boxShadow: '0 18px 50px rgba(0,0,0,0.28)', backdropFilter: 'blur(2px)',
    }}>
      <AvatarOrb a={a} i={0} size={150} />
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: '#fff', margin: '0 0 10px' }}>{a.name}</h3>
      <span style={{ display: 'inline-block', fontSize: 13.5, fontWeight: 700, color: 'var(--olive-900)', background: 'var(--brand-gradient)', padding: '6px 16px', borderRadius: 999, whiteSpace: 'nowrap' }}>{a.role}</span>

      {a.bio && (
        <>
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              margin: '16px auto 0', background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999,
              color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-display)',
              fontWeight: 600, fontSize: 13, padding: '7px 18px', cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            {open ? 'إخفاء' : 'نبذة'}
            <ChevronDown size={15} stroke="rgba(255,255,255,0.85)"
              style={{ transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </button>

          <div style={{
            overflow: 'hidden', maxHeight: open ? 200 : 0,
            transition: 'max-height 0.35s ease',
          }}>
            <p style={{
              margin: '14px 0 0', fontSize: 14, lineHeight: 1.75,
              color: 'rgba(255,255,255,0.78)', textAlign: 'center',
              background: 'rgba(255,255,255,0.06)', borderRadius: 12,
              padding: '12px 16px',
            }}>
              <BoldPercent text={a.bio} />
            </p>
          </div>
        </>
      )}
    </div>
  );
}

function AuthorCard({ a, i }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={'reveal lift d' + (i % 4 + 1)} style={{
      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 'var(--radius-xl)', padding: '26px 16px 22px', textAlign: 'center',
      position: 'relative', backdropFilter: 'blur(2px)',
    }}>
      <AvatarOrb a={a} i={i + 1} size={104} />
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#fff', margin: '0 0 8px' }}>{a.name}</h3>
      <span style={{ display: 'inline-block', fontSize: 12.5, fontWeight: 600, color: a.g === 'f' ? 'var(--green-300)' : 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: 999 }}>{a.role}</span>

      {a.bio && (
        <>
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              margin: '12px auto 0', background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999,
              color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-display)',
              fontWeight: 600, fontSize: 12, padding: '6px 14px', cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            {open ? 'إخفاء' : 'نبذة'}
            <ChevronDown size={13} stroke="rgba(255,255,255,0.85)"
              style={{ transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </button>

          <div style={{ overflow: 'hidden', maxHeight: open ? 200 : 0, transition: 'max-height 0.35s ease' }}>
            <p style={{
              margin: '10px 0 0', fontSize: 13, lineHeight: 1.75,
              color: 'rgba(255,255,255,0.78)', textAlign: 'center',
              background: 'rgba(255,255,255,0.06)', borderRadius: 12,
              padding: '10px 14px',
            }}>
              <BoldPercent text={a.bio} />
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default function Authors() {
  const lead = TEAM.find((a) => a.lead);
  const rest = TEAM.filter((a) => !a.lead);
  return (
    <section id="authors" style={{ background: 'var(--olive-900)', padding: '96px 0 100px', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: -60, insetInlineEnd: -60, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(187,191,115,0.16), transparent 70%)' }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 52px' }}>
          <span style={{ display: 'inline-block', background: 'var(--green-500)', color: 'var(--olive-900)', fontWeight: 800, fontSize: 14, padding: '7px 18px', borderRadius: 999 }}>قصة الكتاب</span>
          <h2 style={{ font: 'var(--type-h1)', fontSize: 'clamp(32px, 4.5vw, 46px)', color: '#fff', margin: '20px 0 14px' }}>
            كتبه من <span className="grad-text">ساروا الطريق</span> قبلك
          </h2>
          <p style={{ font: 'var(--type-body)', fontSize: 18, color: 'rgba(255,255,255,0.82)', margin: 0 }}>
            نحن مجموعةٌ من الطلاب العُمانيين الذين حقّقنا نسبًا عالية +98% في دراستنا. جمعنا في هذا الكتاب ما تعلّمناه من استراتيجياتٍ ونصائح اتّبعناها بأنفسنا، لنهديها لكلّ طالبٍ يطمح إلى التفوّق.
          </p>
        </div>

        <div className="authors-split" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 0.85fr) 1.15fr', gap: 28, alignItems: 'center' }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
            <LeadCard a={lead} />
          </div>
          <div className="authors-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
            {rest.map((a, i) => <AuthorCard key={i} a={a} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
