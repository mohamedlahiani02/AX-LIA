import type { Brick, LegalKey, LegalPage } from '@/lib/site';

const contactNote = 'Une question sur cette page ? Écrivez-nous via le formulaire de démo.';

const bricks: Brick[] = [
  { t: 'Formation', d: 'Inscrire, encaisser, faire l’appel, payer les intervenants. Sans tableur.', tone: 'indigo' },
  { t: 'Coworking', d: 'Votre étage en direct. Vos clients réservent tout seuls.', tone: 'ambre' },
  { t: 'Notifications intelligentes', d: 'Le système vous signale ce qui compte, par priorité, avec des recommandations.', tone: 'ciel' },
  { t: 'Site web', d: 'Un site qui parle à votre back-office, dans deux langues.', tone: 'blanc' },
  { t: 'Automatisations', d: 'Rappels, relances, confirmations. Sur WhatsApp, Telegram ou vos propres outils.', tone: 'ambre' },
  { t: 'Chatbot intégré', d: 'Demandez-lui comment faire dans la plateforme, ou une info sur un groupe.', tone: 'indigo' },
  { t: 'Caisse et comptabilité', d: 'Gestion et clôture de caisse, formation, coworking ou le reste. Chaque dinar suivi.', tone: 'blanc' },
  { t: 'Et ensuite ?', d: 'On a d’autres idées. Vous aussi, sûrement.', tone: 'ciel' },
];

const legalPages: Record<LegalKey, LegalPage> = {
  legal: {
    title: 'Mentions légales',
    desc: 'Mentions légales du site AXÉLIA.',
    blocks: [
      { t: 'Éditeur', body: ['Ce site est édité par AXÉLIA.', contactNote] },
      { t: 'Propriété intellectuelle', body: ['La marque AXÉLIA, le logo, les textes et les captures d’interface de ce site ne peuvent être reproduits sans accord écrit.'] },
    ],
  },
  privacy: {
    title: 'Confidentialité',
    desc: 'Politique de confidentialité du site AXÉLIA.',
    blocks: [
      { t: 'Données collectées', body: ['Le formulaire de démo collecte quatre informations : nom, établissement, e-mail, téléphone. Elles servent à vous recontacter, et à rien d’autre.'] },
      { t: 'Vos droits', body: ['Vous pouvez demander l’accès à vos données, leur rectification ou leur suppression.', contactNote] },
    ],
  },
  terms: {
    title: 'Conditions générales d’utilisation',
    desc: 'Conditions générales d’utilisation du site AXÉLIA.',
    blocks: [
      { t: 'Objet', body: ['Ce site présente la plateforme AXÉLIA. Les informations publiées n’ont pas de valeur contractuelle : seul le devis signé engage les parties.'] },
      { t: 'Usage', body: ['Vous vous engagez à utiliser ce site et son formulaire de bonne foi.', contactNote] },
    ],
  },
};

export const fr = {
  signature: 'AXÉLIA — Au cœur de votre organisation.',
  meta: {
    title: 'AXÉLIA — Toutes vos activités, un seul système',
    desc: 'Formation, coworking, caisse, automatisations, comptabilité : AXÉLIA fait tourner tout votre établissement depuis un seul endroit.',
  },
  nav: { demo: 'Demander une démo', skip: 'Aller au contenu', language: 'Langue', back: 'Retour à l’accueil' },
  hero: {
    pre: 'Gérez',
    words: ['vos formations', 'votre coworking', 'votre caisse', 'vos encaissements', 'vos équipes'],
    post: 'sans prise de tête.',
    sub: 'Une seule plateforme pour faire tourner tout votre établissement. Vous activez ce qu’il vous faut, le reste suit.',
    peek: 'Voir à quoi ça ressemble',
  },
  marquee: ['Formation', 'Coworking', 'Caisse', 'Site web', 'Automatisations', 'Chatbot', 'Notifications', 'Comptabilité', 'Et la suite'],
  reel: {
    title: 'Ça ressemble à ça.',
    sub: 'De vraies captures, pas des maquettes.',
    tabs: [
      { img: 'dashboard.png', t: 'Pilotage' },
      { img: 'encaissements.png', t: 'Encaissements' },
      { img: 'coworking.png', t: 'Espaces' },
      { img: 'presences.png', t: 'Présences' },
      { img: 'paie.png', t: 'Paie' },
      { img: 'raccourcis.png', t: 'Raccourcis' },
    ],
  },
  universe: {
    title: 'Un système. Autant de briques que d’activités.',
    sub: 'Passez sur une brique pour un aperçu. Le reste, on vous le montre.',
    bricks,
  },
  cta: { title: 'Curieux ?', sub: 'Trente minutes, sur vos cas réels. On vous montre, vous décidez.' },
  demo: {
    fields: { name: 'Nom', establishment: 'Établissement', email: 'E-mail', phone: 'Téléphone', message: 'Message ou question (facultatif)' },
    submit: 'Demander une démo',
    sending: 'Envoi en cours',
    required: 'Ce champ est requis.',
    invalidEmail: 'Cette adresse e-mail n’est pas valide.',
    success: 'Demande reçue. On revient vers vous sous 24 h.',
    prepare: 'Préparez vos cas réels, on parcourt votre parcours complet.',
    failure: 'L’envoi n’a pas abouti. Réessayez dans un instant.',
    contactLine: 'Ou écrivez-nous :',
  },
  legalPages,
  notFound: { title: 'Cette page n’existe pas.', back: 'Revenir à l’accueil' },
};

export type Dict = typeof fr;
