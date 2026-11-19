// Draft legal copy for the product website. Have it reviewed by your legal team before launch.
import { site } from '@/config/site';

export const legalUpdated = '17 November 2026';

export const privacySections = [
  {
    id: 'scope',
    title: 'Who we are and what this covers',
    body: [
      `${site.name} is a customer relationship management platform provided by ${site.parent.name} ("we", "us"). This policy explains how we handle personal information collected through this website and through the ${site.name} service.`,
      'When our customers use the service to manage their own leads and learners, they decide what data is stored and why. For that data the customer is the controller and we act as a processor on their instructions.',
    ],
  },
  {
    id: 'collect',
    title: 'Information we collect',
    body: [
      'We collect only what we need to run the website and the service:',
      [
        'Contact details you submit through our forms, such as name, email, phone number, organisation and role.',
        'Account data for users of the service, such as name, email, role, team and sign-in security settings.',
        'Usage and device data, such as IP address, browser, device type, pages visited and sign-in times, used for security and to improve the product.',
        'Customer content stored in the service by our customers, such as lead, learner, cohort, payment and communication records.',
      ],
    ],
  },
  {
    id: 'use',
    title: 'How we use information',
    body: [
      [
        'To respond to enquiries and arrange product demonstrations.',
        'To provide, maintain, secure and support the service.',
        'To detect and prevent fraud, abuse and unauthorised access, including login alerts and audit logs.',
        'To send service and account messages, and with consent where required, product updates.',
        'To meet legal, tax and accounting obligations.',
      ],
      'We do not sell personal information.',
    ],
  },
  {
    id: 'sharing',
    title: 'Sharing and service providers',
    body: [
      'We share information only with trusted providers that help us run the service, under contracts that require them to protect it. Depending on the features a customer enables, these can include cloud hosting and storage, email delivery, messaging, payment processing and push notification providers.',
      'We may also disclose information when required by law, to protect rights and safety, or as part of a business transfer with appropriate safeguards.',
    ],
  },
  {
    id: 'security',
    title: 'How we protect data',
    body: [
      'Security is built into the platform. Measures include role based access control, team level data scoping, multi-factor authentication, single device sessions, password expiry, encryption in transit, and audit logs for sensitive actions such as exports and permission changes.',
      'No method of transmission or storage is perfectly secure, but we work continuously to protect the information entrusted to us.',
    ],
  },
  {
    id: 'retention',
    title: 'Retention',
    body: [
      'We keep personal information only for as long as it is needed for the purposes above, or as required by law. Customers control the retention of the content they store in the service, and can request deletion when their agreement ends.',
    ],
  },
  {
    id: 'rights',
    title: 'Your choices and rights',
    body: [
      'Subject to applicable law, you can ask to access, correct or delete your personal information, object to or restrict certain processing, and withdraw consent where processing relies on consent. Marketing emails include an unsubscribe link.',
      `If your information is held by one of our customers, please contact that organisation first. We will support them in responding to your request.`,
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    body: [
      'This website uses essential cookies and similar technologies that are needed for it to work, and may use analytics to understand how pages are used. The service uses cookies to keep you signed in securely. You can control cookies through your browser settings.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: ['We may update this policy from time to time. We will post the new version on this page and update the date at the top.'],
  },
  {
    id: 'contact',
    title: 'Contact',
    body: [`For privacy questions or requests, write to ${site.contact.email} or ${site.contact.address}.`],
  },
];

export const termsSections = [
  {
    id: 'acceptance',
    title: 'Acceptance of these terms',
    body: [
      `These terms govern your use of this website and the ${site.name} service provided by ${site.parent.name}. By using the website or the service you agree to them. If you use the service on behalf of an organisation, you confirm that you are authorised to accept these terms for it.`,
    ],
  },
  {
    id: 'service',
    title: 'The service',
    body: [
      `${site.name} is a software platform for managing leads, communication, cohorts, payments, reports and related workflows. Features may vary by plan and may be updated over time. We will not materially reduce the core functionality of a paid plan during its term.`,
    ],
  },
  {
    id: 'accounts',
    title: 'Accounts and security',
    body: [
      [
        'Keep sign-in details confidential and enable multi-factor authentication.',
        'You are responsible for activity under your accounts and for the permissions you grant to your users.',
        'Tell us promptly if you suspect unauthorised access.',
      ],
    ],
  },
  {
    id: 'use',
    title: 'Acceptable use',
    body: [
      'You agree not to misuse the service. In particular you will not:',
      [
        'Send unsolicited or unlawful messages, or use the service in breach of messaging platform policies.',
        'Upload content you do not have the right to use, or that is unlawful or harmful.',
        'Attempt to access other customers’ data, disrupt the service, or probe it for vulnerabilities without written permission.',
        'Resell or reverse engineer the service, except where the law allows.',
      ],
    ],
  },
  {
    id: 'data',
    title: 'Your data',
    body: [
      'You keep all rights to the content you store in the service. You give us permission to host and process it only to provide and support the service, as described in our Privacy Policy. You are responsible for having a lawful basis to collect and use the personal data of your leads and learners.',
    ],
  },
  {
    id: 'third-party',
    title: 'Third party services',
    body: [
      'The service can connect to third party services such as payment gateways, messaging platforms, advertising platforms and email providers. Your use of those services is governed by their own terms, and we are not responsible for them.',
    ],
  },
  {
    id: 'fees',
    title: 'Fees and payment',
    body: [
      'Paid plans are billed as set out in your order or agreement. Fees are exclusive of applicable taxes unless stated otherwise. We may suspend access for undisputed amounts that remain unpaid after notice.',
    ],
  },
  {
    id: 'ip',
    title: 'Intellectual property',
    body: [
      `The service, this website and all related software, design and content are owned by ${site.parent.name} or its licensors. These terms do not grant you any rights other than to use the service as permitted here.`,
    ],
  },
  {
    id: 'liability',
    title: 'Warranties and liability',
    body: [
      'We provide the service with reasonable skill and care. Apart from that, and to the extent the law allows, the service is provided as is. Neither party is liable for indirect or consequential losses, and our total liability is limited to the fees paid for the service in the twelve months before the claim.',
    ],
  },
  {
    id: 'termination',
    title: 'Suspension and termination',
    body: [
      'Either party may end the agreement as set out in the order. We may suspend access if these terms are seriously breached or to protect the service and other customers. After termination you can request an export of your data within a reasonable period.',
    ],
  },
  {
    id: 'law',
    title: 'Governing law',
    body: ['These terms are governed by the laws of India, and the courts of Jodhpur, Rajasthan have jurisdiction, unless your agreement says otherwise.'],
  },
  {
    id: 'contact',
    title: 'Contact',
    body: [`Questions about these terms can be sent to ${site.contact.email}.`],
  },
];
