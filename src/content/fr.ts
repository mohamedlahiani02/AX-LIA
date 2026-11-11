import type { Item, ModuleInfo, Page, PageKey } from '@/lib/site';

const modules: ModuleInfo[] = [
  {
    key: 'formation',
    name: 'AXÉLIA Formation',
    short: 'Formation',
    tag: 'Inscriptions, présences, paie des intervenants, caisse.',
    blocks: [
      'Inscriptions guidées',
      'Échéanciers',
      'Encaissements imputés',
      'Reçus immuables',
      'Présences verrouillées',
      'Conflits de salles',
      'Règles de paie par intervenant',
      'Caisse et 7 rapports',
    ],
  },
  {
    key: 'coworking',
    name: 'AXÉLIA Coworking',
    short: 'Coworking',
    tag: 'Plan vivant, abonnements, portail client.',
    blocks: [
      'Plan vivant',
      'Dessin d’étage sans informaticien',
      'Accueil en 4 étapes',
      'Abonnements et carnets d’heures',
      'Domiciliation',
      'Statistiques',
      'Portail client et QR code d’arrivée',
    ],
  },
  {
    key: 'website',
    name: 'AXÉLIA Site Web',
    short: 'Site Web',
    tag: 'Pages bilingues, demandes reçues dans le back-office.',
    blocks: [
      'Pages bilingues',
      '3 thèmes',
      'Publication programmée',
      'SEO par page',
      'Demandes de visite et de devis dans le back-office',
    ],
  },
];

const deployment: Item[] = [
  { t: 'Cadrage', d: 'Nous parcourons vos cas réels et fixons le périmètre : modules, règles, rôles.' },
  { t: 'Développement', d: 'Les ajustements convenus au cadrage sont réalisés et montrés.' },
  { t: 'Paramétrage', d: 'Tarifs, échéanciers, règles de paie, salles et plans sont saisis avec vos équipes.' },
  { t: 'Recette', d: 'Vous vérifiez chaque parcours sur vos propres données avant toute ouverture.' },
  { t: 'Mise en production', d: 'Les équipes sont formées sur leurs cas. L’établissement bascule à une date convenue.' },
];

const loop: Item[] = [
  { t: 'Inscription', d: 'Un parcours guidé : élève, groupe, formule.' },
  { t: 'Échéancier', d: 'Acompte et échéances fixés dès l’inscription.' },
  { t: 'Encaissement', d: 'Chaque paiement est imputé sur l’échéance concernée. Le reçu est immuable.' },
  { t: 'Présences', d: 'L’appel se fait à l’écran. La séance validée est verrouillée.' },
  { t: 'Paie', d: 'Les séances tenues alimentent la paie, selon la règle de chaque intervenant.' },
  { t: 'Clôture', d: 'La caisse se clôture le soir. 7 rapports expliquent chaque écart.' },
];

const guarantees: Item[] = [
  { t: 'Journal en lecture seule', d: 'Chaque modification est consignée : valeur avant, valeur après, motif. Personne ne peut réécrire le journal.' },
  { t: 'Empreinte d’intégrité', d: 'Chaque écriture porte une empreinte. Une altération se voit.' },
  { t: 'Reçus d’annulation', d: 'Un reçu ne se supprime pas. Il s’annule par un reçu de contre-passation, visible en caisse.' },
  { t: 'Rôles précis', d: 'Chaque rôle voit ce qui le concerne. Les éléments sensibles sont masqués pour les autres.' },
];

const pilot =
  'À mesurer pendant le pilote : temps gagné à l’encaissement, réduction des impayés et des erreurs de caisse.';

const moduleLinks: Item[] = [
  { t: 'AXÉLIA Formation', d: modules[0].tag, to: 'formation' },
  { t: 'AXÉLIA Coworking', d: modules[1].tag, to: 'coworking' },
  { t: 'AXÉLIA Site Web', d: modules[2].tag, to: 'website' },
];

const legalNote = 'Pour toute question relative à cette page, utilisez la page Contact.';

const pages: Record<PageKey, Page> = {
  home: {
    title: 'AXÉLIA — Toutes vos activités, un seul système',
    desc: 'AXÉLIA est la plateforme de management opérationnel qui réunit formation, coworking, commerce et pilotage. Des modules activés selon vos besoins.',
    eyebrow: 'Plateforme de management opérationnel',
    h1: 'Toutes vos activités, un seul système.',
    lead: 'Formation, coworking et site web : des modules simples, activés selon vos besoins — sans toucher au code.',
    sections: [],
  },
  product: {
    title: 'Produit — un système, des modules',
    desc: 'Un moteur central — paiements, rôles, journal d’audit, tableau de bord — et des modules qui s’activent autour : Formation, Coworking, Site Web.',
    eyebrow: 'Produit',
    h1: 'Un système central. Des modules qui s’activent autour.',
    lead: 'AXÉLIA Système porte les paiements, les rôles, le journal d’audit et le tableau de bord. Chaque module s’y branche et partage les mêmes données.',
    sections: [
      { kind: 'diagram', label: 'Architecture', title: 'Un système, pas trois produits.' },
      { kind: 'links', label: 'Modules', title: 'Activez ce que vous utilisez.', items: moduleLinks },
      { kind: 'steps', label: 'Parcours', title: 'De l’inscription à la clôture, sans rupture.', items: loop },
      {
        kind: 'note',
        title: 'AXÉLIA Commerce',
        body: ['Module annoncé, pas encore commercialisé. Il rejoindra le même système, avec les mêmes paiements et le même journal.'],
      },
    ],
  },
  formation: {
    title: 'AXÉLIA Formation — inscriptions, présences, paie, caisse',
    desc: 'Inscriptions guidées, échéanciers, encaissements imputés, reçus immuables, présences verrouillées, conflits de salles, paie par intervenant, caisse et 7 rapports.',
    eyebrow: 'Module Formation',
    h1: 'De l’inscription à la paie, chaque étape est tracée.',
    lead: '8 blocs couvrent le cycle complet d’un centre : inscrire, encaisser, faire l’appel, planifier, payer, clôturer.',
    sections: [
      {
        kind: 'cards',
        label: '8 blocs',
        title: 'Ce que le module couvre.',
        items: [
          { t: 'Inscriptions guidées', d: 'Élève, groupe, formule : l’inscription suit un parcours, sans champ oublié.' },
          { t: 'Échéanciers', d: 'Acompte et échéances sont fixés à l’inscription. Les retards remontent d’eux-mêmes.' },
          { t: 'Encaissements imputés', d: 'Chaque paiement est affecté à l’échéance concernée. Le solde est à jour au millime.' },
          { t: 'Reçus immuables', d: 'Un reçu émis ne se modifie pas. Une erreur se corrige par un reçu d’annulation.' },
          { t: 'Présences verrouillées', d: 'L’appel se fait à l’écran. Une séance validée ne se retouche plus sans trace.' },
          { t: 'Conflits de salles', d: 'Deux groupes sur la même salle au même créneau : le conflit est signalé à la saisie.' },
          { t: 'Règles de paie par intervenant', d: 'À l’heure, au forfait, à l’élève. La paie se justifie séance par séance.' },
          { t: 'Caisse et 7 rapports', d: 'Fond de caisse le matin, clôture le soir. 7 rapports expliquent chaque écart.' },
        ],
      },
      { kind: 'capture', img: 'encaissements.png', alt: 'Écran des encaissements dans AXÉLIA Formation', title: 'Encaissements : chaque paiement imputé sur son échéance.' },
      { kind: 'capture', img: 'presences.png', alt: 'Écran des présences dans AXÉLIA Formation', title: 'Présences : l’appel à l’écran, séance par séance.' },
      { kind: 'capture', img: 'paie.png', alt: 'Écran de paie des intervenants dans AXÉLIA Formation', title: 'Paie : un montant justifié pour chaque intervenant.' },
      { kind: 'note', body: [pilot] },
    ],
  },
  coworking: {
    title: 'AXÉLIA Coworking — plan vivant, abonnements, portail client',
    desc: 'Plan de coworking interactif, dessin d’étage sans informaticien, accueil en 4 étapes, abonnements et carnets d’heures, domiciliation, statistiques, portail client.',
    eyebrow: 'Module Coworking',
    h1: 'Votre espace, tel qu’il est à cet instant.',
    lead: '7 blocs pour exploiter un espace : voir l’occupation en direct, accueillir, abonner, domicilier, mesurer.',
    sections: [
      {
        kind: 'cards',
        label: '7 blocs',
        title: 'Ce que le module couvre.',
        items: [
          { t: 'Plan vivant', d: 'Postes, bureaux et salles affichent leur état en direct : libre, réservé, occupé.' },
          { t: 'Dessin d’étage sans informaticien', d: 'Vous dessinez et modifiez le plan vous-même. Copier, coller, annuler : les raccourcis habituels fonctionnent.' },
          { t: 'Accueil en 4 étapes', d: 'Un visiteur sans réservation est installé en 4 étapes, paiement compris.' },
          { t: 'Abonnements et carnets d’heures', d: 'Abonnements récurrents ou heures prépayées, décomptés à chaque passage.' },
          { t: 'Domiciliation', d: 'Le courrier reçu est enregistré et rattaché au client domicilié.' },
          { t: 'Statistiques', d: 'Taux d’occupation par espace et par période, pour ajuster offres et tarifs.' },
          { t: 'Portail client et QR code d’arrivée', d: 'Le client réserve en ligne sur le plan public et s’annonce par QR code.' },
        ],
      },
      { kind: 'capture', img: 'coworking.png', alt: 'Plan vivant d’un espace dans AXÉLIA Coworking', title: 'Le plan vivant : l’occupation de l’étage, poste par poste.' },
      {
        kind: 'note',
        title: 'Le plan public',
        body: ['Vos visiteurs consultent le plan et réservent avant même de vous appeler. Ils utilisent AXÉLIA avant que vous ne leur en parliez.'],
      },
    ],
  },
  website: {
    title: 'AXÉLIA Site Web — pages bilingues reliées au back-office',
    desc: 'Pages bilingues, 3 thèmes, publication programmée, SEO par page. Les demandes de visite et de devis arrivent dans le back-office.',
    eyebrow: 'Module Site Web',
    h1: 'Un site relié à votre back-office.',
    lead: 'Vos pages se publient en deux langues. Les demandes de visite et de devis arrivent là où vos équipes travaillent déjà.',
    sections: [
      {
        kind: 'cards',
        label: 'Fonctions',
        title: 'Ce que le module couvre.',
        items: [
          { t: 'Pages bilingues', d: 'Chaque page existe en français et en anglais, avec ses propres adresses.' },
          { t: '3 thèmes', d: 'Trois présentations prêtes, à vos couleurs.' },
          { t: 'Publication programmée', d: 'Une page se prépare aujourd’hui et se publie à la date choisie.' },
          { t: 'SEO par page', d: 'Titre, description et adresse se règlent page par page.' },
          { t: 'Demandes dans le back-office', d: 'Une demande de visite ou de devis devient une fiche à traiter, pas un e-mail perdu.' },
        ],
      },
      { kind: 'note', body: ['Les disponibilités affichées sur le site sont celles du plan vivant. Il n’y a rien à recopier.'] },
    ],
  },
  solutions: {
    title: 'Solutions par type d’établissement',
    desc: 'Centres de formation, espaces de coworking, centres multi-activités, établissements scolaires privés : les modules AXÉLIA qui répondent à chaque cas.',
    eyebrow: 'Solutions',
    h1: 'Votre établissement, vos modules.',
    lead: 'Chaque type d’établissement a ses points de friction. Voici les modules qui y répondent.',
    sections: [
      {
        kind: 'links',
        items: [
          { t: 'Centres de formation', d: 'Impayés, présences, salles, paie des intervenants.', to: 'solTraining' },
          { t: 'Espaces de coworking', d: 'Occupation en direct, réservations en ligne, abonnements.', to: 'solCoworking' },
          { t: 'Centres multi-activités', d: 'Formation et coworking dans les mêmes murs, un seul pilotage.', to: 'solMulti' },
          { t: 'Établissements scolaires privés', d: 'Inscriptions, échéanciers et encaissements tracés.', to: 'solSchools' },
        ],
      },
    ],
  },
  solTraining: {
    title: 'Logiciel pour centre de formation en Tunisie — AXÉLIA',
    desc: 'Réduire les impayés, faire l’appel sans feuille papier, éviter les conflits de salles, justifier la paie des intervenants.',
    eyebrow: 'Centres de formation',
    h1: 'Moins d’impayés. Une paie qui ne se conteste pas.',
    lead: 'Pour les centres qui inscrivent, encaissent, planifient et paient des intervenants chaque mois.',
    sections: [
      {
        kind: 'cards',
        label: 'Constats',
        title: 'Ce qui coûte du temps aujourd’hui.',
        items: [
          { t: 'Impayés', d: 'Le suivi des échéances vit dans un tableur que personne n’ose toucher.' },
          { t: 'Présences', d: 'Les feuilles d’appel se ressaisissent, ou se perdent.' },
          { t: 'Salles', d: 'Les doubles réservations se découvrent le jour même.' },
          { t: 'Paie', d: 'Chaque fin de mois, les séances se recomptent à la main.' },
        ],
      },
      { kind: 'links', label: 'Modules', title: 'Ce qui y répond.', items: [moduleLinks[0], moduleLinks[2]] },
      { kind: 'capture', img: 'groupes.png', alt: 'Écran des groupes dans AXÉLIA Formation', title: 'Groupes : remplissage, créneaux et intervenants au même endroit.' },
      { kind: 'note', body: [pilot] },
    ],
  },
  solCoworking: {
    title: 'Logiciel de gestion de coworking — plan interactif — AXÉLIA',
    desc: 'Plan de coworking interactif, réservations en ligne, abonnements et carnets d’heures, domiciliation, taux d’occupation.',
    eyebrow: 'Espaces de coworking',
    h1: 'Un plan vivant. Des réservations qui arrivent seules.',
    lead: 'Pour les gestionnaires d’espace qui veulent voir l’occupation et laisser leurs clients réserver en ligne.',
    sections: [
      {
        kind: 'cards',
        label: 'Constats',
        title: 'Ce qui coûte du temps aujourd’hui.',
        items: [
          { t: 'Occupation', d: 'Savoir ce qui est libre demande de faire le tour de l’étage.' },
          { t: 'Réservations', d: 'Les demandes arrivent par téléphone, par message, par e-mail.' },
          { t: 'Abonnements', d: 'Les heures consommées se décomptent sur un carnet.' },
          { t: 'Courrier', d: 'Le courrier des clients domiciliés se suit de mémoire.' },
        ],
      },
      { kind: 'links', label: 'Modules', title: 'Ce qui y répond.', items: [moduleLinks[1], moduleLinks[2]] },
      { kind: 'capture', img: 'coworking.png', alt: 'Plan vivant d’un espace de coworking', title: 'Le plan vivant, tel que le voient vos équipes.' },
      { kind: 'note', body: ['À mesurer pendant le pilote : taux d’occupation par espace et part des réservations faites en ligne.'] },
    ],
  },
  solMulti: {
    title: 'Centres multi-activités : formation et coworking — AXÉLIA',
    desc: 'Formation et coworking dans le même établissement : un seul plan de salles, une seule caisse, un seul tableau de bord.',
    eyebrow: 'Centres multi-activités',
    h1: 'Deux activités. Un seul pilotage.',
    lead: 'Pour les directions qui gèrent formation et coworking dans les mêmes murs, avec les mêmes salles et la même caisse.',
    sections: [
      {
        kind: 'cards',
        label: 'Constats',
        title: 'Ce qui coûte du temps aujourd’hui.',
        items: [
          { t: 'Deux outils', d: 'Chaque activité a son outil. Aucun ne voit l’autre.' },
          { t: 'Salles partagées', d: 'Une salle louée à un client est aussi celle d’un groupe.' },
          { t: 'Caisse', d: 'Les encaissements des deux activités se rapprochent à la main.' },
          { t: 'Pilotage', d: 'Le chiffre du mois se reconstitue à partir de plusieurs fichiers.' },
        ],
      },
      { kind: 'links', label: 'Modules', title: 'Ce qui y répond.', items: moduleLinks },
      { kind: 'capture', img: 'dashboard.png', alt: 'Tableau de bord AXÉLIA', title: 'Le tableau de bord : toutes les activités sur un écran.' },
      { kind: 'note', body: [pilot] },
    ],
  },
  solSchools: {
    title: 'Établissements scolaires privés — AXÉLIA',
    desc: 'Inscriptions, échéanciers, encaissements imputés et présences pour les établissements scolaires privés.',
    eyebrow: 'Établissements scolaires privés',
    h1: 'Des frais de scolarité suivis échéance par échéance.',
    lead: 'Les blocs du module Formation s’appliquent à un établissement scolaire : inscrire, échelonner, encaisser, faire l’appel.',
    sections: [
      {
        kind: 'cards',
        label: 'Constats',
        title: 'Ce qui coûte du temps aujourd’hui.',
        items: [
          { t: 'Échéances', d: 'Les retards de paiement se découvrent en fin de trimestre.' },
          { t: 'Reçus', d: 'Un reçu corrigé à la main ne prouve plus rien.' },
          { t: 'Présences', d: 'L’assiduité se suit classe par classe, sur papier.' },
        ],
      },
      { kind: 'links', label: 'Modules', title: 'Ce qui y répond.', items: [moduleLinks[0], moduleLinks[2]] },
      { kind: 'note', body: ['Le parcours dédié aux établissements scolaires se précise avec les premiers pilotes. Le cadrage part de vos cas réels.'] },
    ],
  },
  pricing: {
    title: 'Tarifs — activez uniquement les modules que vous utilisez',
    desc: 'Trois modules sur devis, un paramétrage, un hébergement avec maintenance. Un centre n’active que les modules qu’il utilise.',
    eyebrow: 'Tarifs',
    h1: 'Activez uniquement les modules que vous utilisez.',
    lead: 'Trois modules, un paramétrage, un hébergement avec maintenance. Chaque poste figure sur le devis.',
    sections: [],
  },
  method: {
    title: 'Méthode de déploiement en 5 étapes',
    desc: 'Cadrage, développement, paramétrage, recette, mise en production : le déploiement d’AXÉLIA, étape par étape.',
    eyebrow: 'Méthode',
    h1: 'Cinq étapes, de la démonstration à la mise en production.',
    lead: 'Le déploiement part de vos cas réels et se termine quand vos équipes travaillent dans l’outil.',
    sections: [
      { kind: 'steps', items: deployment },
      {
        kind: 'cards',
        label: 'Avant le cadrage',
        title: 'Trois temps pour décider.',
        items: [
          { t: 'Démonstration commentée', d: 'Nous parcourons le produit sur vos cas.' },
          { t: 'Validation', d: 'Vous confirmez les modules et le périmètre.' },
          { t: 'Cadrage', d: 'Le périmètre devient un plan, avec un devis.' },
        ],
      },
      { kind: 'note', body: [pilot] },
    ],
  },
  resources: {
    title: 'Ressources',
    desc: 'Blog, guides, centre d’aide, sécurité et traçabilité : les ressources AXÉLIA.',
    eyebrow: 'Ressources',
    h1: 'Comprendre, comparer, vérifier.',
    lead: 'Des articles de méthode, des guides d’une page, l’aide de l’application et nos garanties de traçabilité.',
    sections: [
      {
        kind: 'links',
        items: [
          { t: 'Blog', d: 'Finance, opérations, coworking, conformité.', to: 'blog' },
          { t: 'Guides', d: 'Des documents d’une page, à garder après une démonstration.', to: 'guides' },
          { t: 'Centre d’aide', d: 'Les raccourcis et les gestes de l’application.', to: 'help' },
          { t: 'Sécurité et traçabilité', d: 'Quatre garanties, énoncées simplement.', to: 'security' },
        ],
      },
    ],
  },
  blog: {
    title: 'Blog — méthode pour centres de formation et espaces de coworking',
    desc: 'Réduire les impayés, faire l’appel sans papier, calculer un taux d’occupation, comprendre le reçu immuable.',
    eyebrow: 'Blog',
    h1: 'Des méthodes, pas des opinions.',
    lead: 'Quatre thèmes, traités avec des chiffres et des cas. Les articles ci-dessous sont en préparation.',
    sections: [
      {
        kind: 'cards',
        label: 'Finance',
        items: [
          { t: 'Comment réduire les impayés dans un centre de formation', d: 'À paraître.' },
          { t: 'Échéanciers et acomptes : méthode de suivi', d: 'À paraître.' },
        ],
      },
      {
        kind: 'cards',
        label: 'Opérations',
        items: [
          { t: 'Faire l’appel sans feuille papier', d: 'À paraître.' },
          { t: 'Détecter les conflits de salles avant qu’ils n’arrivent', d: 'À paraître.' },
        ],
      },
      {
        kind: 'cards',
        label: 'Coworking',
        items: [
          { t: 'Taux d’occupation : le calculer, l’augmenter', d: 'À paraître.' },
          { t: 'Abonnements ou carnets d’heures', d: 'À paraître.' },
        ],
      },
      {
        kind: 'cards',
        label: 'Conformité',
        items: [{ t: 'Reçu immuable et contre-passation : ce qui change pour votre caisse', d: 'À paraître.' }],
      },
    ],
  },
  guides: {
    title: 'Guides',
    desc: 'Des guides d’une page sur l’encaissement, les présences, le plan de coworking et la clôture de caisse.',
    eyebrow: 'Guides',
    h1: 'Une page par sujet.',
    lead: 'Chaque guide tient sur une page, avec des montants en TND. Ils sont remis après une démonstration.',
    sections: [
      {
        kind: 'cards',
        items: [
          { t: 'Suivre un échéancier', d: 'Remis en démonstration.' },
          { t: 'Clôturer la caisse', d: 'Remis en démonstration.' },
          { t: 'Dessiner le plan de votre étage', d: 'Remis en démonstration.' },
        ],
      },
    ],
  },
  help: {
    title: 'Centre d’aide — raccourcis et gestes',
    desc: 'Les raccourcis de l’application AXÉLIA : copier, coller, annuler, clic droit.',
    eyebrow: 'Centre d’aide',
    h1: 'Les mêmes raccourcis que dans l’application.',
    lead: 'Le bouton « Aide » de l’application liste chaque raccourci. Les voici.',
    sections: [
      {
        kind: 'cards',
        label: 'Raccourcis',
        items: [
          { t: 'Ctrl + C', d: 'Copier l’élément sélectionné.' },
          { t: 'Ctrl + V', d: 'Coller l’élément copié.' },
          { t: 'Ctrl + Z', d: 'Annuler la dernière action.' },
          { t: 'Clic droit', d: 'Ouvrir le menu des actions disponibles sur l’élément.' },
        ],
      },
      { kind: 'note', body: ['Une question sur un parcours précis : la démonstration se fait sur vos cas réels.'] },
    ],
  },
  security: {
    title: 'Sécurité et traçabilité — journal d’audit, reçus immuables, rôles',
    desc: 'Journal en lecture seule, empreinte d’intégrité, reçus d’annulation, rôles avec éléments masqués : les quatre garanties AXÉLIA.',
    eyebrow: 'Sécurité et traçabilité',
    h1: 'Ce qui est écrit reste écrit.',
    lead: 'Quatre garanties, pour la direction comme pour la comptabilité.',
    sections: [{ kind: 'cards', items: guarantees }],
  },
  about: {
    title: 'À propos d’AXÉLIA',
    desc: 'AXÉLIA est la plateforme de management opérationnel qui réunit formation, coworking, commerce et pilotage.',
    eyebrow: 'À propos',
    h1: 'Au cœur de votre organisation.',
    lead: 'AXÉLIA est la plateforme de management opérationnel qui réunit formation, coworking, commerce et pilotage.',
    sections: [
      {
        kind: 'cards',
        items: [
          { t: 'Mission', d: 'Donner à chaque établissement un seul système pour toutes ses activités.' },
          { t: 'Vision', d: 'Un établissement se pilote sur des faits : ce qui est encaissé, ce qui est tenu, ce qui est occupé.' },
          { t: 'Positionnement', d: 'Un système central, des modules activés selon les besoins, sans toucher au code.' },
        ],
      },
      {
        kind: 'cards',
        label: 'Valeurs',
        items: [
          { t: 'Traçabilité', d: 'Chaque écriture a un auteur, une date, un motif.' },
          { t: 'Sobriété', d: 'Une action principale par écran. Des chiffres plutôt que des adjectifs.' },
          { t: 'Proximité', d: 'Le paramétrage se fait avec vos équipes, sur vos cas.' },
        ],
      },
      {
        kind: 'note',
        title: 'L’Axe',
        body: ['Deux modules autonomes convergent. Le point central est le cœur de l’organisation.'],
      },
    ],
  },
  demo: {
    title: 'Demander une démonstration',
    desc: 'Une démonstration commentée d’AXÉLIA, sur vos cas réels. Nous revenons vers vous sous 24 h.',
    eyebrow: 'Démonstration',
    h1: 'Une démonstration sur vos cas réels.',
    lead: 'Choisissez un créneau ou laissez vos coordonnées. Nous parcourons votre parcours complet.',
    sections: [],
  },
  contact: {
    title: 'Contact',
    desc: 'Contacter l’équipe AXÉLIA.',
    eyebrow: 'Contact',
    h1: 'Parlons de votre établissement.',
    lead: 'Le plus direct reste une démonstration sur vos cas réels.',
    sections: [],
  },
  legal: {
    title: 'Mentions légales',
    desc: 'Mentions légales du site AXÉLIA.',
    eyebrow: 'Informations légales',
    h1: 'Mentions légales',
    lead: 'Éditeur, hébergement et propriété intellectuelle.',
    sections: [
      { kind: 'prose', title: 'Éditeur', body: ['Ce site est édité par AXÉLIA.', legalNote] },
      { kind: 'prose', title: 'Propriété intellectuelle', body: ['La marque AXÉLIA, le logo, les textes et les captures d’interface de ce site ne peuvent être reproduits sans accord écrit.'] },
    ],
  },
  privacy: {
    title: 'Confidentialité',
    desc: 'Politique de confidentialité du site AXÉLIA.',
    eyebrow: 'Informations légales',
    h1: 'Confidentialité',
    lead: 'Ce que ce site collecte, et pourquoi.',
    sections: [
      { kind: 'prose', title: 'Données collectées', body: ['Le formulaire de démonstration collecte quatre informations : nom, établissement, e-mail, téléphone. Elles servent à vous recontacter au sujet de votre demande, et à rien d’autre.'] },
      { kind: 'prose', title: 'Vos droits', body: ['Vous pouvez demander l’accès à vos données, leur rectification ou leur suppression.', legalNote] },
    ],
  },
  terms: {
    title: 'Conditions générales d’utilisation',
    desc: 'Conditions générales d’utilisation du site AXÉLIA.',
    eyebrow: 'Informations légales',
    h1: 'Conditions générales d’utilisation',
    lead: 'Les règles d’usage de ce site.',
    sections: [
      { kind: 'prose', title: 'Objet', body: ['Ce site présente la plateforme AXÉLIA. Les informations publiées n’ont pas de valeur contractuelle : seul le devis signé engage les parties.'] },
      { kind: 'prose', title: 'Usage', body: ['Vous vous engagez à utiliser ce site et ses formulaires de bonne foi.', legalNote] },
    ],
  },
};

export const fr = {
  signature: 'AXÉLIA — Au cœur de votre organisation.',
  nav: {
    product: 'Produit',
    solutions: 'Solutions',
    pricing: 'Tarifs',
    resources: 'Ressources',
    about: 'À propos',
    demo: 'Demander une démo',
    menu: 'Menu',
    main: 'Navigation principale',
    skip: 'Aller au contenu',
    seeProduct: 'Voir le produit',
    more: 'En savoir plus',
    language: 'Langue',
  },
  core: { name: 'AXÉLIA Système', items: 'Paiements · Rôles · Audit · Tableau de bord' },
  bridges: ['plan de salles', 'disponibilités en direct'],
  diagramAlt: 'AXÉLIA Système au centre, relié aux modules Formation, Coworking et Site Web.',
  modules,
  deployment,
  pages,
  home: {
    problem: {
      title: 'Gérer un centre, c’est jongler avec tout.',
      items: [
        { t: 'Impayés', d: 'Qui doit quoi, et depuis quand : la réponse est dans trois fichiers.' },
        { t: 'Présences', d: 'L’appel se fait sur papier, puis se ressaisit.' },
        { t: 'Salles', d: 'Deux groupes, une salle, le même créneau. On le découvre le jour même.' },
        { t: 'Paie', d: 'Chaque fin de mois, la paie des intervenants se recalcule à la main.' },
      ],
    },
    system: {
      label: 'Le système',
      title: 'Un seul outil pour tout l’établissement.',
      lead: 'Un moteur central, des modules qui s’activent autour. Survolez un module pour voir ce qu’il couvre.',
      here: 'Vous êtes ici',
      count: (n: number) => `${n} blocs`,
    },
    proof: {
      label: 'Captures réelles',
      title: 'Le produit, déjà à l’écran.',
      items: [
        { img: 'dashboard.png', t: 'Tableau de bord', d: 'L’activité du jour, les encaissements, les alertes.' },
        { img: 'encaissements.png', t: 'Encaissements', d: 'Chaque paiement imputé, chaque montant au millime.' },
        { img: 'coworking.png', t: 'Plan vivant', d: 'L’étage en direct : libre, réservé, occupé.' },
      ],
    },
    numbers: [
      { n: '3', t: 'modules, un seul système' },
      { n: '8', t: 'blocs dans Formation' },
      { n: '7', t: 'blocs dans Coworking' },
      { n: '7', t: 'rapports de caisse' },
    ],
    loop: { label: 'Parcours', title: 'De l’inscription à la clôture, sans rupture.', items: loop },
    switch: {
      label: 'Comparaison',
      title: 'Avec ou sans AXÉLIA.',
      without: 'Sans AXÉLIA',
      with: 'Avec AXÉLIA',
      rows: [
        { t: 'Encaissements', without: 'Reçus papier, imputation à la main.', with: 'Imputation automatique sur l’échéancier, reçu immuable.' },
        { t: 'Présences', without: 'Feuilles d’appel ressaisies.', with: 'Appel à l’écran, séance verrouillée.' },
        { t: 'Planning', without: 'Conflits de salles découverts le jour même.', with: 'Conflits signalés à la saisie.' },
        { t: 'Paie', without: 'Calcul manuel, chaque fin de mois.', with: 'Paie justifiée, séance par séance.' },
      ],
    },
    trust: { label: 'Traçabilité', title: 'Ce qui est écrit reste écrit.', items: guarantees },
    pricing: { label: 'Tarifs', title: 'Trois modules. Vous choisissez.', link: 'Voir les tarifs' },
  },
  pricing: {
    quote: 'Sur devis',
    included: 'Ce qui est inclus',
    note: 'Un centre n’active que les modules qu’il utilise.',
    billing: { label: 'Facturation de l’hébergement', monthly: 'Mensuelle', annual: 'Annuelle' },
    extras: {
      setup: { t: 'Paramétrage', d: 'Tarifs, règles de paie, rôles, salles et plans, saisis avec vos équipes. Facturé une fois.' },
      hosting: {
        t: 'Hébergement et maintenance',
        monthly: 'Hébergement, sauvegardes et mises à jour. Facturation mensuelle.',
        annual: 'Hébergement, sauvegardes et mises à jour. Facturation annuelle, en une échéance.',
      },
    },
    format: {
      t: 'Des montants au millime',
      d: 'Sur le devis comme dans le produit, chaque montant s’écrit avec trois décimales et des chiffres alignés. Exemple de format :',
    },
    stepsTitle: 'Le déploiement, en cinq étapes.',
    conditions: {
      title: 'Conditions',
      items: [
        { t: 'Validité', d: 'La durée de validité figure sur chaque devis.' },
        { t: 'Échelonnement', d: 'Le paiement est réparti par étape de déploiement. La répartition figure sur le devis.' },
        { t: 'Périmètre', d: 'Le devis liste les modules activés et ce que chacun inclut. Rien n’est caché.' },
      ],
    },
  },
  demo: {
    calendar: 'Choisir un créneau',
    form: 'Ou laissez vos coordonnées',
    fields: { name: 'Nom', establishment: 'Établissement', email: 'E-mail', phone: 'Téléphone' },
    submit: 'Envoyer la demande',
    sending: 'Envoi en cours',
    required: 'Ce champ est requis.',
    invalidEmail: 'Cette adresse e-mail n’est pas valide.',
    success: 'Demande reçue. Nous revenons vers vous sous 24 h.',
    prepare: 'Préparez vos cas réels — nous parcourons votre parcours complet.',
    failure: 'L’envoi n’a pas abouti. Réessayez dans un instant ou écrivez-nous.',
    contactLine: 'Ou écrivez-nous :',
  },
  cta: { title: 'Passons de la démonstration au pilote.', lead: 'Une démonstration commentée, sur vos cas réels.' },
  articleCta: 'Voir une démonstration sur vos cas réels.',
  footer: {
    product: 'Produit',
    overview: 'Aperçu',
    solutions: 'Solutions',
    company: 'AXÉLIA',
    resources: 'Ressources',
    amounts: 'Montants en dinars tunisiens (TND).',
  },
  short: {
    solTraining: 'Centres de formation',
    solCoworking: 'Espaces de coworking',
    solMulti: 'Centres multi-activités',
    solSchools: 'Établissements scolaires privés',
    pricing: 'Tarifs',
    method: 'Méthode',
    blog: 'Blog',
    guides: 'Guides',
    help: 'Centre d’aide',
    security: 'Sécurité et traçabilité',
    about: 'À propos',
    demo: 'Démo',
    contact: 'Contact',
    legal: 'Mentions légales',
    privacy: 'Confidentialité',
    terms: 'CGU',
  },
  notFound: { title: 'Cette page n’existe pas.', lead: 'L’adresse a changé ou n’a jamais existé.', back: 'Revenir à l’accueil' },
};

export type Dict = typeof fr;
