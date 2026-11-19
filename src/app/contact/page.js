import { ContactContent } from '@/components/sections/contact/ContactContent';

export const metadata = {
  title: 'Contact Us',
  description: 'Talk to the WsCube CRM team about the product, pricing, partnerships or support.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactContent />;
}
