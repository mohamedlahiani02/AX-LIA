import type { Brick, LegalKey, LegalPage } from '@/lib/site';
import type { Dict } from './fr';

const contactNote = 'A question about this page? Write to us through the demo form.';

const bricks: Brick[] = [
  { t: 'Training', d: 'Enrol, collect, take attendance, pay trainers. No spreadsheet.', tone: 'indigo' },
  { t: 'Coworking', d: 'Your floor, live. Your clients book on their own.', tone: 'ambre' },
  { t: 'Smart notifications', d: 'The system flags what matters, by priority, with recommendations.', tone: 'ciel' },
  { t: 'Website', d: 'A site that talks to your back office, in two languages.', tone: 'blanc' },
  { t: 'Automations', d: 'Reminders, follow-ups, confirmations. On WhatsApp, Telegram or your own tools.', tone: 'ambre' },
  { t: 'Built-in chatbot', d: 'Ask it how to do things in the platform, or for info on a group.', tone: 'indigo' },
  { t: 'Cash register and accounting', d: 'Cash handling and closing, for training, coworking or the rest. Every dinar tracked.', tone: 'blanc' },
  { t: 'What next?', d: 'We have more ideas. You probably do too.', tone: 'ciel' },
];

const legalPages: Record<LegalKey, LegalPage> = {
  legal: {
    title: 'Legal notice',
    desc: 'Legal notice of the AXÉLIA website.',
    blocks: [
      { t: 'Publisher', body: ['This website is published by AXÉLIA.', contactNote] },
      { t: 'Intellectual property', body: ['The AXÉLIA brand, the logo, the texts and the interface captures on this website may not be reproduced without written consent.'] },
    ],
  },
  privacy: {
    title: 'Privacy',
    desc: 'Privacy policy of the AXÉLIA website.',
    blocks: [
      { t: 'Data collected', body: ['The demo form collects four pieces of information: name, establishment, email, phone. They are used to contact you, and nothing else.'] },
      { t: 'Your rights', body: ['You may request access to your data, its correction or its deletion.', contactNote] },
    ],
  },
  terms: {
    title: 'Terms of use',
    desc: 'Terms of use of the AXÉLIA website.',
    blocks: [
      { t: 'Purpose', body: ['This website presents the AXÉLIA platform. The information published has no contractual value: only the signed quotation binds the parties.'] },
      { t: 'Use', body: ['You agree to use this website and its form in good faith.', contactNote] },
    ],
  },
};

export const en: Dict = {
  signature: 'AXÉLIA — Au cœur de votre organisation.',
  meta: {
    title: 'AXÉLIA — All your activities, one system',
    desc: 'Training, coworking, cash register, automations, accounting: AXÉLIA runs your whole establishment from one place.',
  },
  nav: { demo: 'Book my demo', skip: 'Skip to content', language: 'Language', back: 'Back to home' },
  hero: {
    pre: 'Run',
    words: ['your courses', 'your coworking', 'your cash register', 'your payments', 'your teams'],
    post: 'without the headache.',
    sub: 'One platform to run your whole establishment. You switch on what you need, the rest follows.',
    peek: 'See what it looks like',
    cta: 'Book my free demo',
    reassure: ['30 minutes', 'No commitment', 'Reply within 24 h'],
  },
  marquee: ['Training', 'Coworking', 'Cash register', 'Website', 'Automations', 'Chatbot', 'Notifications', 'Accounting', 'And more'],
  benefits: [
    { t: 'No more forgotten unpaid fees', d: 'Every instalment is tracked, every delay surfaces on its own.' },
    { t: 'A clear cash register every evening', d: 'Payments, closing, variances: everything is traced.' },
    { t: 'Your whole establishment on one screen', d: 'Training, coworking, teams, finances. One view.' },
  ],
  midCta: { title: 'What about your own data?', sub: 'We show you with your real cases, not a generic demo.' },
  reel: {
    title: 'It looks like this.',
    sub: 'Real captures, not mock-ups.',
    tabs: [
      { img: 'dashboard.png', t: 'Overview' },
      { img: 'encaissements.png', t: 'Payments' },
      { img: 'coworking.png', t: 'Spaces' },
      { img: 'presences.png', t: 'Attendance' },
      { img: 'paie.png', t: 'Pay' },
      { img: 'raccourcis.png', t: 'Shortcuts' },
    ],
  },
  universe: {
    title: 'One system. As many bricks as you have activities.',
    sub: 'Hover over a brick for a glimpse. We show you the rest.',
    bricks,
  },
  approach: {
    title: 'No packs. Your platform.',
    sub: 'Every establishment has its own rules. We understand them before we price anything.',
    steps: [
      { t: 'We listen', d: 'A first conversation with management: your activities, your priorities, what costs you time.' },
      { t: 'We come on site', d: 'Our consultants watch the front desk, payments, attendance, scheduling. The field, not theory.' },
      { t: 'We map your rules', d: 'Prices, schedules, pay, approvals, roles: everything is described and validated with you.' },
      { t: 'We come back with your offer', d: 'A tailored proposal: set-up, operation, and only what you actually need.' },
    ],
    cta: 'Talk to a consultant',
  },
  faq: {
    title: 'Questions we get asked',
    items: [
      { q: 'How much does it cost?', a: 'Every establishment is different. After analysing your activity, we send you a clear proposal: set-up, then an annual subscription. No hidden fees.' },
      { q: 'What about my current data?', a: 'We import the agreed data during set-up: students, members, groups, instalments. You do not start from scratch.' },
      { q: 'Will my teams find their way?', a: 'Each team is trained on its own cases, then supported at launch. Everyday tasks take a few clicks.' },
      { q: 'Where is my data hosted?', a: 'AXÉLIA is hosted and maintained by us: backups, security and updates are included. Each establishment has its data isolated.' },
      { q: 'What if I have a very specific need?', a: 'That is our approach: we start from your business rules. If development specific to your establishment is needed, it is quoted separately, transparently.' },
    ],
  },
  cta: {
    title: 'Your free demo',
    sub: 'Thirty minutes, on your real cases. We show you, you decide.',
    points: ['Online or at your place', 'No commitment', 'A reply within 24 h'],
  },
  demo: {
    fields: { name: 'Name', establishment: 'Establishment', email: 'Email', phone: 'Phone', message: 'Message or question (optional)' },
    submit: 'Book my free demo',
    sending: 'Sending',
    required: 'This field is required.',
    invalidEmail: 'This email address is not valid.',
    success: 'Request received. We get back to you within 24 hours.',
    prepare: 'Bring your real cases, we walk through your complete flow.',
    failure: 'The request could not be sent. Try again in a moment.',
    contactLine: 'Or write to us:',
  },
  legalPages,
  notFound: { title: 'This page does not exist.', back: 'Back to home' },
};
