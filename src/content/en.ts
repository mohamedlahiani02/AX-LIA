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
  nav: { demo: 'Request a demo', skip: 'Skip to content', language: 'Language', back: 'Back to home' },
  hero: {
    pre: 'Run',
    words: ['your courses', 'your coworking', 'your cash register', 'your payments', 'your teams'],
    post: 'without the headache.',
    sub: 'One platform to run your whole establishment. You switch on what you need, the rest follows.',
    peek: 'See what it looks like',
  },
  marquee: ['Training', 'Coworking', 'Cash register', 'Website', 'Automations', 'Chatbot', 'Notifications', 'Accounting', 'And more'],
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
  cta: { title: 'Curious?', sub: 'Thirty minutes, on your real cases. We show you, you decide.' },
  demo: {
    fields: { name: 'Name', establishment: 'Establishment', email: 'Email', phone: 'Phone', message: 'Message or question (optional)' },
    submit: 'Request a demo',
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
