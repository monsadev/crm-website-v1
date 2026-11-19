import { Hero } from '@/components/sections/home/Hero';
import { LogoStrip } from '@/components/sections/home/LogoStrip';
import { StatsBand } from '@/components/sections/home/StatsBand';
import { Journey } from '@/components/sections/home/Journey';
import { FeatureTabs } from '@/components/sections/home/FeatureTabs';
import { BentoGrid } from '@/components/sections/home/BentoGrid';
import { RolesSection } from '@/components/sections/home/RolesSection';
import { IntegrationsOrbit } from '@/components/sections/home/IntegrationsOrbit';
import { SecuritySection } from '@/components/sections/home/SecuritySection';
import { HowItWorks } from '@/components/sections/home/HowItWorks';
import { FaqSection } from '@/components/sections/home/FaqSection';
import { CtaBand } from '@/components/sections/CtaBand';
import { site } from '@/config/site';

export const metadata = {
  title: { absolute: `${site.name} | ${site.tagline}` },
  description: site.description,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <div className="relative -mt-2 mb-24 sm:mb-32">
        <StatsBand />
      </div>
      <Journey />
      <FeatureTabs />
      <BentoGrid />
      <RolesSection />
      <IntegrationsOrbit />
      <SecuritySection />
      <HowItWorks />
      <FaqSection />
      <CtaBand />
    </>
  );
}
