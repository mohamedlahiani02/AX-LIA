import type { Item, ModuleInfo, Page, PageKey } from '@/lib/site';
import type { Dict } from './fr';

const modules: ModuleInfo[] = [
  {
    key: 'formation',
    name: 'AXÉLIA Formation',
    short: 'Training',
    tag: 'Enrolments, attendance, trainer pay, cash register.',
    blocks: [
      'Guided enrolments',
      'Payment schedules',
      'Allocated payments',
      'Immutable receipts',
      'Locked attendance',
      'Room conflicts',
      'Pay rules per trainer',
      'Cash register and 7 reports',
    ],
  },
  {
    key: 'coworking',
    name: 'AXÉLIA Coworking',
    short: 'Coworking',
    tag: 'Live floor plan, subscriptions, client portal.',
    blocks: [
      'Live floor plan',
      'Floor drawing without IT staff',
      '4-step walk-in desk',
      'Subscriptions and hour packs',
      'Mail handling',
      'Statistics',
      'Client portal and arrival QR code',
    ],
  },
  {
    key: 'website',
    name: 'AXÉLIA Site Web',
    short: 'Website',
    tag: 'Bilingual pages, requests received in the back office.',
    blocks: [
      'Bilingual pages',
      '3 themes',
      'Scheduled publishing',
      'Per-page SEO',
      'Visit and quote requests in the back office',
    ],
  },
];

const deployment: Item[] = [
  { t: 'Scoping', d: 'We walk through your real cases and set the scope: modules, rules, roles.' },
  { t: 'Development', d: 'The adjustments agreed during scoping are built and shown.' },
  { t: 'Configuration', d: 'Prices, schedules, pay rules, rooms and floor plans are entered with your teams.' },
  { t: 'Acceptance', d: 'You check every flow on your own data before anything opens.' },
  { t: 'Go-live', d: 'Teams are trained on their own cases. The establishment switches on an agreed date.' },
];

const loop: Item[] = [
  { t: 'Enrolment', d: 'A guided flow: student, group, plan.' },
  { t: 'Schedule', d: 'Deposit and instalments are set at enrolment.' },
  { t: 'Payment', d: 'Each payment is allocated to its instalment. The receipt is immutable.' },
  { t: 'Attendance', d: 'The register is taken on screen. A validated session is locked.' },
  { t: 'Pay', d: 'Sessions held feed trainer pay, following each trainer’s rule.' },
  { t: 'Closing', d: 'The register closes in the evening. 7 reports explain every variance.' },
];

const guarantees: Item[] = [
  { t: 'Read-only journal', d: 'Every change is recorded: value before, value after, reason. Nobody can rewrite the journal.' },
  { t: 'Integrity fingerprint', d: 'Every entry carries a fingerprint. An alteration shows.' },
  { t: 'Cancellation receipts', d: 'A receipt is never deleted. It is cancelled by a reversal receipt, visible in the register.' },
  { t: 'Precise roles', d: 'Each role sees what concerns it. Sensitive items are hidden from the others.' },
];

const pilot =
  'To be measured during the pilot: time saved at payment, fewer unpaid instalments and fewer cash register errors.';

const moduleLinks: Item[] = [
  { t: 'AXÉLIA Formation', d: modules[0].tag, to: 'formation' },
  { t: 'AXÉLIA Coworking', d: modules[1].tag, to: 'coworking' },
  { t: 'AXÉLIA Site Web', d: modules[2].tag, to: 'website' },
];

const legalNote = 'For any question about this page, use the Contact page.';

const pages: Record<PageKey, Page> = {
  home: {
    title: 'AXÉLIA — All your activities, one system',
    desc: 'AXÉLIA is the operational management platform that brings together training, coworking, commerce and steering. Modules activated as you need them.',
    eyebrow: 'Operational management platform',
    h1: 'All your activities, one system.',
    lead: 'Training, coworking and website: simple modules, activated as you need them — without touching the code.',
    sections: [],
  },
  product: {
    title: 'Product — one system, several modules',
    desc: 'A central engine — payments, roles, audit journal, dashboard — and modules that activate around it: Formation, Coworking, Site Web.',
    eyebrow: 'Product',
    h1: 'One central system. Modules that activate around it.',
    lead: 'AXÉLIA Système carries payments, roles, the audit journal and the dashboard. Each module plugs into it and shares the same data.',
    sections: [
      { kind: 'diagram', label: 'Architecture', title: 'One system, not three products.' },
      { kind: 'links', label: 'Modules', title: 'Activate what you use.', items: moduleLinks },
      { kind: 'steps', label: 'Flow', title: 'From enrolment to closing, without a break.', items: loop },
      {
        kind: 'note',
        title: 'AXÉLIA Commerce',
        body: ['Announced, not yet on sale. It will join the same system, with the same payments and the same journal.'],
      },
    ],
  },
  formation: {
    title: 'AXÉLIA Formation — enrolments, attendance, pay, cash register',
    desc: 'Guided enrolments, payment schedules, allocated payments, immutable receipts, locked attendance, room conflicts, pay per trainer, cash register and 7 reports.',
    eyebrow: 'Formation module',
    h1: 'From enrolment to pay, every step is traced.',
    lead: '8 blocks cover the full cycle of a training centre: enrol, collect, take attendance, schedule, pay, close.',
    sections: [
      {
        kind: 'cards',
        label: '8 blocks',
        title: 'What the module covers.',
        items: [
          { t: 'Guided enrolments', d: 'Student, group, plan: enrolment follows a flow, with no field left out.' },
          { t: 'Payment schedules', d: 'Deposit and instalments are set at enrolment. Late payments surface on their own.' },
          { t: 'Allocated payments', d: 'Each payment is assigned to its instalment. The balance is exact to the millime.' },
          { t: 'Immutable receipts', d: 'An issued receipt cannot be edited. A mistake is corrected by a cancellation receipt.' },
          { t: 'Locked attendance', d: 'The register is taken on screen. A validated session cannot be changed without a trace.' },
          { t: 'Room conflicts', d: 'Two groups in the same room at the same time: the conflict is flagged on entry.' },
          { t: 'Pay rules per trainer', d: 'Per hour, flat rate, per student. Pay is justified session by session.' },
          { t: 'Cash register and 7 reports', d: 'Opening float in the morning, closing in the evening. 7 reports explain every variance.' },
        ],
      },
      { kind: 'capture', img: 'encaissements.png', alt: 'Payments screen in AXÉLIA Formation', title: 'Payments: each one allocated to its instalment.' },
      { kind: 'capture', img: 'presences.png', alt: 'Attendance screen in AXÉLIA Formation', title: 'Attendance: the register on screen, session by session.' },
      { kind: 'capture', img: 'paie.png', alt: 'Trainer pay screen in AXÉLIA Formation', title: 'Pay: a justified amount for each trainer.' },
      { kind: 'note', body: [pilot] },
    ],
  },
  coworking: {
    title: 'AXÉLIA Coworking — live floor plan, subscriptions, client portal',
    desc: 'Coworking management software with an interactive floor plan, floor drawing without IT staff, 4-step walk-in desk, subscriptions and hour packs, mail handling, statistics, client portal.',
    eyebrow: 'Coworking module',
    h1: 'Your space, as it is right now.',
    lead: '7 blocks to run a space: see occupancy live, welcome walk-ins, sell subscriptions, handle mail, measure.',
    sections: [
      {
        kind: 'cards',
        label: '7 blocks',
        title: 'What the module covers.',
        items: [
          { t: 'Live floor plan', d: 'Desks, offices and rooms show their status live: free, booked, occupied.' },
          { t: 'Floor drawing without IT staff', d: 'You draw and edit the plan yourself. Copy, paste, undo: the usual shortcuts work.' },
          { t: '4-step walk-in desk', d: 'A visitor without a booking is seated in 4 steps, payment included.' },
          { t: 'Subscriptions and hour packs', d: 'Recurring subscriptions or prepaid hours, deducted at each visit.' },
          { t: 'Mail handling', d: 'Incoming mail is logged and attached to the registered client.' },
          { t: 'Statistics', d: 'Occupancy rate per space and per period, to adjust offers and prices.' },
          { t: 'Client portal and arrival QR code', d: 'Clients book online on the public plan and check in with a QR code.' },
        ],
      },
      { kind: 'capture', img: 'coworking.png', alt: 'Live floor plan of a space in AXÉLIA Coworking', title: 'The live plan: floor occupancy, desk by desk.' },
      {
        kind: 'note',
        title: 'The public plan',
        body: ['Your visitors view the plan and book before they even call you. They use AXÉLIA before you mention it.'],
      },
    ],
  },
  website: {
    title: 'AXÉLIA Site Web — bilingual pages connected to the back office',
    desc: 'Bilingual pages, 3 themes, scheduled publishing, per-page SEO. Visit and quote requests arrive in the back office.',
    eyebrow: 'Site Web module',
    h1: 'A website connected to your back office.',
    lead: 'Your pages are published in two languages. Visit and quote requests arrive where your teams already work.',
    sections: [
      {
        kind: 'cards',
        label: 'Features',
        title: 'What the module covers.',
        items: [
          { t: 'Bilingual pages', d: 'Every page exists in French and in English, with its own addresses.' },
          { t: '3 themes', d: 'Three ready layouts, in your colours.' },
          { t: 'Scheduled publishing', d: 'A page is prepared today and published on the chosen date.' },
          { t: 'Per-page SEO', d: 'Title, description and address are set page by page.' },
          { t: 'Requests in the back office', d: 'A visit or quote request becomes a record to process, not a lost email.' },
        ],
      },
      { kind: 'note', body: ['The availability shown on the site is that of the live plan. There is nothing to copy over.'] },
    ],
  },
  solutions: {
    title: 'Solutions by type of establishment',
    desc: 'Training centres, coworking spaces, multi-activity centres, private schools: the AXÉLIA modules that fit each case.',
    eyebrow: 'Solutions',
    h1: 'Your establishment, your modules.',
    lead: 'Each type of establishment has its own friction points. Here are the modules that address them.',
    sections: [
      {
        kind: 'links',
        items: [
          { t: 'Training centres', d: 'Unpaid instalments, attendance, rooms, trainer pay.', to: 'solTraining' },
          { t: 'Coworking spaces', d: 'Live occupancy, online bookings, subscriptions.', to: 'solCoworking' },
          { t: 'Multi-activity centres', d: 'Training and coworking under one roof, steered as one.', to: 'solMulti' },
          { t: 'Private schools', d: 'Traced enrolments, schedules and payments.', to: 'solSchools' },
        ],
      },
    ],
  },
  solTraining: {
    title: 'Training centre software in Tunisia — AXÉLIA',
    desc: 'Reduce unpaid instalments, take attendance without paper, avoid room conflicts, justify trainer pay.',
    eyebrow: 'Training centres',
    h1: 'Fewer unpaid instalments. Pay nobody disputes.',
    lead: 'For centres that enrol, collect, schedule and pay trainers every month.',
    sections: [
      {
        kind: 'cards',
        label: 'Findings',
        title: 'What costs time today.',
        items: [
          { t: 'Unpaid instalments', d: 'Instalment tracking lives in a spreadsheet nobody dares to touch.' },
          { t: 'Attendance', d: 'Paper registers are retyped, or lost.' },
          { t: 'Rooms', d: 'Double bookings are discovered on the day.' },
          { t: 'Pay', d: 'At every month end, sessions are counted again by hand.' },
        ],
      },
      { kind: 'links', label: 'Modules', title: 'What addresses it.', items: [moduleLinks[0], moduleLinks[2]] },
      { kind: 'capture', img: 'groupes.png', alt: 'Groups screen in AXÉLIA Formation', title: 'Groups: fill rate, time slots and trainers in one place.' },
      { kind: 'note', body: [pilot] },
    ],
  },
  solCoworking: {
    title: 'Coworking management software — interactive floor plan — AXÉLIA',
    desc: 'Interactive coworking floor plan, online bookings, subscriptions and hour packs, mail handling, occupancy rate.',
    eyebrow: 'Coworking spaces',
    h1: 'A live plan. Bookings that arrive on their own.',
    lead: 'For space managers who want to see occupancy and let clients book online.',
    sections: [
      {
        kind: 'cards',
        label: 'Findings',
        title: 'What costs time today.',
        items: [
          { t: 'Occupancy', d: 'Knowing what is free means walking the floor.' },
          { t: 'Bookings', d: 'Requests arrive by phone, by message, by email.' },
          { t: 'Subscriptions', d: 'Hours used are deducted in a notebook.' },
          { t: 'Mail', d: 'Mail for registered clients is tracked from memory.' },
        ],
      },
      { kind: 'links', label: 'Modules', title: 'What addresses it.', items: [moduleLinks[1], moduleLinks[2]] },
      { kind: 'capture', img: 'coworking.png', alt: 'Live floor plan of a coworking space', title: 'The live plan, as your teams see it.' },
      { kind: 'note', body: ['To be measured during the pilot: occupancy rate per space and share of bookings made online.'] },
    ],
  },
  solMulti: {
    title: 'Multi-activity centres: training and coworking — AXÉLIA',
    desc: 'Training and coworking in the same establishment: one room plan, one cash register, one dashboard.',
    eyebrow: 'Multi-activity centres',
    h1: 'Two activities. Steered as one.',
    lead: 'For directors who run training and coworking under one roof, with the same rooms and the same register.',
    sections: [
      {
        kind: 'cards',
        label: 'Findings',
        title: 'What costs time today.',
        items: [
          { t: 'Two tools', d: 'Each activity has its tool. Neither sees the other.' },
          { t: 'Shared rooms', d: 'A room rented to a client is also a group’s room.' },
          { t: 'Cash register', d: 'Payments from both activities are reconciled by hand.' },
          { t: 'Steering', d: 'The month’s figure is rebuilt from several files.' },
        ],
      },
      { kind: 'links', label: 'Modules', title: 'What addresses it.', items: moduleLinks },
      { kind: 'capture', img: 'dashboard.png', alt: 'AXÉLIA dashboard', title: 'The dashboard: every activity on one screen.' },
      { kind: 'note', body: [pilot] },
    ],
  },
  solSchools: {
    title: 'Private schools — AXÉLIA',
    desc: 'Enrolments, payment schedules, allocated payments and attendance for private schools.',
    eyebrow: 'Private schools',
    h1: 'Tuition fees tracked instalment by instalment.',
    lead: 'The blocks of the Formation module apply to a school: enrol, schedule, collect, take attendance.',
    sections: [
      {
        kind: 'cards',
        label: 'Findings',
        title: 'What costs time today.',
        items: [
          { t: 'Instalments', d: 'Late payments are discovered at the end of term.' },
          { t: 'Receipts', d: 'A receipt corrected by hand proves nothing.' },
          { t: 'Attendance', d: 'Attendance is tracked class by class, on paper.' },
        ],
      },
      { kind: 'links', label: 'Modules', title: 'What addresses it.', items: [moduleLinks[0], moduleLinks[2]] },
      { kind: 'note', body: ['The flow dedicated to schools is being refined with the first pilots. Scoping starts from your real cases.'] },
    ],
  },
  pricing: {
    title: 'Pricing — activate only the modules you use',
    desc: 'Three modules on quotation, one configuration, hosting with maintenance. A centre activates only the modules it uses.',
    eyebrow: 'Pricing',
    h1: 'Activate only the modules you use.',
    lead: 'Three modules, one configuration, hosting with maintenance. Every line appears on the quotation.',
    sections: [],
  },
  method: {
    title: 'A 5-step deployment method',
    desc: 'Scoping, development, configuration, acceptance, go-live: the AXÉLIA deployment, step by step.',
    eyebrow: 'Method',
    h1: 'Five steps, from demonstration to go-live.',
    lead: 'Deployment starts from your real cases and ends when your teams work in the tool.',
    sections: [
      { kind: 'steps', items: deployment },
      {
        kind: 'cards',
        label: 'Before scoping',
        title: 'Three moments to decide.',
        items: [
          { t: 'Guided demonstration', d: 'We walk through the product on your cases.' },
          { t: 'Validation', d: 'You confirm the modules and the scope.' },
          { t: 'Scoping', d: 'The scope becomes a plan, with a quotation.' },
        ],
      },
      { kind: 'note', body: [pilot] },
    ],
  },
  resources: {
    title: 'Resources',
    desc: 'Blog, guides, help center, security and traceability: AXÉLIA resources.',
    eyebrow: 'Resources',
    h1: 'Understand, compare, verify.',
    lead: 'Method articles, one-page guides, in-app help and our traceability guarantees.',
    sections: [
      {
        kind: 'links',
        items: [
          { t: 'Blog', d: 'Finance, operations, coworking, compliance.', to: 'blog' },
          { t: 'Guides', d: 'One-page documents, to keep after a demonstration.', to: 'guides' },
          { t: 'Help center', d: 'The shortcuts and gestures of the application.', to: 'help' },
          { t: 'Security and traceability', d: 'Four guarantees, stated plainly.', to: 'security' },
        ],
      },
    ],
  },
  blog: {
    title: 'Blog — methods for training centres and coworking spaces',
    desc: 'Reduce unpaid instalments, take attendance without paper, calculate an occupancy rate, understand the immutable receipt.',
    eyebrow: 'Blog',
    h1: 'Methods, not opinions.',
    lead: 'Four themes, covered with figures and cases. The articles below are in preparation.',
    sections: [
      {
        kind: 'cards',
        label: 'Finance',
        items: [
          { t: 'How to reduce unpaid instalments in a training centre', d: 'Coming soon.' },
          { t: 'Schedules and deposits: a tracking method', d: 'Coming soon.' },
        ],
      },
      {
        kind: 'cards',
        label: 'Operations',
        items: [
          { t: 'Taking attendance without a paper register', d: 'Coming soon.' },
          { t: 'Detecting room conflicts before they happen', d: 'Coming soon.' },
        ],
      },
      {
        kind: 'cards',
        label: 'Coworking',
        items: [
          { t: 'Occupancy rate: calculating it, raising it', d: 'Coming soon.' },
          { t: 'Subscriptions or hour packs', d: 'Coming soon.' },
        ],
      },
      {
        kind: 'cards',
        label: 'Compliance',
        items: [{ t: 'Immutable receipts and reversals: what changes for your register', d: 'Coming soon.' }],
      },
    ],
  },
  guides: {
    title: 'Guides',
    desc: 'One-page guides on payments, attendance, the coworking floor plan and closing the register.',
    eyebrow: 'Guides',
    h1: 'One page per topic.',
    lead: 'Each guide fits on one page, with amounts in TND. They are handed over after a demonstration.',
    sections: [
      {
        kind: 'cards',
        items: [
          { t: 'Tracking a payment schedule', d: 'Handed over at the demonstration.' },
          { t: 'Closing the cash register', d: 'Handed over at the demonstration.' },
          { t: 'Drawing your floor plan', d: 'Handed over at the demonstration.' },
        ],
      },
    ],
  },
  help: {
    title: 'Help center — shortcuts and gestures',
    desc: 'The shortcuts of the AXÉLIA application: copy, paste, undo, right-click.',
    eyebrow: 'Help center',
    h1: 'The same shortcuts as in the application.',
    lead: 'The “Aide” button in the application lists every shortcut. Here they are.',
    sections: [
      {
        kind: 'cards',
        label: 'Shortcuts',
        items: [
          { t: 'Ctrl + C', d: 'Copy the selected item.' },
          { t: 'Ctrl + V', d: 'Paste the copied item.' },
          { t: 'Ctrl + Z', d: 'Undo the last action.' },
          { t: 'Right-click', d: 'Open the menu of actions available on the item.' },
        ],
      },
      { kind: 'note', body: ['A question about a specific flow: the demonstration runs on your real cases.'] },
    ],
  },
  security: {
    title: 'Security and traceability — audit journal, immutable receipts, roles',
    desc: 'Read-only journal, integrity fingerprint, cancellation receipts, roles with hidden items: the four AXÉLIA guarantees.',
    eyebrow: 'Security and traceability',
    h1: 'What is written stays written.',
    lead: 'Four guarantees, for management and for accounting.',
    sections: [{ kind: 'cards', items: guarantees }],
  },
  about: {
    title: 'About AXÉLIA',
    desc: 'AXÉLIA is the operational management platform that brings together training, coworking, commerce and steering.',
    eyebrow: 'About',
    h1: 'At the heart of your organisation.',
    lead: 'AXÉLIA is the operational management platform that brings together training, coworking, commerce and steering.',
    sections: [
      {
        kind: 'cards',
        items: [
          { t: 'Mission', d: 'Give every establishment a single system for all its activities.' },
          { t: 'Vision', d: 'An establishment is steered on facts: what is collected, what is held, what is occupied.' },
          { t: 'Positioning', d: 'A central system, modules activated as needed, without touching the code.' },
        ],
      },
      {
        kind: 'cards',
        label: 'Values',
        items: [
          { t: 'Traceability', d: 'Every entry has an author, a date, a reason.' },
          { t: 'Sobriety', d: 'One main action per screen. Figures instead of adjectives.' },
          { t: 'Proximity', d: 'Configuration is done with your teams, on your cases.' },
        ],
      },
      {
        kind: 'note',
        title: 'The Axis',
        body: ['Two autonomous modules converge. The central point is the heart of the organisation.'],
      },
    ],
  },
  demo: {
    title: 'Request a demo',
    desc: 'A guided demonstration of AXÉLIA, on your real cases. We get back to you within 24 hours.',
    eyebrow: 'Demonstration',
    h1: 'A demonstration on your real cases.',
    lead: 'Pick a slot or leave your details. We walk through your complete flow.',
    sections: [],
  },
  contact: {
    title: 'Contact',
    desc: 'Contact the AXÉLIA team.',
    eyebrow: 'Contact',
    h1: 'Let us talk about your establishment.',
    lead: 'The most direct route is a demonstration on your real cases.',
    sections: [],
  },
  legal: {
    title: 'Legal notice',
    desc: 'Legal notice of the AXÉLIA website.',
    eyebrow: 'Legal information',
    h1: 'Legal notice',
    lead: 'Publisher, hosting and intellectual property.',
    sections: [
      { kind: 'prose', title: 'Publisher', body: ['This website is published by AXÉLIA.', legalNote] },
      { kind: 'prose', title: 'Intellectual property', body: ['The AXÉLIA brand, the logo, the texts and the interface captures on this website may not be reproduced without written consent.'] },
    ],
  },
  privacy: {
    title: 'Privacy',
    desc: 'Privacy policy of the AXÉLIA website.',
    eyebrow: 'Legal information',
    h1: 'Privacy',
    lead: 'What this website collects, and why.',
    sections: [
      { kind: 'prose', title: 'Data collected', body: ['The demo form collects four pieces of information: name, establishment, email, phone. They are used to contact you about your request, and nothing else.'] },
      { kind: 'prose', title: 'Your rights', body: ['You may request access to your data, its correction or its deletion.', legalNote] },
    ],
  },
  terms: {
    title: 'Terms of use',
    desc: 'Terms of use of the AXÉLIA website.',
    eyebrow: 'Legal information',
    h1: 'Terms of use',
    lead: 'The rules for using this website.',
    sections: [
      { kind: 'prose', title: 'Purpose', body: ['This website presents the AXÉLIA platform. The information published has no contractual value: only the signed quotation binds the parties.'] },
      { kind: 'prose', title: 'Use', body: ['You agree to use this website and its forms in good faith.', legalNote] },
    ],
  },
};

export const en: Dict = {
  signature: 'AXÉLIA — Au cœur de votre organisation.',
  nav: {
    product: 'Product',
    solutions: 'Solutions',
    pricing: 'Pricing',
    resources: 'Resources',
    about: 'About',
    demo: 'Request a demo',
    menu: 'Menu',
    main: 'Main navigation',
    skip: 'Skip to content',
    seeProduct: 'See the product',
    more: 'Learn more',
    language: 'Language',
  },
  core: { name: 'AXÉLIA Système', items: 'Payments · Roles · Audit · Dashboard' },
  bridges: ['room plan', 'live availability'],
  diagramAlt: 'AXÉLIA Système at the centre, connected to the Formation, Coworking and Site Web modules.',
  modules,
  deployment,
  pages,
  home: {
    problem: {
      title: 'Running a centre means juggling everything.',
      items: [
        { t: 'Unpaid instalments', d: 'Who owes what, and since when: the answer sits in three files.' },
        { t: 'Attendance', d: 'The register is taken on paper, then typed again.' },
        { t: 'Rooms', d: 'Two groups, one room, the same slot. You find out on the day.' },
        { t: 'Pay', d: 'At every month end, trainer pay is recalculated by hand.' },
      ],
    },
    system: {
      label: 'The system',
      title: 'One tool for the whole establishment.',
      lead: 'A central engine, modules that activate around it. Hover over a module to see what it covers.',
      here: 'You are here',
      count: (n: number) => `${n} blocks`,
    },
    proof: {
      label: 'Real captures',
      title: 'The product, already on screen.',
      items: [
        { img: 'dashboard.png', t: 'Dashboard', d: 'Today’s activity, payments, alerts.' },
        { img: 'encaissements.png', t: 'Payments', d: 'Every payment allocated, every amount to the millime.' },
        { img: 'coworking.png', t: 'Live plan', d: 'The floor, live: free, booked, occupied.' },
      ],
    },
    numbers: [
      { n: '3', t: 'modules, one system' },
      { n: '8', t: 'blocks in Formation' },
      { n: '7', t: 'blocks in Coworking' },
      { n: '7', t: 'cash register reports' },
    ],
    loop: { label: 'Flow', title: 'From enrolment to closing, without a break.', items: loop },
    switch: {
      label: 'Comparison',
      title: 'With or without AXÉLIA.',
      without: 'Without AXÉLIA',
      with: 'With AXÉLIA',
      rows: [
        { t: 'Payments', without: 'Paper receipts, allocation by hand.', with: 'Automatic allocation to the schedule, immutable receipt.' },
        { t: 'Attendance', without: 'Paper registers typed again.', with: 'Register on screen, session locked.' },
        { t: 'Scheduling', without: 'Room conflicts discovered on the day.', with: 'Conflicts flagged on entry.' },
        { t: 'Pay', without: 'Manual calculation, every month end.', with: 'Justified pay, session by session.' },
      ],
    },
    trust: { label: 'Traceability', title: 'What is written stays written.', items: guarantees },
    pricing: { label: 'Pricing', title: 'Three modules. You choose.', link: 'See pricing' },
  },
  pricing: {
    quote: 'On quotation',
    included: 'What is included',
    note: 'A centre activates only the modules it uses.',
    billing: { label: 'Hosting billing', monthly: 'Monthly', annual: 'Annual' },
    extras: {
      setup: { t: 'Configuration', d: 'Prices, pay rules, roles, rooms and floor plans, entered with your teams. Billed once.' },
      hosting: {
        t: 'Hosting and maintenance',
        monthly: 'Hosting, backups and updates. Billed monthly.',
        annual: 'Hosting, backups and updates. Billed annually, in one instalment.',
      },
    },
    format: {
      t: 'Amounts to the millime',
      d: 'On the quotation as in the product, every amount is written with three decimals and aligned figures. Format example:',
    },
    stepsTitle: 'Deployment, in five steps.',
    conditions: {
      title: 'Conditions',
      items: [
        { t: 'Validity', d: 'The validity period appears on each quotation.' },
        { t: 'Payment split', d: 'Payment is split by deployment step. The split appears on the quotation.' },
        { t: 'Scope', d: 'The quotation lists the activated modules and what each includes. Nothing is hidden.' },
      ],
    },
  },
  demo: {
    calendar: 'Pick a slot',
    form: 'Or leave your details',
    fields: { name: 'Name', establishment: 'Establishment', email: 'Email', phone: 'Phone' },
    submit: 'Send the request',
    sending: 'Sending',
    required: 'This field is required.',
    invalidEmail: 'This email address is not valid.',
    success: 'Request received. We get back to you within 24 hours.',
    prepare: 'Prepare your real cases — we walk through your complete flow.',
    failure: 'The request could not be sent. Try again in a moment or write to us.',
    contactLine: 'Or write to us:',
  },
  cta: { title: 'Let us move from demonstration to pilot.', lead: 'A guided demonstration, on your real cases.' },
  articleCta: 'See a demonstration on your real cases.',
  footer: {
    product: 'Product',
    overview: 'Overview',
    solutions: 'Solutions',
    company: 'AXÉLIA',
    resources: 'Resources',
    amounts: 'Amounts in Tunisian dinars (TND).',
  },
  short: {
    solTraining: 'Training centres',
    solCoworking: 'Coworking spaces',
    solMulti: 'Multi-activity centres',
    solSchools: 'Private schools',
    pricing: 'Pricing',
    method: 'Method',
    blog: 'Blog',
    guides: 'Guides',
    help: 'Help center',
    security: 'Security and traceability',
    about: 'About',
    demo: 'Demo',
    contact: 'Contact',
    legal: 'Legal notice',
    privacy: 'Privacy',
    terms: 'Terms',
  },
  notFound: { title: 'This page does not exist.', lead: 'The address has changed or never existed.', back: 'Back to home' },
};
