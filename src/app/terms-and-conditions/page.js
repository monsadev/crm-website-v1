import { LegalLayout } from '@/components/sections/legal/LegalLayout';
import { legalUpdated, termsSections } from '@/data/legal';

export const metadata = {
  title: 'Terms and Conditions',
  description: 'The terms that govern the use of the WsCube CRM website and service.',
  alternates: { canonical: '/terms-and-conditions' },
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms and {Conditions}"
      intro="The rules for using our website and service, written to be as clear as possible."
      updated={legalUpdated}
      sections={termsSections}
    />
  );
}
