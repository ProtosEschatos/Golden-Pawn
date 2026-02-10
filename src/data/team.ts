import { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Robert Goldstein',
    title: {
      en: 'Founder & Head Appraiser',
      de: 'Gründer & Chefgutachter',
      hr: 'Osnivač i glavni procjenitelj',
      it: 'Fondatore e Perito Capo',
    },
    bio: {
      en: '30+ years in the pawn industry. GIA Graduate Gemologist. Built Golden Pawn from a small shop into a trusted institution.',
      de: 'Über 30 Jahre in der Pfandbranche. GIA Graduierter Gemmologe.',
      hr: 'Više od 30 godina u zalagaoničkoj industriji. GIA diplomirani gemolog.',
      it: 'Oltre 30 anni nel settore dei pegni. Gemmologo Diplomato GIA.',
    },
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    specialties: ['Jewelry Appraiser', 'GIA Gemologist', 'Business Strategy'],
  },
  {
    id: 'tm-2',
    name: 'Sarah Mitchell',
    title: {
      en: 'Senior Loan Officer',
      de: 'Leitende Kreditbeauftragte',
      hr: 'Viša kreditna službenica',
      it: 'Responsabile Prestiti Senior',
    },
    bio: {
      en: '15 years of experience in financial services. Specializes in fair loan structuring and customer care. Fluent in English and German.',
      de: '15 Jahre Erfahrung im Finanzwesen.',
      hr: '15 godina iskustva u financijskim uslugama.',
      it: '15 anni di esperienza nei servizi finanziari.',
    },
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    specialties: ['Loan Processing', 'Customer Relations', 'Financial Planning'],
  },
  {
    id: 'tm-3',
    name: 'David Chen',
    title: {
      en: 'Electronics & Tech Specialist',
      de: 'Elektronik- & Technik-Spezialist',
      hr: 'Specijalist za elektroniku i tehnologiju',
      it: 'Specialista Elettronica e Tecnologia',
    },
    bio: {
      en: 'Former Apple Genius Bar technician. Expert in electronics valuation, testing, and authentication. Handles all tech items.',
      de: 'Ehemaliger Apple Genius Bar Techniker.',
      hr: 'Bivši Apple Genius Bar tehničar.',
      it: 'Ex tecnico Apple Genius Bar.',
    },
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    specialties: ['Electronics Appraiser', 'Tech Authentication', 'Repair Assessment'],
  },
  {
    id: 'tm-4',
    name: 'Isabella Romano',
    title: {
      en: 'Auction Manager & Art Specialist',
      de: 'Auktionsmanagerin & Kunstspezialistin',
      hr: 'Voditeljica aukcija i specijalistica za umjetnost',
      it: 'Responsabile Aste e Specialista d\'Arte',
    },
    bio: {
      en: 'Former Christie\'s associate. Manages all auctions, from listing to post-sale. Expert in art, antiques, and luxury goods authentication.',
      de: 'Ehemalige Christie\'s-Mitarbeiterin.',
      hr: 'Bivša suradnica Christie\'s aukcijske kuće.',
      it: 'Ex collaboratrice di Christie\'s.',
    },
    photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    specialties: ['Auction Management', 'Art Authentication', 'Luxury Goods'],
  },
  {
    id: 'tm-5',
    name: 'Marcus Wagner',
    title: {
      en: 'Firearms & Collectibles Expert',
      de: 'Schusswaffen- & Sammlerstück-Experte',
      hr: 'Stručnjak za vatreno oružje i kolekcionarstvo',
      it: 'Esperto Armi da Fuoco e Collezionismo',
    },
    bio: {
      en: 'Licensed firearms dealer and certified appraiser. 20 years of experience with collectible firearms, coins, and memorabilia.',
      de: 'Lizenzierter Waffenhändler und zertifizierter Gutachter.',
      hr: 'Licencirani trgovac oružjem i certificirani procjenitelj.',
      it: 'Commerciante di armi autorizzato e perito certificato.',
    },
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    specialties: ['Firearms Expert', 'Coin Appraiser', 'Collectibles Authentication'],
  },
];
