import { site } from '@/config/site';

// Sends a form to NEXT_PUBLIC_FORM_ENDPOINT when configured (JSON POST).
// Without an endpoint it opens the visitor's email app with the details filled in,
// so a submission is never silently dropped.
export async function submitForm(kind, data) {
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
  const payload = { kind, submitted_at: new Date().toISOString(), ...data };

  if (endpoint) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Request failed with ${res.status}`);
    return { via: 'endpoint' };
  }

  const subject = kind === 'demo' ? `Demo request from ${data.name}` : `Enquiry from ${data.name}`;
  const body = Object.entries(data)
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== '')
    .map(([k, v]) => `${k.replace(/_/g, ' ')}: ${Array.isArray(v) ? v.join(', ') : v}`)
    .join('\n');
  window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return { via: 'email' };
}

export const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim());
export const phoneOk = (v) => String(v).replace(/[^\d]/g, '').length >= 10;
