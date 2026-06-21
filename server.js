import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { ReplitConnectors } from '@replit/connectors-sdk';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';

const app = express();
app.use(express.json());

const connectors = new ReplitConnectors();
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID || '';

function buildRow(order, timestamp) {
  const d = timestamp || new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Muscat' }));
  const pad = n => String(n).padStart(2, '0');
  const h = d.getHours(), ampm = h >= 12 ? 'PM' : 'AM', h12 = h % 12 || 12;
  const now = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${h12}:${pad(d.getMinutes())} ${ampm}`;

  const rawPhone = order.phone || '';
  const fullPhone = `968${rawPhone}`;
  const displayPhone = `+968 ${rawPhone}`;
  const phoneFormula = rawPhone
    ? `=HYPERLINK("https://web.whatsapp.com/send?phone=${fullPhone}","${displayPhone}")`
    : '';

  return [
    now,
    order.name || '',
    phoneFormula,
    order.grade || '',
    order.copies || '',
    order.delivery || '',
    order.gov || '',
    order.wilaya || '',
    order.bookTotal || '',
    order.deliveryPrice || '',
    order.total || '',
    'غير مكتمل',
  ];
}

// ── API Routes ──────────────────────────────────────────────
app.post('/api/order', async (req, res) => {
  try {
    const order = req.body;

    if (!SPREADSHEET_ID) {
      return res.status(400).json({ error: 'GOOGLE_SHEET_ID not configured' });
    }

    const row = buildRow(order, null);

    // ── Update existing row ──────────────────────────────────
    if (order.rowIndex) {
      const range = `A${order.rowIndex}:L${order.rowIndex}`;
      const response = await connectors.proxy(
        'google-sheet',
        `/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(range)}?valueInputOption=USER_ENTERED`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ range, majorDimension: 'ROWS', values: [row] }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        console.error('Sheets API update error:', data);
        return res.status(500).json({ error: 'Failed to update sheet', details: data });
      }
      console.log(`✓ Order updated (row ${order.rowIndex}): ${order.name}`);
      return res.json({ success: true, rowIndex: order.rowIndex });
    }

    // ── Append new row ───────────────────────────────────────
    const response = await connectors.proxy(
      'google-sheet',
      `/v4/spreadsheets/${SPREADSHEET_ID}/values/A1:append?valueInputOption=USER_ENTERED&insertDataOption=OVERWRITE`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: [row] }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Sheets API error:', data);
      return res.status(500).json({ error: 'Failed to write to sheet', details: data });
    }

    // Parse inserted row number from e.g. "Sheet1!A5:L5"
    let rowIndex = null;
    try {
      const updatedRange = data.updates?.updatedRange || '';
      const match = updatedRange.match(/[A-Za-z]+!A(\d+)/);
      if (match) rowIndex = parseInt(match[1]);
    } catch (_) {}

    console.log(`✓ Order saved (row ${rowIndex}): ${order.name}`);
    res.json({ success: true, rowIndex });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/health', (_, res) => res.json({ ok: true }));

// ── Static / Dev ─────────────────────────────────────────────
if (isProd) {
  const distPath = join(__dirname, 'dist');
  app.use(express.static(distPath));
  app.get(/(.*)/, (_, res) => res.sendFile(join(distPath, 'index.html')));
} else {
  app.use('/', createProxyMiddleware({
    target: 'http://localhost:5001',
    changeOrigin: true,
    ws: true,
  }));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} [${isProd ? 'production' : 'development'}]`));
