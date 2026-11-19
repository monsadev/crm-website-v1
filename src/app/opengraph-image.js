import { ImageResponse } from 'next/og';

export const alt = 'WsCube CRM, the admissions and revenue CRM for education businesses';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Social share card rendered at build time.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'linear-gradient(135deg, #020617 0%, #0f172a 55%, #1e1b4b 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: '#194cff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontWeight: 800 }}>
            W
          </div>
          <div style={{ display: 'flex', fontSize: 34, fontWeight: 700 }}>
            <span>WsCube</span>
            <span style={{ color: '#7dd3fc', marginLeft: 10 }}>CRM</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            Turn every enquiry into an enrolment, on autopilot
          </div>
          <div style={{ fontSize: 28, color: '#94a3b8', maxWidth: 900 }}>
            Leads, WhatsApp, payments and EMI, cohorts, certificates, reports and security in one platform.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 14 }}>
          {['Lead management', 'WhatsApp automation', 'EMI and invoices', 'Cohorts', 'Reports'].map((t) => (
            <div key={t} style={{ fontSize: 22, padding: '10px 20px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)' }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
