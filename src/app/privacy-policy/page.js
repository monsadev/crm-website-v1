import { LegalLayout } from '@/components/sections/legal/LegalLayout';
import { legalUpdated, privacySections } from '@/data/legal';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How WsCube CRM collects, uses and protects personal information.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy {Policy}"
      intro="Your trust matters. This policy explains what we collect, why we collect it and the choices you have."
      updated={legalUpdated}
      sections={privacySections}
    />
  );
}
