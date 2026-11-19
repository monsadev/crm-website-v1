import { ProductHero } from '@/components/sections/product/ProductHero';
import { ProductModules } from '@/components/sections/product/ProductModules';
import { CapabilityMatrix } from '@/components/sections/product/CapabilityMatrix';
import { IntegrationsOrbit } from '@/components/sections/home/IntegrationsOrbit';
import { FaqSection } from '@/components/sections/home/FaqSection';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata = {
  title: 'Product',
  description:
    'Explore every module of WsCube CRM: lead management, follow-ups, WhatsApp automation, cohorts, payments and EMI, onboarding and certificates, marketing attribution, reports, email and enterprise security.',
  alternates: { canonical: '/product' },
};

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <ProductModules />
      <CapabilityMatrix />
      <IntegrationsOrbit />
      <FaqSection className="bg-slate-50/70" />
      <CtaBand title="See every module {live}, with your data" />
    </>
  );
}
