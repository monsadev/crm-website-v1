import { AboutContent } from '@/components/sections/about/AboutContent';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata = {
  title: 'About Us',
  description:
    'WsCube CRM is built by WsCube Tech to give education businesses one platform for admissions, payments, cohorts and growth. Learn about our story, mission and values.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <CtaBand title="Let us build your {growth engine} together" />
    </>
  );
}
