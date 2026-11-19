// Single place for brand, navigation and contact details.
// Contact values below are placeholders. Replace them before going live.
export const site = {
  name: 'WsCube CRM',
  tagline: 'The admissions and revenue CRM for education businesses',
  description:
    'WsCube CRM runs your whole learner journey in one place: lead capture, counsellor workflows, WhatsApp automation, cohort management, payments and EMI, certificates, reports and enterprise-grade security.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  parent: { name: 'WsCube Tech', url: 'https://www.wscubetech.com' },
  contact: {
    email: 'crm@wscubetech.com',
    phone: '+91 00000 00000',
    address: 'WsCube Tech, Jodhpur, Rajasthan, India',
    hours: 'Mon to Sat, 10:00 AM to 7:00 PM IST',
  },
  socials: [
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'X', href: '#', icon: 'twitter' },
    { label: 'YouTube', href: '#', icon: 'youtube' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Product', href: '/product' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms and Conditions', href: '/terms-and-conditions' },
  ],
};
