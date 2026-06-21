import { useState } from 'react';

const GRADES = ['5', '6', '7', '8', '9', '10', '11', '12'];

const GOVERNORATES = {
  'مسقط': ['مسقط', 'مطرح', 'بوشر', 'السيب', 'العامرات', 'قريات'],
  'ظفار': ['صلالة', 'طاقة', 'سدح', 'مرباط', 'رخيوت', 'ضلكوت', 'مقشن', 'شليم وجزر الحلانيات'],
  'مسندم': ['خصب', 'بخاء', 'دبا', 'مدحاء'],
  'البريمي': ['البريمي', 'محضة', 'عيبي'],
  'الداخلية': ['نزوى', 'بهلاء', 'منح', 'إزكي', 'سمائل', 'أدم', 'الحمراء', 'المنتفق'],
  'شمال الباطنة': ['صحار', 'لوى', 'شناص', 'خابورة', 'صحم', 'المصنعة'],
  'جنوب الباطنة': ['الرستاق', 'العوابي', 'نخل', 'وادي المعاول', 'بركاء', 'المصنعة'],
  'شمال الشرقية': ['إبراء', 'المضيبي', 'دما والطائيين', 'وادي بني خالد', 'الكامل والوافي', 'البدية', 'قبيل', 'حوقاين'],
  'جنوب الشرقية': ['صور', 'مصيرة', 'ضباء', 'الشويمية'],
  'الوسطى': ['هيماء', 'محوت', 'الدقم', 'الجازر'],
  'الظاهرة': ['عبري', 'ضنك', 'ينقل'],
};

const DELIVERY = [
  { label: 'التوصيل إلى باب المنزل', price: 2, note: '2 ريال عماني' },
  { label: 'التوصيل إلى مكتب شركة الشحن في منطقتك', price: 1, note: '1 ريال عماني' },
];

const WHATSAPP_NUMBER = '96877667760';

function toEnDigits(str) {
  return str.replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[^\d+\s\-().]/g, '');
}

const BLUE = {
  primary: 'var(--olive-800)',
  soft: 'var(--paper-100, #f5f4ee)',
  border: 'var(--border-strong)',
  dark: 'var(--olive-900)',
  header: 'var(--olive-800)',
};

const inputStyle = {
  fontFamily: 'var(--font-display)', fontSize: 13, color: '#1e293b',
  background: '#fff', border: '1.5px solid #cbd5e1',
  borderRadius: 12, padding: '12px 16px', outline: 'none', width: '100%',
  boxSizing: 'border-box', direction: 'rtl',
};

const selectStyle = {
  ...inputStyle,
  cursor: 'pointer',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231d4ed8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left 14px center',
  paddingLeft: 40,
  appearance: 'none',
  WebkitAppearance: 'none',
};

function Field({ id, label, required, hint, children, error }) {
  return (
    <div id={id} className="order-form-field" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: '#0f172a' }}>
        {label} {required && <span style={{ color: '#dc2626' }}>*</span>}
      </label>
      {hint && <span style={{ fontSize: 13, color: '#64748b' }}>{hint}</span>}
      {children}
      {error && <span style={{ fontSize: 12.5, color: '#dc2626' }}>{error}</span>}
    </div>
  );
}

function Section({ title, num, children }) {
  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
      <div className="order-form-section-header" style={{ background: BLUE.header, padding: '14px 22px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, color: '#fff', flexShrink: 0 }}>{num}</span>
        <span style={{ fontWeight: 800, fontSize: 16, color: '#fff' }}>{title}</span>
      </div>
      <div className="order-form-section-body" style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: 20 }}>{children}</div>
    </div>
  );
}

function Row({ label, val }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: '#334155' }}>
      <span>{label}</span><span style={{ fontWeight: 700 }}>{val}</span>
    </div>
  );
}

function WhatsIcon({ size = 24 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}

function CopiesStepper({ value, onChange, error }) {
  const num = value === '' ? 0 : parseInt(value);

  const decrement = () => {
    if (num <= 1) return;
    onChange(String(num - 1));
  };

  const increment = () => {
    onChange(String(num === 0 ? 1 : num + 1));
  };

  const btnBase = {
    width: 44, height: 44, borderRadius: 10, border: `1.5px solid ${error ? '#dc2626' : '#cbd5e1'}`,
    background: '#f8fafc', cursor: 'pointer', display: 'flex', alignItems: 'center',
    justifyContent: 'center', fontSize: 22, fontWeight: 700, color: BLUE.primary,
    flexShrink: 0, transition: 'background 0.15s',
    fontFamily: 'var(--font-display)',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, border: `1.5px solid ${error ? '#dc2626' : '#cbd5e1'}`, borderRadius: 12, overflow: 'hidden', background: '#fff' }}>
      <button
        type="button"
        onClick={decrement}
        disabled={num <= 1}
        style={{
          ...btnBase,
          border: 'none',
          borderRadius: 0,
          borderLeft: `1.5px solid ${error ? '#dc2626' : '#e2e8f0'}`,
          opacity: num <= 1 ? 0.3 : 1,
          cursor: num <= 1 ? 'not-allowed' : 'pointer',
        }}
      >−</button>

      <div style={{
        flex: 1, textAlign: 'center', fontFamily: 'var(--font-display)',
        fontWeight: 700, fontSize: 17, color: num === 0 ? '#94a3b8' : '#0f172a',
        padding: '10px 8px', userSelect: 'none',
      }}>
        {num === 0 ? '—' : num}
      </div>

      <button
        type="button"
        onClick={increment}
        style={{
          ...btnBase,
          border: 'none',
          borderRadius: 0,
          borderRight: `1.5px solid ${error ? '#dc2626' : '#e2e8f0'}`,
          opacity: 1,
          cursor: 'pointer',
        }}
      >+</button>
    </div>
  );
}

export default function OrderFormPage({ onClose }) {
  const [form, setForm] = useState({
    name: '', phone: '', grade: '', copies: '1',
    delivery: '', gov: '', wilaya: '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [rowIndex, setRowIndex] = useState(null);

  const set = (k) => (e) => {
    const val = e.target.value;
    setForm((f) => {
      const next = { ...f, [k]: val };
      if (k === 'gov') next.wilaya = '';
      return next;
    });
    setErrors((er) => ({ ...er, [k]: '' }));
  };

  const deliveryObj = DELIVERY.find((d) => d.label === form.delivery);
  const deliveryPrice = deliveryObj ? deliveryObj.price : 0;
  const bookTotal = form.copies ? parseInt(form.copies) * 3 : 0;
  const total = bookTotal + deliveryPrice;
  const wilayas = form.gov ? GOVERNORATES[form.gov] || [] : [];

  const FIELD_ORDER = ['name', 'phone', 'grade', 'copies', 'delivery', 'gov', 'wilaya'];

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'الاسم مطلوب';
    if (!form.phone.trim()) e.phone = 'رقم الهاتف مطلوب';
    else if (!/^\d{8}$/.test(form.phone.trim())) e.phone = 'يجب أن يكون رقم الهاتف 8 أرقام بالضبط';
    else if (!/^[79]/.test(form.phone.trim())) e.phone = 'يجب أن يبدأ رقم الهاتف بالرقم 7 أو 9';
    if (!form.grade) e.grade = 'الصف الدراسي مطلوب';
    if (!form.copies) e.copies = 'عدد النسخ مطلوب';
    if (!form.delivery) e.delivery = 'يرجى اختيار طريقة التوصيل';
    if (!form.gov) e.gov = 'المحافظة مطلوبة';
    if (!form.wilaya) e.wilaya = 'الولاية مطلوبة';
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      const firstKey = FIELD_ORDER.find((k) => e[k]);
      if (firstKey) {
        setTimeout(() => {
          const el = document.getElementById(`field-${firstKey}`);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 50);
      }
      return;
    }

    const msg = [
      '📘 *طلب كتاب «درب التفوق»*',
      '',
      '👤 *بيانات الطالب:*',
      `الاسم الكامل: ${form.name}`,
      `رقم الهاتف: +968${form.phone}`,
      `الصف الدراسي: الصف ${form.grade}`,
      '',
      '📦 *تفاصيل الطلب:*',
      `عدد النسخ: ${form.copies} نسخة`,
      `مكان التوصيل: ${form.delivery}`,
      `المحافظة: ${form.gov}`,
      `الولاية: ${form.wilaya}`,
      '',
      '💰 *الإجمالي:*',
      `سعر الكتاب: ${form.copies} × 3 = ${bookTotal} ريال`,
      `سعر التوصيل: ${deliveryPrice} ريال`,
      `المجموع: ${total} ريال`,
      '',
      '⚠️ سأرسل صورة إيصال التحويل البنكي في هذه المحادثة.',
    ].join('\n');

    fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        grade: form.grade,
        copies: form.copies,
        delivery: form.delivery,
        gov: form.gov,
        wilaya: form.wilaya,
        bookTotal,
        deliveryPrice,
        total,
        rowIndex: rowIndex || undefined,
      }),
    })
      .then(r => r.json())
      .then(d => {
        if (d.success && d.rowIndex) setRowIndex(d.rowIndex);
        if (!d.success) console.error('Sheet error:', d);
      })
      .catch(err => console.error('Sheet fetch error:', err));

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const waUrl = isMobile
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
      : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    setSent(true);
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'var(--paper-50)', overflowY: 'auto',
      direction: 'rtl', fontFamily: 'var(--font-display)',
    }}>
      {/* Top bar */}
      <div className="order-form-topbar" style={{
        position: 'sticky', top: 0, zIndex: 10,
        background: 'rgba(248,247,243,0.96)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={onClose} style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14,
          color: BLUE.primary, background: BLUE.soft, border: `1.5px solid ${BLUE.border}`,
          borderRadius: 999, padding: '7px 18px', cursor: 'pointer',
        }}>
          ← رجوع
        </button>
        <span style={{ fontWeight: 800, fontSize: 17, color: '#0f172a' }}>نموذج طلب الكتاب</span>
        <div style={{ width: 90 }} />
      </div>

      <div className="order-form-wrap" style={{ maxWidth: 680, margin: '0 auto', padding: '36px 24px 80px' }}>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: '#0f172a', marginBottom: 12 }}>تم فتح واتساب!</h2>
            <p style={{ fontSize: 15, color: '#475569', marginBottom: 8 }}>
              أرسل الرسالة ثم أرفق صورة إيصال التحويل البنكي في نفس المحادثة.
            </p>
            <button onClick={() => setSent(false)} style={{
              marginTop: 24, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14,
              color: BLUE.primary, background: BLUE.soft, border: `1.5px solid ${BLUE.border}`,
              borderRadius: 999, padding: '10px 24px', cursor: 'pointer',
            }}>تعديل الطلب</button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            {/* 1 - بيانات الطالب */}
            <Section title="بيانات الطالب" num="1">
              <Field id="field-name" label="الاسم الكامل" required error={errors.name}>
                <input
                  value={form.name}
                  onChange={set('name')}
                  placeholder="أدخل اسمك الكامل"
                  style={{ ...inputStyle, borderColor: errors.name ? '#dc2626' : '#cbd5e1' }}
                />
              </Field>

              <Field id="field-phone" label="رقم الهاتف" required hint="سيتم التواصل معك على هذا الرقم عبر الواتساب" error={errors.phone}>
                <div style={{ display: 'flex', alignItems: 'stretch', direction: 'ltr', borderRadius: 8, overflow: 'hidden', border: `1.5px solid ${errors.phone ? '#dc2626' : '#cbd5e1'}` }}>
                  <span style={{
                    padding: '0 14px',
                    background: '#f1f5f9',
                    borderRight: `1.5px solid ${errors.phone ? '#dc2626' : '#cbd5e1'}`,
                    fontSize: 14, color: '#475569', fontWeight: 700,
                    display: 'flex', alignItems: 'center',
                    flexShrink: 0, userSelect: 'none',
                  }}>+968</span>
                  <input
                    value={form.phone}
                    onChange={(e) => {
                      const val = toEnDigits(e.target.value).slice(0, 8);
                      setForm(f => ({ ...f, phone: val }));
                      if (errors.phone) setErrors(er => ({ ...er, phone: undefined }));
                    }}
                    placeholder="7XXXXXXX أو 9XXXXXXX"
                    type="tel"
                    maxLength={8}
                    style={{ ...inputStyle, border: 'none', outline: 'none', borderRadius: 0, flex: 1, textAlign: 'left' }}
                  />
                </div>
              </Field>

              <Field id="field-grade" label="الصف الدراسي المقبل عليه العام القادم" required error={errors.grade}>
                <select value={form.grade} onChange={set('grade')} style={{ ...selectStyle, borderColor: errors.grade ? '#dc2626' : '#cbd5e1' }}>
                  <option value="">-- اختر الصف --</option>
                  {GRADES.map((g) => <option key={g} value={g}>الصف {g}</option>)}
                </select>
              </Field>
            </Section>

            {/* 2 - تفاصيل الطلب */}
            <Section title="تفاصيل الطلب" num="2">
              <Field id="field-copies" label="عدد النسخ المطلوبة" required error={errors.copies}>
                <CopiesStepper
                  value={form.copies}
                  error={errors.copies}
                  onChange={(val) => {
                    setForm(f => ({ ...f, copies: val }));
                    if (errors.copies) setErrors(er => ({ ...er, copies: '' }));
                  }}
                />
              </Field>
            </Section>

            {/* 3 - بيانات التوصيل */}
            <Section title="بيانات التوصيل" num="3">
              <div style={{ background: '#fefce8', border: '1px solid #fde047', borderRadius: 12, padding: '14px 16px', fontSize: 13.5, color: '#713f12', lineHeight: 1.75 }}>
                <strong style={{ display: 'block', marginBottom: 6 }}>⚠️ تنويه مهم:</strong>
                <span style={{ textAlign: 'justify', display: 'block' }}>
                  شركة الشحن المسؤولة عن التوصيل هي <strong>شركة جيناكم</strong>.
                  إن كنت ترغب في التوصيل إلى مكتب الشركة، تأكد من تواجده في ولايتك.
                  في حال عدم وجود مكتب في ولايتك، اختر التوصيل إلى باب المنزل.
                </span>
              </div>

              <Field id="field-delivery" label="مكان التوصيل" required error={errors.delivery}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {DELIVERY.map((d) => {
                    const sel = form.delivery === d.label;
                    return (
                      <button key={d.label} type="button" className="delivery-option-btn"
                        onClick={() => { setForm((f) => ({ ...f, delivery: d.label })); setErrors((e) => ({ ...e, delivery: '' })); }}
                        style={{
                          fontFamily: 'var(--font-display)', fontWeight: sel ? 700 : 500, fontSize: 14,
                          padding: '13px 18px', borderRadius: 12, cursor: 'pointer', textAlign: 'right',
                          border: `1.5px solid ${sel ? BLUE.primary : '#cbd5e1'}`,
                          background: sel ? BLUE.soft : '#fff', color: '#1e293b',
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          transition: 'all 0.18s',
                        }}>
                        <span>{d.label}</span>
                        <span style={{ color: BLUE.primary, fontWeight: 800 }}>{d.note}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.delivery && <span style={{ fontSize: 12.5, color: '#dc2626' }}>{errors.delivery}</span>}
              </Field>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Field id="field-gov" label="المحافظة" required error={errors.gov}>
                  <select value={form.gov} onChange={set('gov')} style={{ ...selectStyle, borderColor: errors.gov ? '#dc2626' : '#cbd5e1' }}>
                    <option value="">-- اختر المحافظة --</option>
                    {Object.keys(GOVERNORATES).map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                </Field>

                <Field id="field-wilaya" label="الولاية" required error={errors.wilaya}>
                  <select value={form.wilaya} onChange={set('wilaya')} disabled={!form.gov}
                    style={{ ...selectStyle, borderColor: errors.wilaya ? '#dc2626' : '#cbd5e1', opacity: form.gov ? 1 : 0.5, cursor: form.gov ? 'pointer' : 'not-allowed' }}>
                    <option value="">{form.gov ? '-- اختر الولاية --' : 'اختر المحافظة أولاً'}</option>
                    {wilayas.map((w) => <option key={w} value={w}>{w}</option>)}
                  </select>
                </Field>
              </div>
            </Section>

            {/* 4 - تفاصيل الدفع */}
            <Section title="تفاصيل الدفع" num="4">
              {form.copies && form.delivery && (
                <div style={{ background: BLUE.soft, border: `1px solid ${BLUE.border}`, borderRadius: 12, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Row label={`سعر الكتاب (${form.copies} × 3 ريال)`} val={`${bookTotal} ريال`} />
                  <Row label="سعر التوصيل" val={`${deliveryPrice} ريال`} />
                  <div style={{ borderTop: `1px solid ${BLUE.border}`, paddingTop: 8, display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: 16, color: BLUE.dark }}>
                    <span>الإجمالي</span><span>{total} ريال</span>
                  </div>
                </div>
              )}

              <p style={{ fontSize: 14, color: '#475569', margin: 0, lineHeight: 1.8 }}>
                يرجى تحويل المبلغ إلى الحساب البنكي التالي، ثم إرسال صورة الإيصال عبر واتساب بعد إرسال هذا النموذج.
              </p>

              <img src="https://drtf-om.replit.app/assets/bank-info.png" alt="بيانات الحساب البنكي"
                style={{ width: '100%', maxWidth: 400, borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.1)', margin: '0 auto', display: 'block' }} />

              <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 12, padding: '16px 18px', fontSize: 15, color: '#7c2d12', lineHeight: 1.9 }}>
                <strong>📌 ملاحظات مهمة:</strong>
                <ul style={{ margin: '10px 0 0', paddingRight: 22, display: 'flex', flexDirection: 'column', gap: 6, textAlign: 'justify' }}>
                  <li>بعد الضغط على "إرسال الطلب عبر واتساب"، سيُفتح تطبيق واتساب تلقائياً.</li>
                  <li>أرسل الرسالة، ثم أرفق صورة إيصال التحويل البنكي في <strong>نفس المحادثة</strong>.</li>
                  <li>لن يُعتمد الطلب إلا بعد استلام صورة الإيصال.</li>
                  <li>للاستفسار: <a href={/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? 'https://wa.me/96877667765' : 'https://web.whatsapp.com/send?phone=96877667765'} target="_blank" rel="noreferrer" style={{ color: BLUE.primary, fontWeight: 700, direction: 'ltr', display: 'inline-block' }}>77667765</a></li>
                </ul>
              </div>
            </Section>

            {/* Submit */}
            <button onClick={handleSubmit} style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17,
              background: '#25d366', color: '#fff', border: 'none',
              borderRadius: 16, padding: '18px 32px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              boxShadow: '0 4px 20px rgba(37,211,102,0.35)', width: '100%',
            }}>
              <WhatsIcon size={24} />
              {rowIndex ? 'إرسال التعديل عبر واتساب' : 'إرسال الطلب عبر واتساب'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
