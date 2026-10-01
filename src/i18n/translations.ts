export type Lang = "en" | "fr" | "ar";

export const languages: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "ar", label: "العربية", short: "AR" },
];

const en = {
  meta: {
    home: {
      title: "Mamlakato Chaye Ltd | Morocco–UK Trade & Culture Bridge",
      description:
        "A Moroccan-British company building trade, logistics, cultural and inclusive opportunities between Morocco and the United Kingdom.",
    },
    about: {
      title: "About Mamlakato Chaye Ltd | Two Kingdoms, One Vision",
      description:
        "Our story, values, mission and journey as a cultural and commercial bridge between Morocco and the United Kingdom.",
    },
    activities: {
      title: "Our Activities | Import, Logistics, Events & Inclusion",
      description:
        "Import and export, road freight, catering and cultural events, and social inclusion programmes across Morocco and the UK.",
    },
    team: {
      title: "Our Team | Mamlakato Chaye Ltd",
      description:
        "Meet the people behind Mamlakato Chaye Ltd: founders, cultural ambassadors, organisers and coordinators.",
    },
    partners: {
      title: "Our Partners | Stronger Together",
      description:
        "We collaborate with trusted producers, cultural institutions and logistics partners in Morocco and the United Kingdom.",
    },
    contact: {
      title: "Contact Mamlakato Chaye Ltd | London & Morocco",
      description:
        "Get in touch by WhatsApp, email or phone to build opportunities with Mamlakato Chaye Ltd.",
    },
    faq: {
      title: "FAQ | Mamlakato Chaye Ltd",
      description:
        "Answers about our activities, partnerships, social inclusion work and how to reach us.",
    },
  },
  nav: {
    home: "Home",
    about: "About",
    activities: "Activities",
    team: "Team",
    partners: "Partners",
    contact: "Contact",
    faq: "FAQ",
    menu: "Menu",
  },
  cta: {
    exploreMission: "Explore Our Mission",
    discoverActivities: "Discover Our Activities",
    learnMore: "Learn More",
    contactUs: "Contact Us",
    becomePartner: "Become a Partner",
    whatsapp: "WhatsApp us",
    whatsappShort: "WhatsApp",
    sendMessage: "Send Message",
    requestQuote: "Request a Quote",
    viewMaps: "View on Google Maps",
    askAssistant: "Ask our assistant",
  },
  home: {
    kicker: "Kingdom of Morocco · United Kingdom",
    heroTitleA: "A cultural and commercial bridge between",
    heroHighlight: "Morocco",
    heroTitleB: "and the United Kingdom.",
    heroSubtitle:
      "Bridging heritage and opportunity through import, export, logistics, gastronomy, culture and social inclusion. Together for a more connected and inclusive future.",
    pillars: [
      { title: "Origin & Traceability", desc: "Authentic products" },
      { title: "Hospitality", desc: "Sharing culture" },
      { title: "Compliance & Reliability", desc: "Safe, transparent" },
      { title: "Inclusion & Dignity", desc: "Stronger society" },
    ],
    activitiesTitle: "Building opportunities together",
    activitiesSubtitle: "Four activities, one shared purpose.",
    stats: [
      { value: "Morocco ⇄ UK", label: "A lasting connection" },
      { value: "4", label: "Core activities" },
      { value: "International", label: "Partnerships" },
      { value: "Positive", label: "Social impact" },
    ],
    heritageKicker: "Rooted in heritage",
    heritageTitle: "Rooted in heritage. Built for tomorrow.",
    heritageBody:
      "We are a bridge between two kingdoms, committed to creating sustainable economic, cultural and social opportunities. By valuing authentic Moroccan heritage and building strong partnerships in the United Kingdom, we contribute to a more inclusive and prosperous future.",
    heritageQuote: "Different horizons, a shared purpose.",
    ctaTitle: "Let's build meaningful connections.",
    ctaSubtitle: "Trade. Culture. People. A more inclusive future.",
  },
  about: {
    kicker: "About",
    title: "About Mamlakato Chaye Ltd",
    subtitle: "Two kingdoms. One vision. A more inclusive future.",
    storyTitle: "Our Story",
    storyP1:
      "Mamlakato Chaye Ltd was founded with a clear vision: to build a sustainable bridge between Morocco and the United Kingdom through trade, culture and social impact.",
    storyP2:
      "We believe in the power of authentic products, meaningful partnerships and inclusive opportunities to create a stronger, more connected future for both societies.",
    valuesTitle: "Our Values",
    values: [
      { title: "Authenticity", desc: "Real products, real people" },
      { title: "Integrity", desc: "Transparent and ethical" },
      { title: "Opportunity", desc: "Creating lasting value" },
      { title: "Inclusion", desc: "A fairer society" },
    ],
    quote: "Bridging heritage and opportunity for a brighter tomorrow.",
    missionTitle: "Our Mission",
    mission:
      "To create sustainable economic, cultural and social opportunities by connecting Morocco and the United Kingdom through trade, gastronomy, culture and inclusive initiatives.",
    visionTitle: "Our Vision",
    vision:
      "To be a trusted partner and a leading bridge between the two kingdoms, recognized for our positive impact on people, communities and cultural exchange.",
    journeyTitle: "Our Journey",
    journey: [
      { year: "2021", title: "The Beginning", desc: "A vision to connect two cultures." },
      { year: "2022", title: "First Partnerships", desc: "Building a strong network." },
      { year: "2023", title: "Expanding Activities", desc: "New markets and opportunities." },
      { year: "2024", title: "Growing Impact", desc: "More people, more opportunities." },
      { year: "Today", title: "A Stronger Tomorrow", desc: "Continuing our mission." },
    ],
  },
  activities: {
    kicker: "Our Activities",
    title: "Creating opportunities together",
    subtitle:
      "Diverse activities, one shared purpose: stronger connections between Morocco and the United Kingdom.",
    items: [
      {
        slug: "import-export",
        title: "Import, Export & Road Freight Transport",
        desc: "Connecting markets and delivering possibilities: reliable and efficient logistics solutions.",
        long: "We connect Moroccan producers with UK markets and handle the full journey — sourcing, documentation, customs and road freight — so goods arrive on time and in perfect condition.",
        benefits: [
          "Reliable transport",
          "Customs support",
          "End-to-end solutions",
          "Trusted partners",
          "Competitive rates",
        ],
      },
      {
        slug: "events",
        title: "Event Catering & Cultural Events",
        desc: "Authentic flavours and memorable experiences that bring people together.",
        long: "From intimate receptions to large cultural festivals, we design and deliver Moroccan hospitality: cuisine, mint tea ceremonies, craftsmanship and the Fassi Caftan.",
        benefits: [
          "Moroccan gastronomy",
          "Cultural programming",
          "Festivals & exhibitions",
          "Full event management",
        ],
      },
      {
        slug: "spices",
        title: "Spices, Aromatic & Medicinal Plants",
        desc: "Nature's treasures, carefully sourced from Morocco and shared with the world.",
        long: "Saffron, cumin, paprika, argan, verbena and aromatic herbs, sourced directly from Moroccan cooperatives with traceability and fair conditions.",
        benefits: [
          "Direct from cooperatives",
          "Traceable origin",
          "Quality controlled",
          "Sustainable sourcing",
        ],
      },
      {
        slug: "social-care",
        title: "Social Care & Inclusion",
        desc: "Empowering people and building a fairer society through inclusive opportunities.",
        long: "We support women's entrepreneurship, vulnerable groups and people with disabilities through humanitarian initiatives and institutional partnerships.",
        benefits: [
          "Women's entrepreneurship",
          "Disability inclusion",
          "Institutional partnerships",
          "Community programmes",
        ],
      },
    ],
    detailOverview: "Overview",
    detailBenefits: "Key Benefits",
    workTitle: "Interested in working with us?",
    workSubtitle: "Let's create opportunities together.",
  },
  team: {
    kicker: "Our Team",
    title: "A passionate team for lasting impact",
    subtitle: "Dedicated people. Shared values. A stronger tomorrow.",
    quote: "Different skills. A shared mission. A brighter tomorrow.",
    roles: {
      naima: "Founder & President",
      aziza: "Ambassador of the Moroccan Fassi Caftan in London",
      soumia: "Cultural & Artistic Festival Organiser",
      soumiya: "Head of Charitable Initiatives & Disability Inclusion",
      anouar: "Lead Coordinator",
      zineb: "Photographer",
    },
    bios: {
      naima:
        "Expert in food nutrition, natural cosmetics and community entrepreneurship since 2012, with extensive experience working alongside public institutions such as ANAPEC.",
      aziza:
        "Preserves and promotes traditional Moroccan attire, and in particular the Fassi Caftan, culturally and artistically across the United Kingdom.",
      soumia:
        "Coordinates international exhibitions and events that bring Moroccan culture and traditional craftsmanship to a global audience.",
      soumiya:
        "Leads our humanitarian and social programmes, focusing on empowering people with disabilities and their professional and social inclusion.",
      anouar:
        "Manages project planning and execution, ensuring seamless communication between partners, institutions and administrative teams.",
      zineb:
        "Documents our festivals, cultural projects and partnerships through photography and visual storytelling.",
    },
  },
  partners: {
    kicker: "Our Partners",
    title: "Stronger together",
    subtitle: "We collaborate with trusted partners to create real opportunities and lasting value.",
    items: [
      { name: "Fresh Produce & Agri-Food", desc: "Fresh & sustainable" },
      { name: "Trade & Logistics", desc: "Reliable connections" },
      { name: "Moroccan Cooperatives & Producers", desc: "Authentic & sustainable" },
      { name: "Artisans & Craftspeople", desc: "Moroccan heritage" },
      { name: "UK Cultural Partners", desc: "Culture & exchange" },
      { name: "Social & Community Partners", desc: "Inclusion & support" },
    ],
    becomeTitle: "Become a Partner",
    becomeSubtitle: "We are always open to new collaborations. Let's build a stronger future together.",
  },
  contact: {
    kicker: "Contact Us",
    title: "Let's build connections",
    subtitle: "We'd love to hear from you. Get in touch and let's create opportunities together.",
    address: "Address",
    email: "Email",
    phone: "Phone / WhatsApp",
    company: "Company number",
    formTitle: "Send us a message",
    name: "Your Name",
    emailField: "Your Email",
    subject: "Subject",
    message: "Your Message",
    locationTitle: "Our Location",
    sent: "Thank you! Your message has been prepared — we'll continue on WhatsApp.",
    fillAll: "Please fill in your name, email and message.",
    formNote: "Sending opens WhatsApp with your message so we can reply quickly.",
  },
  faq: {
    kicker: "Frequently Asked Questions",
    title: "Quick answers",
    subtitle: "Everything you need to know about working with us.",
    items: [
      {
        q: "What is Mamlakato Chaye Ltd?",
        a: "Mamlakato Chaye Ltd (Kingdom of Tea Limited) is a Moroccan-British company acting as an economic and cultural bridge between Morocco and the United Kingdom, registered in London under company number 16881675.",
      },
      {
        q: "What are your main activities?",
        a: "Import and export of Moroccan products, road freight and logistics, catering and cultural events, and social inclusion programmes supporting women's entrepreneurship and people with disabilities.",
      },
      {
        q: "Do you work with individual customers?",
        a: "Our focus is on business, institutional and community partnerships, but we welcome every enquiry — contact us on WhatsApp at +44 7351 157724 and we will guide you.",
      },
      {
        q: "How can I become a partner?",
        a: "Send us a message through the contact page or WhatsApp with a short description of your activity, and our coordination team will get back to you.",
      },
      {
        q: "Do you offer opportunities for social inclusion?",
        a: "Yes. Our charitable initiatives support vulnerable groups and people with disabilities through professional integration, training and institutional partnerships.",
      },
      {
        q: "How can I contact you?",
        a: "By WhatsApp or phone on +44 7351 157724, by email at mamlakatochaye@gmail.com or mamlakatochayeltd26@outlook.com, or at 124-128 City Road, London, EC1V 2NX.",
      },
    ],
  },
  footer: {
    tagline: "Bridging people, cultures and opportunities",
    quickLinks: "Portal",
    contactTitle: "Contact",
    followTitle: "Stay Close",
    rights: "All rights reserved.",
  },
  assistant: {
    launcher: "AI Assistant",
    title: "Mamlakato Assistant",
    subtitle: "Ask in any language — answers based on our company file.",
    placeholder: "Ask a question…",
    greeting:
      "Hello! I'm the Mamlakato Chaye assistant. Ask me anything about our activities, team, partnerships or how to reach us — in any language.",
    thinking: "Thinking…",
    error: "Sorry, something went wrong. Please try again or reach us on WhatsApp.",
    send: "Send",
    close: "Close",
    suggestions: [
      "What does the company do?",
      "Who is the founder?",
      "How can I become a partner?",
    ],
  },
  notFound: {
    title: "Page Not Found",
    desc: "The page you're looking for doesn't exist or has been moved.",
    back: "Back to Home",
  },
  wa: {
    general: "Hello Mamlakato Chaye Ltd, I would like more information.",
    partner: "Hello Mamlakato Chaye Ltd, I am interested in becoming a partner.",
    quote: "Hello Mamlakato Chaye Ltd, I would like a quote for your services.",
  },
};

const fr: typeof en = {
  meta: {
    home: {
      title: "Mamlakato Chaye Ltd | Pont Maroc–Royaume-Uni",
      description:
        "Une entreprise maroco-britannique qui bâtit des opportunités commerciales, logistiques, culturelles et inclusives entre le Maroc et le Royaume-Uni.",
    },
    about: {
      title: "À propos de Mamlakato Chaye Ltd | Deux royaumes, une vision",
      description:
        "Notre histoire, nos valeurs, notre mission et notre parcours de pont culturel et commercial entre le Maroc et le Royaume-Uni.",
    },
    activities: {
      title: "Nos activités | Import, logistique, événements et inclusion",
      description:
        "Import-export, transport routier, traiteur et événements culturels, programmes d'inclusion sociale entre le Maroc et le Royaume-Uni.",
    },
    team: {
      title: "Notre équipe | Mamlakato Chaye Ltd",
      description:
        "Découvrez les personnes derrière Mamlakato Chaye Ltd : fondatrice, ambassadrices culturelles, organisatrices et coordinateurs.",
    },
    partners: {
      title: "Nos partenaires | Plus forts ensemble",
      description:
        "Nous collaborons avec des producteurs, institutions culturelles et partenaires logistiques de confiance au Maroc et au Royaume-Uni.",
    },
    contact: {
      title: "Contacter Mamlakato Chaye Ltd | Londres & Maroc",
      description:
        "Contactez-nous par WhatsApp, e-mail ou téléphone pour créer des opportunités avec Mamlakato Chaye Ltd.",
    },
    faq: {
      title: "FAQ | Mamlakato Chaye Ltd",
      description:
        "Réponses sur nos activités, partenariats, actions d'inclusion sociale et nos coordonnées.",
    },
  },
  nav: {
    home: "Accueil",
    about: "À propos",
    activities: "Activités",
    team: "Équipe",
    partners: "Partenaires",
    contact: "Contact",
    faq: "FAQ",
    menu: "Menu",
  },
  cta: {
    exploreMission: "Découvrir notre mission",
    discoverActivities: "Découvrir nos activités",
    learnMore: "En savoir plus",
    contactUs: "Nous contacter",
    becomePartner: "Devenir partenaire",
    whatsapp: "Nous écrire sur WhatsApp",
    whatsappShort: "WhatsApp",
    sendMessage: "Envoyer le message",
    requestQuote: "Demander un devis",
    viewMaps: "Voir sur Google Maps",
    askAssistant: "Interroger notre assistant",
  },
  home: {
    kicker: "Royaume du Maroc · Royaume-Uni",
    heroTitleA: "Un pont culturel et commercial entre le",
    heroHighlight: "Maroc",
    heroTitleB: "et le Royaume-Uni.",
    heroSubtitle:
      "Relier patrimoine et opportunités par l'import, l'export, la logistique, la gastronomie, la culture et l'inclusion sociale. Ensemble pour un avenir plus connecté et plus inclusif.",
    pillars: [
      { title: "Origine & traçabilité", desc: "Produits authentiques" },
      { title: "Hospitalité", desc: "Partager la culture" },
      { title: "Conformité & fiabilité", desc: "Sûr et transparent" },
      { title: "Inclusion & dignité", desc: "Une société plus forte" },
    ],
    activitiesTitle: "Construire des opportunités ensemble",
    activitiesSubtitle: "Quatre activités, une même finalité.",
    stats: [
      { value: "Maroc ⇄ R.-U.", label: "Un lien durable" },
      { value: "4", label: "Activités clés" },
      { value: "International", label: "Partenariats" },
      { value: "Positif", label: "Impact social" },
    ],
    heritageKicker: "Ancrés dans le patrimoine",
    heritageTitle: "Ancrés dans le patrimoine. Bâtis pour demain.",
    heritageBody:
      "Nous sommes un pont entre deux royaumes, engagés à créer des opportunités économiques, culturelles et sociales durables. En valorisant l'authentique patrimoine marocain et en construisant des partenariats solides au Royaume-Uni, nous contribuons à un avenir plus inclusif et prospère.",
    heritageQuote: "Des horizons différents, une même ambition.",
    ctaTitle: "Créons des liens qui comptent.",
    ctaSubtitle: "Commerce. Culture. Personnes. Un avenir plus inclusif.",
  },
  about: {
    kicker: "À propos",
    title: "À propos de Mamlakato Chaye Ltd",
    subtitle: "Deux royaumes. Une vision. Un avenir plus inclusif.",
    storyTitle: "Notre histoire",
    storyP1:
      "Mamlakato Chaye Ltd a été fondée avec une vision claire : bâtir un pont durable entre le Maroc et le Royaume-Uni par le commerce, la culture et l'impact social.",
    storyP2:
      "Nous croyons à la force des produits authentiques, des partenariats sincères et des opportunités inclusives pour créer un avenir plus solide et plus connecté pour les deux sociétés.",
    valuesTitle: "Nos valeurs",
    values: [
      { title: "Authenticité", desc: "De vrais produits, de vraies personnes" },
      { title: "Intégrité", desc: "Transparence et éthique" },
      { title: "Opportunité", desc: "Créer une valeur durable" },
      { title: "Inclusion", desc: "Une société plus juste" },
    ],
    quote: "Relier patrimoine et opportunités pour un avenir meilleur.",
    missionTitle: "Notre mission",
    mission:
      "Créer des opportunités économiques, culturelles et sociales durables en reliant le Maroc et le Royaume-Uni par le commerce, la gastronomie, la culture et des initiatives inclusives.",
    visionTitle: "Notre vision",
    vision:
      "Être un partenaire de confiance et un pont de référence entre les deux royaumes, reconnu pour son impact positif sur les personnes, les communautés et les échanges culturels.",
    journeyTitle: "Notre parcours",
    journey: [
      { year: "2021", title: "Le commencement", desc: "Une vision pour relier deux cultures." },
      { year: "2022", title: "Premiers partenariats", desc: "Construire un réseau solide." },
      { year: "2023", title: "Activités élargies", desc: "Nouveaux marchés et opportunités." },
      { year: "2024", title: "Impact croissant", desc: "Plus de personnes, plus d'opportunités." },
      { year: "Aujourd'hui", title: "Un demain plus fort", desc: "Poursuivre notre mission." },
    ],
  },
  activities: {
    kicker: "Nos activités",
    title: "Créer des opportunités ensemble",
    subtitle:
      "Des activités diverses, une même finalité : des liens plus forts entre le Maroc et le Royaume-Uni.",
    items: [
      {
        slug: "import-export",
        title: "Import, export & transport routier",
        desc: "Relier les marchés et livrer des possibilités : des solutions logistiques fiables et efficaces.",
        long: "Nous relions les producteurs marocains aux marchés britanniques et gérons tout le parcours — sourcing, documents, douane et transport routier — pour que les marchandises arrivent à l'heure et en parfait état.",
        benefits: [
          "Transport fiable",
          "Accompagnement douanier",
          "Solutions de bout en bout",
          "Partenaires de confiance",
          "Tarifs compétitifs",
        ],
      },
      {
        slug: "events",
        title: "Traiteur & événements culturels",
        desc: "Des saveurs authentiques et des expériences mémorables qui rassemblent.",
        long: "Des réceptions intimes aux grands festivals culturels, nous concevons et livrons l'hospitalité marocaine : cuisine, cérémonie du thé à la menthe, artisanat et caftan fassi.",
        benefits: [
          "Gastronomie marocaine",
          "Programmation culturelle",
          "Festivals & expositions",
          "Gestion complète d'événements",
        ],
      },
      {
        slug: "spices",
        title: "Épices, plantes aromatiques & médicinales",
        desc: "Les trésors de la nature, soigneusement sourcés au Maroc et partagés avec le monde.",
        long: "Safran, cumin, paprika, argan, verveine et herbes aromatiques, sourcés directement auprès des coopératives marocaines avec traçabilité et conditions équitables.",
        benefits: [
          "Directement des coopératives",
          "Origine traçable",
          "Qualité contrôlée",
          "Sourcing durable",
        ],
      },
      {
        slug: "social-care",
        title: "Action sociale & inclusion",
        desc: "Donner du pouvoir aux personnes et bâtir une société plus juste par des opportunités inclusives.",
        long: "Nous soutenons l'entrepreneuriat féminin, les groupes vulnérables et les personnes en situation de handicap par des initiatives humanitaires et des partenariats institutionnels.",
        benefits: [
          "Entrepreneuriat féminin",
          "Inclusion du handicap",
          "Partenariats institutionnels",
          "Programmes communautaires",
        ],
      },
    ],
    detailOverview: "Aperçu",
    detailBenefits: "Bénéfices clés",
    workTitle: "Envie de travailler avec nous ?",
    workSubtitle: "Créons des opportunités ensemble.",
  },
  team: {
    kicker: "Notre équipe",
    title: "Une équipe passionnée pour un impact durable",
    subtitle: "Des personnes engagées. Des valeurs partagées. Un demain plus fort.",
    quote: "Des compétences différentes. Une mission commune. Un avenir meilleur.",
    roles: {
      naima: "Fondatrice & présidente",
      aziza: "Ambassadrice du caftan marocain fassi à Londres",
      soumia: "Organisatrice de festivals culturels et artistiques",
      soumiya: "Responsable des initiatives caritatives & de l'inclusion du handicap",
      anouar: "Coordinateur principal",
      zineb: "Photographe",
    },
    bios: {
      naima:
        "Experte en nutrition alimentaire, cosmétiques naturels et entrepreneuriat communautaire depuis 2012, avec une longue expérience auprès d'institutions publiques telles que l'ANAPEC.",
      aziza:
        "Préserve et promeut le vêtement traditionnel marocain, en particulier le caftan fassi, sur les plans culturel et artistique au Royaume-Uni.",
      soumia:
        "Coordonne des expositions et événements internationaux qui portent la culture marocaine et l'artisanat traditionnel vers un public mondial.",
      soumiya:
        "Dirige nos programmes humanitaires et sociaux, avec un accent sur l'autonomisation des personnes en situation de handicap et leur inclusion professionnelle et sociale.",
      anouar:
        "Assure la planification et l'exécution des projets, garantissant une communication fluide entre partenaires, institutions et équipes administratives.",
      zineb:
        "Documente nos festivals, projets culturels et partenariats par la photographie et le récit visuel.",
    },
  },
  partners: {
    kicker: "Nos partenaires",
    title: "Plus forts ensemble",
    subtitle:
      "Nous collaborons avec des partenaires de confiance pour créer de vraies opportunités et une valeur durable.",
    items: [
      { name: "Produits frais & agroalimentaire", desc: "Frais & durable" },
      { name: "Commerce & logistique", desc: "Des liaisons fiables" },
      { name: "Coopératives & producteurs marocains", desc: "Authentique & durable" },
      { name: "Artisans & artisanes", desc: "Patrimoine marocain" },
      { name: "Partenaires culturels britanniques", desc: "Culture & échange" },
      { name: "Partenaires sociaux & associatifs", desc: "Inclusion & soutien" },
    ],
    becomeTitle: "Devenir partenaire",
    becomeSubtitle:
      "Nous sommes toujours ouverts à de nouvelles collaborations. Bâtissons ensemble un avenir plus solide.",
  },
  contact: {
    kicker: "Contact",
    title: "Créons des liens",
    subtitle:
      "Nous serions ravis de vous lire. Contactez-nous et créons des opportunités ensemble.",
    address: "Adresse",
    email: "E-mail",
    phone: "Téléphone / WhatsApp",
    company: "Numéro d'entreprise",
    formTitle: "Envoyez-nous un message",
    name: "Votre nom",
    emailField: "Votre e-mail",
    subject: "Objet",
    message: "Votre message",
    locationTitle: "Notre adresse",
    sent: "Merci ! Votre message est prêt — nous continuons sur WhatsApp.",
    fillAll: "Merci d'indiquer votre nom, votre e-mail et votre message.",
    formNote: "L'envoi ouvre WhatsApp avec votre message pour une réponse rapide.",
  },
  faq: {
    kicker: "Questions fréquentes",
    title: "Réponses rapides",
    subtitle: "L'essentiel pour travailler avec nous.",
    items: [
      {
        q: "Qu'est-ce que Mamlakato Chaye Ltd ?",
        a: "Mamlakato Chaye Ltd (Kingdom of Tea Limited) est une entreprise maroco-britannique qui agit comme un pont économique et culturel entre le Maroc et le Royaume-Uni, immatriculée à Londres sous le numéro 16881675.",
      },
      {
        q: "Quelles sont vos principales activités ?",
        a: "Import-export de produits marocains, transport routier et logistique, traiteur et événements culturels, et programmes d'inclusion sociale soutenant l'entrepreneuriat féminin et les personnes en situation de handicap.",
      },
      {
        q: "Travaillez-vous avec des particuliers ?",
        a: "Nous privilégions les partenariats professionnels, institutionnels et associatifs, mais toute demande est bienvenue : écrivez-nous sur WhatsApp au +44 7351 157724 et nous vous orienterons.",
      },
      {
        q: "Comment devenir partenaire ?",
        a: "Envoyez-nous un message via la page contact ou WhatsApp avec une brève description de votre activité ; notre équipe de coordination vous répondra.",
      },
      {
        q: "Proposez-vous des actions d'inclusion sociale ?",
        a: "Oui. Nos initiatives caritatives soutiennent les groupes vulnérables et les personnes en situation de handicap par l'insertion professionnelle, la formation et des partenariats institutionnels.",
      },
      {
        q: "Comment vous contacter ?",
        a: "Par WhatsApp ou téléphone au +44 7351 157724, par e-mail à mamlakatochaye@gmail.com ou mamlakatochayeltd26@outlook.com, ou au 124-128 City Road, Londres, EC1V 2NX.",
      },
    ],
  },
  footer: {
    tagline: "Relier les personnes, les cultures et les opportunités",
    quickLinks: "Navigation",
    contactTitle: "Contact",
    followTitle: "Restons proches",
    rights: "Tous droits réservés.",
  },
  assistant: {
    launcher: "Assistant IA",
    title: "Assistant Mamlakato",
    subtitle: "Posez votre question dans n'importe quelle langue — réponses issues de notre dossier.",
    placeholder: "Posez une question…",
    greeting:
      "Bonjour ! Je suis l'assistant de Mamlakato Chaye. Posez-moi vos questions sur nos activités, notre équipe, nos partenariats ou nos coordonnées — dans la langue de votre choix.",
    thinking: "Réflexion…",
    error: "Désolé, une erreur est survenue. Réessayez ou écrivez-nous sur WhatsApp.",
    send: "Envoyer",
    close: "Fermer",
    suggestions: [
      "Que fait l'entreprise ?",
      "Qui est la fondatrice ?",
      "Comment devenir partenaire ?",
    ],
  },
  notFound: {
    title: "Page introuvable",
    desc: "La page que vous cherchez n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
  wa: {
    general: "Bonjour Mamlakato Chaye Ltd, je souhaite plus d'informations.",
    partner: "Bonjour Mamlakato Chaye Ltd, je souhaite devenir partenaire.",
    quote: "Bonjour Mamlakato Chaye Ltd, je souhaite un devis pour vos services.",
  },
};

const ar: typeof en = {
  meta: {
    home: {
      title: "مملكتو شاي المحدودة | جسر بين المغرب والمملكة المتحدة",
      description:
        "شركة مغربية بريطانية تبني فرصاً تجارية ولوجستية وثقافية وشاملة بين المغرب والمملكة المتحدة.",
    },
    about: {
      title: "من نحن | مملكتان، رؤية واحدة",
      description: "قصتنا وقيمنا ورسالتنا ومسارنا كجسر ثقافي وتجاري بين المغرب والمملكة المتحدة.",
    },
    activities: {
      title: "أنشطتنا | الاستيراد واللوجستيك والفعاليات والإدماج",
      description:
        "الاستيراد والتصدير، النقل الطرقي، التغذية والفعاليات الثقافية، وبرامج الإدماج الاجتماعي بين المغرب والمملكة المتحدة.",
    },
    team: {
      title: "فريقنا | مملكتو شاي المحدودة",
      description: "تعرّف على الأشخاص الذين يقفون خلف مملكتو شاي المحدودة.",
    },
    partners: {
      title: "شركاؤنا | أقوى معاً",
      description: "نتعاون مع منتجين ومؤسسات ثقافية وشركاء لوجستيين موثوقين في المغرب والمملكة المتحدة.",
    },
    contact: {
      title: "اتصل بمملكتو شاي المحدودة | لندن والمغرب",
      description: "تواصل معنا عبر واتساب أو البريد الإلكتروني أو الهاتف لبناء الفرص معنا.",
    },
    faq: {
      title: "الأسئلة الشائعة | مملكتو شاي المحدودة",
      description: "أجوبة عن أنشطتنا وشراكاتنا وعملنا في الإدماج الاجتماعي وطرق التواصل معنا.",
    },
  },
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    activities: "الأنشطة",
    team: "الفريق",
    partners: "الشركاء",
    contact: "اتصل بنا",
    faq: "الأسئلة الشائعة",
    menu: "القائمة",
  },
  cta: {
    exploreMission: "اكتشف رسالتنا",
    discoverActivities: "اكتشف أنشطتنا",
    learnMore: "اقرأ المزيد",
    contactUs: "اتصل بنا",
    becomePartner: "كن شريكاً",
    whatsapp: "راسلنا على واتساب",
    whatsappShort: "واتساب",
    sendMessage: "إرسال الرسالة",
    requestQuote: "طلب عرض سعر",
    viewMaps: "عرض على خرائط جوجل",
    askAssistant: "اسأل مساعدنا",
  },
  home: {
    kicker: "المملكة المغربية · المملكة المتحدة",
    heroTitleA: "جسر ثقافي وتجاري بين",
    heroHighlight: "المغرب",
    heroTitleB: "والمملكة المتحدة.",
    heroSubtitle:
      "نربط التراث بالفرص من خلال الاستيراد والتصدير واللوجستيك وفنون الطهي والثقافة والإدماج الاجتماعي. معاً من أجل مستقبل أكثر ترابطاً وشمولاً.",
    pillars: [
      { title: "الأصل والتتبع", desc: "منتجات أصيلة" },
      { title: "كرم الضيافة", desc: "مشاركة الثقافة" },
      { title: "الامتثال والموثوقية", desc: "آمن وشفاف" },
      { title: "الإدماج والكرامة", desc: "مجتمع أقوى" },
    ],
    activitiesTitle: "نبني الفرص معاً",
    activitiesSubtitle: "أربعة أنشطة، هدف واحد مشترك.",
    stats: [
      { value: "المغرب ⇄ بريطانيا", label: "علاقة دائمة" },
      { value: "٤", label: "أنشطة أساسية" },
      { value: "دولية", label: "شراكات" },
      { value: "إيجابي", label: "أثر اجتماعي" },
    ],
    heritageKicker: "متجذرون في التراث",
    heritageTitle: "متجذرون في التراث. مبنيون للغد.",
    heritageBody:
      "نحن جسر بين مملكتين، ملتزمون بخلق فرص اقتصادية وثقافية واجتماعية مستدامة. من خلال تقدير التراث المغربي الأصيل وبناء شراكات قوية في المملكة المتحدة، نساهم في مستقبل أكثر شمولاً وازدهاراً.",
    heritageQuote: "آفاق مختلفة، هدف مشترك.",
    ctaTitle: "لنبنِ روابط ذات معنى.",
    ctaSubtitle: "تجارة. ثقافة. إنسان. مستقبل أكثر شمولاً.",
  },
  about: {
    kicker: "من نحن",
    title: "عن مملكتو شاي المحدودة",
    subtitle: "مملكتان. رؤية واحدة. مستقبل أكثر شمولاً.",
    storyTitle: "قصتنا",
    storyP1:
      "تأسست مملكتو شاي المحدودة برؤية واضحة: بناء جسر مستدام بين المغرب والمملكة المتحدة عبر التجارة والثقافة والأثر الاجتماعي.",
    storyP2:
      "نؤمن بقوة المنتجات الأصيلة والشراكات الصادقة والفرص الشاملة لخلق مستقبل أقوى وأكثر ترابطاً للمجتمعين.",
    valuesTitle: "قيمنا",
    values: [
      { title: "الأصالة", desc: "منتجات حقيقية وأشخاص حقيقيون" },
      { title: "النزاهة", desc: "شفافية وأخلاق" },
      { title: "الفرصة", desc: "خلق قيمة دائمة" },
      { title: "الإدماج", desc: "مجتمع أكثر عدلاً" },
    ],
    quote: "نربط التراث بالفرص من أجل غد أفضل.",
    missionTitle: "رسالتنا",
    mission:
      "خلق فرص اقتصادية وثقافية واجتماعية مستدامة عبر ربط المغرب والمملكة المتحدة من خلال التجارة وفنون الطهي والثقافة والمبادرات الشاملة.",
    visionTitle: "رؤيتنا",
    vision:
      "أن نكون شريكاً موثوقاً وجسراً رائداً بين المملكتين، معروفاً بأثره الإيجابي على الأفراد والمجتمعات والتبادل الثقافي.",
    journeyTitle: "مسارنا",
    journey: [
      { year: "٢٠٢١", title: "البداية", desc: "رؤية لربط ثقافتين." },
      { year: "٢٠٢٢", title: "أول الشراكات", desc: "بناء شبكة قوية." },
      { year: "٢٠٢٣", title: "توسيع الأنشطة", desc: "أسواق وفرص جديدة." },
      { year: "٢٠٢٤", title: "أثر متزايد", desc: "أشخاص أكثر، فرص أكثر." },
      { year: "اليوم", title: "غد أقوى", desc: "نواصل رسالتنا." },
    ],
  },
  activities: {
    kicker: "أنشطتنا",
    title: "نخلق الفرص معاً",
    subtitle: "أنشطة متنوعة وهدف واحد: روابط أقوى بين المغرب والمملكة المتحدة.",
    items: [
      {
        slug: "import-export",
        title: "الاستيراد والتصدير والنقل الطرقي",
        desc: "نربط الأسواق ونحقق الممكن: حلول لوجستية موثوقة وفعّالة.",
        long: "نربط المنتجين المغاربة بالأسواق البريطانية وندير الرحلة كاملة — التوريد والوثائق والجمارك والنقل الطرقي — لتصل السلع في وقتها وبحالة ممتازة.",
        benefits: [
          "نقل موثوق",
          "مواكبة جمركية",
          "حلول متكاملة",
          "شركاء موثوقون",
          "أسعار تنافسية",
        ],
      },
      {
        slug: "events",
        title: "التغذية والفعاليات الثقافية",
        desc: "مذاق أصيل وتجارب لا تُنسى تجمع الناس.",
        long: "من الحفلات الصغيرة إلى المهرجانات الثقافية الكبرى، نصمم ونقدّم الضيافة المغربية: المطبخ، وحفل الشاي بالنعناع، والصناعة التقليدية، والقفطان الفاسي.",
        benefits: [
          "المطبخ المغربي",
          "برمجة ثقافية",
          "مهرجانات ومعارض",
          "تنظيم كامل للفعاليات",
        ],
      },
      {
        slug: "spices",
        title: "التوابل والنباتات العطرية والطبية",
        desc: "كنوز الطبيعة، مختارة بعناية من المغرب ومشتركة مع العالم.",
        long: "الزعفران والكمون والفلفل الأحمر والأركان ولويزة والأعشاب العطرية، من التعاونيات المغربية مباشرة مع التتبع وشروط عادلة.",
        benefits: [
          "مباشرة من التعاونيات",
          "أصل قابل للتتبع",
          "جودة مراقبة",
          "توريد مستدام",
        ],
      },
      {
        slug: "social-care",
        title: "العمل الاجتماعي والإدماج",
        desc: "تمكين الأشخاص وبناء مجتمع أكثر عدلاً عبر فرص شاملة.",
        long: "ندعم المقاولة النسائية والفئات الهشة والأشخاص في وضعية إعاقة عبر مبادرات إنسانية وشراكات مؤسساتية.",
        benefits: [
          "المقاولة النسائية",
          "إدماج ذوي الإعاقة",
          "شراكات مؤسساتية",
          "برامج مجتمعية",
        ],
      },
    ],
    detailOverview: "نظرة عامة",
    detailBenefits: "أهم المزايا",
    workTitle: "هل ترغب في العمل معنا؟",
    workSubtitle: "لنخلق الفرص معاً.",
  },
  team: {
    kicker: "فريقنا",
    title: "فريق شغوف لأثر دائم",
    subtitle: "أشخاص ملتزمون. قيم مشتركة. غد أقوى.",
    quote: "مهارات مختلفة. رسالة مشتركة. غد أكثر إشراقاً.",
    roles: {
      naima: "المؤسِّسة والرئيسة",
      aziza: "سفيرة القفطان المغربي الفاسي في لندن",
      soumia: "منظّمة المهرجانات الثقافية والفنية",
      soumiya: "مسؤولة المبادرات الخيرية وإدماج ذوي الإعاقة",
      anouar: "المنسّق الرئيسي",
      zineb: "مصوّرة",
    },
    bios: {
      naima:
        "خبيرة في التغذية والمستحضرات التجميلية الطبيعية والمقاولة المجتمعية منذ 2012، مع خبرة واسعة في العمل مع مؤسسات عمومية مثل الوكالة الوطنية لإنعاش التشغيل (ANAPEC).",
      aziza:
        "تحافظ على اللباس المغربي التقليدي وتعرّف به، وخاصة القفطان الفاسي، ثقافياً وفنياً في المملكة المتحدة.",
      soumia:
        "تنسّق المعارض والفعاليات الدولية التي تنقل الثقافة المغربية والصناعة التقليدية إلى جمهور عالمي.",
      soumiya:
        "تقود برامجنا الإنسانية والاجتماعية، مع التركيز على تمكين الأشخاص في وضعية إعاقة وإدماجهم مهنياً واجتماعياً.",
      anouar:
        "يدير تخطيط المشاريع وتنفيذها، ويضمن تواصلاً سلساً بين الشركاء والمؤسسات والفرق الإدارية.",
      zineb: "توثّق مهرجاناتنا ومشاريعنا الثقافية وشراكاتنا بالصورة والحكاية البصرية.",
    },
  },
  partners: {
    kicker: "شركاؤنا",
    title: "أقوى معاً",
    subtitle: "نتعاون مع شركاء موثوقين لخلق فرص حقيقية وقيمة دائمة.",
    items: [
      { name: "المنتجات الطازجة والصناعة الغذائية", desc: "طازج ومستدام" },
      { name: "التجارة واللوجستيك", desc: "روابط موثوقة" },
      { name: "التعاونيات والمنتجون المغاربة", desc: "أصيل ومستدام" },
      { name: "الصناع التقليديون", desc: "التراث المغربي" },
      { name: "شركاء ثقافيون بريطانيون", desc: "ثقافة وتبادل" },
      { name: "شركاء اجتماعيون ومجتمعيون", desc: "إدماج ودعم" },
    ],
    becomeTitle: "كن شريكاً",
    becomeSubtitle: "نحن دائماً منفتحون على تعاونات جديدة. لنبنِ معاً مستقبلاً أقوى.",
  },
  contact: {
    kicker: "اتصل بنا",
    title: "لنبنِ الروابط",
    subtitle: "يسعدنا تواصلك معنا. اتصل بنا ولنخلق الفرص معاً.",
    address: "العنوان",
    email: "البريد الإلكتروني",
    phone: "الهاتف / واتساب",
    company: "رقم الشركة",
    formTitle: "أرسل لنا رسالة",
    name: "اسمك",
    emailField: "بريدك الإلكتروني",
    subject: "الموضوع",
    message: "رسالتك",
    locationTitle: "موقعنا",
    sent: "شكراً لك! تم تحضير رسالتك — سنكمل على واتساب.",
    fillAll: "المرجو إدخال الاسم والبريد الإلكتروني والرسالة.",
    formNote: "الإرسال يفتح واتساب برسالتك حتى نجيبك بسرعة.",
  },
  faq: {
    kicker: "الأسئلة الشائعة",
    title: "أجوبة سريعة",
    subtitle: "كل ما تحتاج معرفته للعمل معنا.",
    items: [
      {
        q: "ما هي مملكتو شاي المحدودة؟",
        a: "مملكتو شاي المحدودة (Kingdom of Tea Limited) شركة مغربية بريطانية تعمل كجسر اقتصادي وثقافي بين المغرب والمملكة المتحدة، مسجَّلة في لندن برقم 16881675.",
      },
      {
        q: "ما هي أنشطتكم الرئيسية؟",
        a: "استيراد وتصدير المنتجات المغربية، النقل الطرقي واللوجستيك، التغذية والفعاليات الثقافية، وبرامج الإدماج الاجتماعي الداعمة للمقاولة النسائية وللأشخاص في وضعية إعاقة.",
      },
      {
        q: "هل تعملون مع الأفراد؟",
        a: "نركّز على الشراكات المهنية والمؤسساتية والجمعوية، لكن كل استفسار مرحّب به — راسلنا على واتساب +44 7351 157724 وسنوجّهك.",
      },
      {
        q: "كيف أصبح شريكاً؟",
        a: "أرسل لنا رسالة عبر صفحة الاتصال أو واتساب مع وصف موجز لنشاطك، وسيعود إليك فريق التنسيق.",
      },
      {
        q: "هل توفّرون فرصاً للإدماج الاجتماعي؟",
        a: "نعم. تدعم مبادراتنا الخيرية الفئات الهشة والأشخاص في وضعية إعاقة عبر الإدماج المهني والتكوين والشراكات المؤسساتية.",
      },
      {
        q: "كيف يمكنني التواصل معكم؟",
        a: "عبر واتساب أو الهاتف +44 7351 157724، أو بالبريد mamlakatochaye@gmail.com و mamlakatochayeltd26@outlook.com، أو في 124-128 City Road, London, EC1V 2NX.",
      },
    ],
  },
  footer: {
    tagline: "نربط الناس والثقافات والفرص",
    quickLinks: "التنقل",
    contactTitle: "الاتصال",
    followTitle: "ابقَ قريباً",
    rights: "جميع الحقوق محفوظة.",
  },
  assistant: {
    launcher: "المساعد الذكي",
    title: "مساعد مملكتو",
    subtitle: "اسأل بأي لغة — الأجوبة مستندة إلى ملف الشركة.",
    placeholder: "اكتب سؤالك…",
    greeting:
      "مرحباً! أنا مساعد مملكتو شاي. اسألني عن أنشطتنا أو فريقنا أو شراكاتنا أو طرق التواصل معنا — بأي لغة تريد.",
    thinking: "جارٍ التفكير…",
    error: "عذراً، حدث خطأ. حاول مرة أخرى أو راسلنا على واتساب.",
    send: "إرسال",
    close: "إغلاق",
    suggestions: ["ماذا تفعل الشركة؟", "من هي المؤسِّسة؟", "كيف أصبح شريكاً؟"],
  },
  notFound: {
    title: "الصفحة غير موجودة",
    desc: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    back: "العودة إلى الرئيسية",
  },
  wa: {
    general: "مرحباً مملكتو شاي المحدودة، أرغب في المزيد من المعلومات.",
    partner: "مرحباً مملكتو شاي المحدودة، أرغب في أن أصبح شريكاً.",
    quote: "مرحباً مملكتو شاي المحدودة، أرغب في عرض سعر لخدماتكم.",
  },
};

export type Dict = typeof en;

export const dictionaries: Record<Lang, Dict> = { en, fr, ar };
