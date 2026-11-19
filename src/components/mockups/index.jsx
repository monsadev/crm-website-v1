'use client';

import { CertificateMockup } from '@/components/mockups/CertificateMockup';
import { CohortMockup } from '@/components/mockups/CohortMockup';
import { DashboardMockup } from '@/components/mockups/DashboardMockup';
import { EmailMockup } from '@/components/mockups/EmailMockup';
import { LeadDetailMockup } from '@/components/mockups/LeadDetailMockup';
import { PaymentMockup } from '@/components/mockups/PaymentMockup';
import { PipelineMockup } from '@/components/mockups/PipelineMockup';
import { ReportsMockup } from '@/components/mockups/ReportsMockup';
import { SecurityMockup } from '@/components/mockups/SecurityMockup';
import { WhatsAppMockup } from '@/components/mockups/WhatsAppMockup';

const map = {
  dashboard: DashboardMockup,
  pipeline: PipelineMockup,
  leaddetail: LeadDetailMockup,
  whatsapp: WhatsAppMockup,
  cohort: CohortMockup,
  payment: PaymentMockup,
  certificate: CertificateMockup,
  reports: ReportsMockup,
  email: EmailMockup,
  security: SecurityMockup,
};

export function Mockup({ name, ...props }) {
  const Cmp = map[name] || DashboardMockup;
  return <Cmp {...props} />;
}

export {
  CertificateMockup,
  CohortMockup,
  DashboardMockup,
  EmailMockup,
  LeadDetailMockup,
  PaymentMockup,
  PipelineMockup,
  ReportsMockup,
  SecurityMockup,
  WhatsAppMockup,
};
