// All marketing content for the product lives here (kept as plain data, icons referenced by name).

export const stats = [
  { value: 90, suffix: '+', label: 'Screens and workflows', hint: 'From leads to certificates' },
  { value: 12, suffix: '+', label: 'Live reports', hint: 'Revenue, source, due fee and more' },
  { value: 3, suffix: '', label: 'MFA methods', hint: 'Authenticator, email OTP and SMS' },
  { value: 1, suffix: '', label: 'Platform for everything', hint: 'One login, one source of truth' },
];

export const journey = [
  {
    id: 'capture',
    icon: 'Globe',
    title: 'Capture',
    text: 'Leads arrive from your website, forms, WhatsApp, Meta ads, events, campus ambassadors and bulk imports. Duplicates are detected and returning learners are flagged as re-applied.',
    tag: 'Website, WhatsApp, Meta, Events',
  },
  {
    id: 'assign',
    icon: 'Workflow',
    title: 'Assign',
    text: 'Smart round robin picks the right counsellor by team, course and lead source. Managers can move leads between teams or counsellors in one click.',
    tag: 'Round robin, team routing',
  },
  {
    id: 'nurture',
    icon: 'MessageCircle',
    title: 'Nurture',
    text: 'Follow-ups, notes, lead score, hot-warm-cold temperature, WhatsApp campaigns, chatbot qualification and drip emails keep every lead moving.',
    tag: 'Follow-ups, WhatsApp, Email',
  },
  {
    id: 'convert',
    icon: 'Wallet',
    title: 'Convert',
    text: 'Generate payment links with EMI plans, coupons and discounts. Razorpay collects the money, invoices are created automatically and the lead is marked converted.',
    tag: 'Payment links, EMI, Invoices',
  },
  {
    id: 'onboard',
    icon: 'GraduationCap',
    title: 'Onboard',
    text: 'Learners get enrolled into the right cohort, an onboarding profile is drafted, access syncs to your learning platform and the support person is assigned.',
    tag: 'Cohorts, Onboarding, LMS sync',
  },
  {
    id: 'grow',
    icon: 'Award',
    title: 'Retain and grow',
    text: 'Track attendance and progress, flag early drops, collect due fees, issue QR-verified certificates and turn happy learners into referrals.',
    tag: 'Progress, Certificates, Referrals',
  },
];

export const modules = [
  {
    id: 'leads',
    icon: 'Users',
    title: 'Lead Management',
    kicker: 'Capture to conversion',
    tagline: 'Every enquiry captured, assigned and followed up. Nothing slips through.',
    description:
      'A single lead listing with powerful filters, a detailed lead page with full activity timeline, and automation that keeps your counsellors focused on the next best action.',
    mockup: 'pipeline',
    bullets: [
      'Capture from website forms, OTP-verified sign-ups, WhatsApp, Meta ads, events and Excel import',
      'Automatic duplicate check, re-applied lead detection and lead history of previous attempts',
      'Round robin assignment by team, course, auto-assign flag and lead-source rules',
      '14 lead statuses mapped to pipeline stages, with bulk status change',
      'Lead score that rises with every meaningful action, plus Hot, Warm and Cold temperature',
      'Advanced filter builder: combine counsellor, status, source, UTM, notes and cohort conditions',
      'Complete activity timeline: reassignments, status changes, notes and score updates',
    ],
    metrics: [
      { label: 'Lead statuses', value: '14' },
      { label: 'Capture channels', value: '6+' },
    ],
  },
  {
    id: 'followups',
    icon: 'CalendarCheck',
    title: 'Follow-ups and Counsellor Workspace',
    kicker: 'Daily execution',
    tagline: 'A workspace built around what a counsellor must do today.',
    description:
      'Counsellors see their own dashboard, pending and overdue follow-ups, learner due details and notifications. Team leaders see their whole team at a glance.',
    mockup: 'leaddetail',
    bullets: [
      'Follow-up list with Pending, Overdue and Completed counters',
      'Automatic overdue marking, in-app notifications and push notifications',
      'Notes with types, scheduled follow-up time and one-click mark complete',
      'Team leader mapping so leads and reports roll up to the right manager',
      'Counsellor dashboard with pipeline by stage, revenue trend and learner due summary',
      'Enrol a lead into a cohort and generate a payment link without leaving the lead page',
    ],
    metrics: [
      { label: 'Follow-up states', value: '3' },
      { label: 'Roles supported', value: '5+' },
    ],
  },
  {
    id: 'whatsapp',
    icon: 'MessageCircle',
    title: 'WhatsApp Automation',
    kicker: 'WATI integration',
    tagline: 'Turn WhatsApp into a lead engine, a campaign channel and a qualification bot.',
    description:
      'Send approved WATI template campaigns, capture leads from replies and ad clicks, qualify with a chatbot and see exactly which messages produced which enquiries.',
    mockup: 'whatsapp',
    bullets: [
      'Create, send or schedule broadcasts from your CRM audience, event registrations or an uploaded sheet',
      'Template mapping ties every WATI template to a course and team automatically',
      'Source mapping connects Meta ad IDs to a team, course and brochure',
      'Inbound messages create or re-apply leads, with keyword based course detection',
      'Chatbot qualification fills experience level, career goal and callback time, then schedules the follow-up',
      'Campaign analytics: delivered, read, replied, failed, plus CRM outcomes per recipient',
      'Native auto-retry and a durable webhook pipeline that recovers stuck events by itself',
    ],
    metrics: [
      { label: 'Campaign views', value: 'Live' },
      { label: 'Webhook recovery', value: 'Auto' },
    ],
  },
  {
    id: 'cohorts',
    icon: 'GraduationCap',
    title: 'Cohort and Batch Management',
    kicker: 'Programs that run themselves',
    tagline: 'Plan batches, track every learner and spot early drop-offs before they happen.',
    description:
      'Define cohorts with fees, timings, mentors and validity. Then follow attendance, progress and fee status for every enrolled learner.',
    mockup: 'cohort',
    bullets: [
      'Cohort setup: team, course, schedule, validity, seats, mentors and support person',
      'Fee structure with actual price, sale price, token amount, discounts and default EMI count',
      'Separate certificate types and pricing, including TIH partner certificates',
      'Demo classes with attendance marking and learner notes',
      'Manage Learners: status, comments, activity timeline, migrate in and out, and revert',
      'Progress dashboards and early-drop lists for capstone, mock interview, LMP and certificate stages',
      'Community links (WhatsApp, Discord) and Graphy sync built in',
    ],
    metrics: [
      { label: 'Learner statuses', value: '7' },
      { label: 'Batch types', value: 'All' },
    ],
  },
  {
    id: 'payments',
    icon: 'Wallet',
    title: 'Payments, EMI and Invoicing',
    kicker: 'Money in, cleanly',
    tagline: 'From payment link to GST invoice with every instalment accounted for.',
    description:
      'Build a payment plan in seconds, share a secure link, and let Razorpay do the rest. Every rupee is tagged as revenue or recovery.',
    mockup: 'payment',
    bullets: [
      'Payment links with full payment or EMI, coupon codes, offer and additional discounts',
      'Razorpay orders, signature verification and background refresh of attempted payments',
      'Direct payment links for one-off collections, with a hosted payer flow',
      'GST, international and regular invoices as PDFs, plus manual invoice creation',
      'Refunds with mode and comment, cancelled invoices and editable payment modes',
      'Cash ledger and transaction list with filters, export and status badges',
      'Due fee report with counsellor-wise summary and learner level details',
    ],
    metrics: [
      { label: 'Amount types', value: 'Revenue + Recovery' },
      { label: 'Invoice types', value: '3' },
    ],
  },
  {
    id: 'onboarding',
    icon: 'BadgeCheck',
    title: 'Onboarding and Certificates',
    kicker: 'From payment to proof',
    tagline: 'Collect learner details once and issue certificates that anyone can verify.',
    description:
      'Application forms, onboarding profiles and certificate generation are part of the same record, so nothing is typed twice.',
    mockup: 'certificate',
    bullets: [
      'Course-wise application forms with questions, sub-questions, review and approve or reject',
      'Onboarding profiles auto-drafted on conversion, editable by admins and learners',
      'Certificates and intern certificates generated as print-ready PDFs',
      'QR verification so employers can confirm a certificate instantly',
      'Email the certificate to the learner straight from the CRM',
      'Learner library, purchase history and email history on the learner profile',
    ],
    metrics: [
      { label: 'Certificate types', value: '2+' },
      { label: 'Verification', value: 'QR' },
    ],
  },
  {
    id: 'marketing',
    icon: 'Megaphone',
    title: 'Marketing and Attribution',
    kicker: 'Know what works',
    tagline: 'Trace every lead and every rupee back to the campaign that created it.',
    description:
      'UTM management, Meta Ads sync and source reports connect your ad spend to enrolments, so you can double down on what converts.',
    mockup: 'reports',
    bullets: [
      'UTM source, medium and campaign masters, with auto-creation from incoming traffic',
      'Meta Ads campaigns, ad sets and ads synced into the CRM with landing page links',
      'Paid Ads report: funnel, campaign breakdown, source ID breakdown and conversion exceptions',
      'Source ID report that ties Meta and WATI attribution to leads, conversion and revenue',
      'YouTube report with lead summary by channel, video and campaign',
      'Campus ambassadors, referrals and event registrations with attendance tracking',
    ],
    metrics: [
      { label: 'Attribution levels', value: '9 UTM fields' },
      { label: 'Ad platforms', value: 'Meta' },
    ],
  },
  {
    id: 'reports',
    icon: 'ChartNoAxesCombined',
    title: 'Reports and Analytics',
    kicker: 'Decisions, not guesses',
    tagline: 'Dashboards and reports that answer the questions leadership actually asks.',
    description:
      'Role-aware dashboards, comparison ranges, projections and one-click exports give every team the numbers they need.',
    mockup: 'dashboard',
    bullets: [
      'Admin and counsellor dashboards with leads trend, pipeline, revenue and cohort reports',
      'Revenue report with period presets, compare ranges and projection against target',
      'Lead reports by source, course, counsellor and status, with time-bucketed trends',
      'Counsellor leaderboard with monthly targets and competition ranking',
      'Incentive plans, slabs and incentive reports calculated from real transactions',
      'Email delivery reports: sent, opened, failed, queued and unsubscribed',
    ],
    metrics: [
      { label: 'Report types', value: '12+' },
      { label: 'Exports', value: 'CSV and Excel' },
    ],
  },
  {
    id: 'email',
    icon: 'Mail',
    title: 'Email and Notifications',
    kicker: 'The right message, on time',
    tagline: 'Automated emails and notifications that run in the background.',
    description:
      'Lead emails go out on a schedule you define, learner emails are queued and tracked, and your team stays informed through in-app and push notifications.',
    mockup: 'email',
    bullets: [
      'Lead email templates scheduled by days after registration, per team and course',
      'Bulk email to learners with templates, queue status and per-recipient history',
      'Amazon SES tracking for delivery, opens, clicks and bounces',
      'One-click unsubscribe handling that is respected everywhere',
      'Notification centre with unread count, mark read and push notifications',
      'Notification rules you can switch on or off per event',
    ],
    metrics: [
      { label: 'Tracking', value: 'Open + Click' },
      { label: 'Channels', value: 'Email, Push, In-app' },
    ],
  },
  {
    id: 'security',
    icon: 'ShieldCheck',
    title: 'Roles, Teams and Security',
    kicker: 'Control without friction',
    tagline: 'Give every person exactly the access they need, and see everything they do.',
    description:
      'Granular permissions, team scoping and a full audit trail, with multi-factor sign-in and one active session per user.',
    mockup: 'security',
    bullets: [
      'Roles with module and action level permissions, plus Super Admin only areas',
      'Team and course scoping so counsellors only see their own leads and learners',
      'Multi-factor authentication through an authenticator app, email OTP or SMS',
      'Single active session per user, bound to the device that signed in',
      '90-day password policy and instant logout when a password changes',
      'Audit logs for exports, logins, permission changes and deletions, with alert emails',
      'Off-hours and Sunday login alerts for administrators',
    ],
    metrics: [
      { label: 'MFA methods', value: '3' },
      { label: 'Audit trail', value: 'Always on' },
    ],
  },
];

export const roles = [
  {
    id: 'admin',
    icon: 'Building2',
    title: 'Business owners and admins',
    text: 'See revenue, conversion and counsellor performance across every team and centre, and control who can do what.',
    points: ['Admin dashboard with revenue and pipeline', 'Roles, permissions and team management', 'Security audit logs and alerts'],
  },
  {
    id: 'counsellor',
    icon: 'Headset',
    title: 'Counsellors',
    text: 'A focused workspace with only your leads, your follow-ups and your learners, so you know exactly what to do next.',
    points: ['Personal dashboard and follow-up queue', 'WhatsApp, notes and payment links in one place', 'Targets, leaderboard and incentives'],
  },
  {
    id: 'lead',
    icon: 'UsersRound',
    title: 'Team leaders and managers',
    text: 'Coach your team with live numbers. Reassign leads, review notes and track every counsellor against their target.',
    points: ['Team scoped lists and reports', 'Move leads across teams and counsellors', 'Due fee and conversion visibility'],
  },
  {
    id: 'ops',
    icon: 'ClipboardCheck',
    title: 'Operations and support',
    text: 'Keep every cohort healthy. Mark attendance, review onboarding, handle certificates and keep learners on track.',
    points: ['Cohort, attendance and progress views', 'Onboarding profiles and application reviews', 'Certificates, migration and status changes'],
  },
  {
    id: 'finance',
    icon: 'Banknote',
    title: 'Finance and accounts',
    text: 'Reconcile every payment with clean transactions, invoices, refunds and a cash ledger you can trust.',
    points: ['Transactions, invoices and refunds', 'Cash ledger and payment mode edits', 'Revenue and due fee reports'],
  },
];

export const integrations = [
  { name: 'Razorpay', icon: 'CreditCard', text: 'Collect cards, UPI, netbanking and EMI with verified signatures.' },
  { name: 'WATI WhatsApp', icon: 'MessageCircle', text: 'Template campaigns, chatbot and inbound lead capture.' },
  { name: 'Meta Ads', icon: 'Megaphone', text: 'Sync campaigns, ad sets and ads, and attribute leads to ad IDs.' },
  { name: 'Amazon SES', icon: 'Mail', text: 'Reliable email delivery with open, click and bounce tracking.' },
  { name: 'Amazon S3', icon: 'Cloud', text: 'Secure storage for documents, photos, resumes and brochures.' },
  { name: 'Firebase', icon: 'Bell', text: 'Push notifications to your team in real time.' },
  { name: 'Graphy and LMS', icon: 'BookOpen', text: 'Enrol learners and sync status with your learning platforms.' },
  { name: 'Your website', icon: 'Globe', text: 'Lead forms, OTP verification, cohort info and payment pages.' },
];

export const bento = [
  { id: 'score', icon: 'Flame', title: 'Lead score and temperature', text: 'Every action adds points. Hot, warm and cold tags tell counsellors who to call first.', size: 'md' },
  { id: 'rr', icon: 'Workflow', title: 'Smart round robin', text: 'Fair, rule-based assignment by team, course and lead source.', size: 'sm' },
  { id: 'emi', icon: 'Percent', title: 'EMI and coupons', text: 'Flexible instalments with coupon expiry handled automatically.', size: 'sm' },
  { id: 'wa', icon: 'MessageCircle', title: 'WhatsApp, end to end', text: 'Campaigns, chatbot, lead capture and analytics in one workflow.', size: 'lg' },
  { id: 'qr', icon: 'QrCode', title: 'QR certificates', text: 'Verifiable in seconds by anyone with a phone.', size: 'sm' },
  { id: 'audit', icon: 'ScrollText', title: 'Audit trail', text: 'Know who exported, changed or deleted what, and when.', size: 'sm' },
  { id: 'targets', icon: 'Trophy', title: 'Targets and leaderboard', text: 'Monthly targets, live rankings and incentive slabs that motivate.', size: 'md' },
];

export const capabilityGroups = [
  {
    id: 'leads',
    title: 'Leads and sales',
    items: [
      'Manual lead creation with course, team and source',
      'Website lead capture with OTP verification',
      'Excel and CSV bulk lead import',
      'Duplicate detection and re-applied lead handling',
      'Round robin auto assignment with source restrictions',
      'Lead status, stage and temperature management',
      'Lead score with activity log',
      'Follow-ups with overdue tracking',
      'Move leads across teams and counsellors',
      'Lead history of previous attempts',
      'Advanced filter builder with saved criteria',
      'Soft delete with audit entry',
    ],
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp and communication',
    items: [
      'WATI template campaigns, send now or schedule',
      'Audience from leads, events or uploaded sheet',
      'Template and ad source mapping',
      'Inbound lead capture and re-apply notes',
      'Chatbot journey and qualification report',
      'Brochure delivery after qualification',
      'Campaign delivery analytics and recipient timeline',
      'Native auto-retry for undelivered messages',
      'Bulk email with templates and queue',
      'Lead drip emails by days after registration',
      'SES open, click and bounce tracking',
      'In-app and push notifications',
    ],
  },
  {
    id: 'cohorts',
    title: 'Cohorts and learners',
    items: [
      'Cohort creation with fees, validity and mentors',
      'Seat count, weekday, sold-out and web visibility flags',
      'Demo classes and attendance',
      'Learner status management and activity timeline',
      'Migrate learners between cohorts, with revert',
      'Progress and early-drop dashboards',
      'Capstone, mock interview and LMP tracking',
      'Application forms and review workflow',
      'Onboarding profiles with admin edit',
      'Certificates and intern certificates with QR',
      'Graphy, LMS and website enrolment sync',
      'Learner library and purchase history',
    ],
  },
  {
    id: 'payments',
    title: 'Payments and finance',
    items: [
      'Payment links with EMI plans and coupons',
      'Offer discount and additional discount',
      'Razorpay checkout, verification and refresh',
      'Direct payment links and payer pages',
      'GST, international and standard invoices',
      'Refunds with mode and comments',
      'Cash ledger',
      'Transaction filters, export and detail view',
      'Due fee report by counsellor and learner',
      'Revenue and recovery tagging',
      'Cohort fee summary widgets',
      'Automatic access restriction rules for overdue fees',
    ],
  },
  {
    id: 'insights',
    title: 'Insights and growth',
    items: [
      'Admin and counsellor dashboards',
      'Revenue report with compare and projection',
      'Source, course, counsellor and status lead reports',
      'Source ID and paid ads attribution reports',
      'Counsellor leaderboard and targets',
      'Incentive plans, slabs and reports',
      'Meta Ads campaign, ad set and ad views',
      'UTM source, medium and campaign management',
      'YouTube lead summary',
      'Events and registrations with attendance',
      'Referral and campus ambassador programs',
      'Email delivery reports',
    ],
  },
  {
    id: 'security',
    title: 'Administration and security',
    items: [
      'Users: admins, counsellors, mentors, learners and teams',
      'Roles and granular permissions',
      'Course, category, lead source and TIH masters',
      'Notification rules per event',
      'Multi-factor authentication with three methods',
      'Single device session and password policy',
      'Security audit logs and last login logs',
      'Alert emails for exports, logins and permission changes',
      'Off-hours login detection',
      'Table preferences saved per user',
      'Light and dark themes',
      'Process safety so background errors never take the app down',
    ],
  },
];

export const faqs = [
  {
    q: 'Who is WsCube CRM built for?',
    a: 'Education companies, training institutes and any admissions-led business that sells programs to learners. It handles the entire journey from first enquiry to certificate, including counselling teams across multiple centres.',
  },
  {
    q: 'Can it handle multiple teams, centres and courses?',
    a: 'Yes. Teams, categories and courses are first-class. Counsellors and managers only see leads, learners and reports for the teams and courses they are assigned, while admins see everything.',
  },
  {
    q: 'How do payments and EMI work?',
    a: 'Counsellors generate a payment link with a full-payment or EMI plan, optional coupons and discounts. Learners pay through Razorpay, instalments are tracked, invoices are generated, and every transaction is tagged as revenue or recovery.',
  },
  {
    q: 'Do you support WhatsApp marketing?',
    a: 'Yes, through WATI. You can run template campaigns, capture leads from inbound messages and ad clicks, qualify them with a chatbot, and see delivery and CRM outcomes for every campaign.',
  },
  {
    q: 'How secure is my data?',
    a: 'Every account supports multi-factor authentication, sessions are bound to one device, passwords expire on a policy, and a detailed audit log records exports, logins, permission changes and deletions with optional email alerts.',
  },
  {
    q: 'Can we connect our own website and learning platform?',
    a: 'Yes. Lead forms, OTP verification, cohort information, payment pages and enrolment sync are exposed through secured APIs, and LMS and Graphy syncs are built in.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most teams start with their teams, courses and lead sources, import existing leads, and go live within days. Book a demo and we will map your workflow with you.',
  },
];

export const values = [
  {
    icon: 'Eye',
    title: 'Clarity over clutter',
    text: 'Every screen answers one question well. Dense data is welcome, noise is not.',
  },
  {
    icon: 'Zap',
    title: 'Speed for busy teams',
    text: 'Counsellors make dozens of decisions an hour. We remove clicks until the shortest path is obvious.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Trust by default',
    text: 'Permissions, audit trails and multi-factor sign-in are part of the foundation, not an add-on.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Built with operators',
    text: 'Features come from real admissions floors, so they fit how people actually work.',
  },
  {
    icon: 'Lightbulb',
    title: 'Automate the routine',
    text: 'Round robin, reminders, retries and syncs run on their own so people can focus on conversations.',
  },
  {
    icon: 'Scale',
    title: 'Measure what matters',
    text: 'Attribution from ad click to certificate, so you grow on evidence rather than guesses.',
  },
];

export const timeline = [
  {
    year: 'The problem',
    title: 'Spreadsheets do not scale',
    text: 'Admissions teams juggled leads in sheets, payments in gateways and learners in portals. Nothing talked to anything else.',
  },
  {
    year: 'The idea',
    title: 'One record per learner',
    text: 'We designed a single system where a lead becomes a learner, a payment, a cohort seat and a certificate without re-entry.',
  },
  {
    year: 'The build',
    title: 'Automation first',
    text: 'Round robin, follow-up engines, WhatsApp pipelines, EMI logic and attribution were built into the core.',
  },
  {
    year: 'Today',
    title: 'A complete revenue platform',
    text: 'A single platform covering counselling, cohorts, payments, reports and security for multi-centre education businesses.',
  },
];
