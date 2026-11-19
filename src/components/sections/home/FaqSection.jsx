'use client';

import Link from 'next/link';
import { ArrowRight, MessageSquareText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion } from '@/components/ui/accordion';
import { Reveal } from '@/components/motion/Reveal';
import { Section, SectionHeading } from '@/components/sections/SectionHeading';
import { faqs } from '@/data/product';

export function FaqSection({ className }) {
  return (
    <Section id="faq" className={className}>
      <div className="grid gap-14 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions, {answered}"
            description="Everything teams usually ask before they start. Cannot find yours? Talk to us."
          />
          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="dark" className="group">
              <Link href="/book-demo">
                Book a Demo <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">
                <MessageSquareText /> Ask a question
              </Link>
            </Button>
          </Reveal>
        </div>
        <Reveal direction="left" delay={0.1}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </Section>
  );
}
