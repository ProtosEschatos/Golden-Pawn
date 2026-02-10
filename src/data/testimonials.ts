import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    customerName: 'Maria Schneider',
    rating: 5,
    comment: {
      en: 'Needed quick cash for an emergency. Brought in my gold necklace, got a fair appraisal and walked out with money in 20 minutes. Professional and respectful service.',
      de: 'Brauchte schnell Geld für einen Notfall. Habe meine Goldkette gebracht, eine faire Bewertung bekommen und bin in 20 Minuten mit Geld rausgegangen.',
      hr: 'Trebala sam brzo gotovinu za hitni slučaj. Donijela sam svoju zlatnu ogrlicu, dobila poštenu procjenu i izašla s novcem za 20 minuta.',
      it: 'Avevo bisogno di contanti rapidi per un\'emergenza. Ho portato la mia collana d\'oro, ho ricevuto una valutazione equa e sono uscita con i soldi in 20 minuti.',
    },
    serviceType: 'pawn_loan',
  },
  {
    id: 't-2',
    customerName: 'Thomas Weber',
    rating: 5,
    comment: {
      en: 'Won a beautiful vintage watch at auction for a great price. The whole bidding process was exciting and transparent. Will definitely bid again!',
      de: 'Habe eine wunderschöne Vintage-Uhr bei der Auktion zu einem tollen Preis gewonnen. Der gesamte Bietprozess war aufregend und transparent.',
      hr: 'Osvojio sam prekrasan vintage sat na aukciji po odličnoj cijeni. Cijeli proces nadmetanja bio je uzbudljiv i transparentan.',
      it: 'Ho vinto un bellissimo orologio vintage all\'asta a un ottimo prezzo. L\'intero processo di offerta è stato emozionante e trasparente.',
    },
    serviceType: 'auction_purchase',
  },
  {
    id: 't-3',
    customerName: 'Ana Kovačević',
    rating: 5,
    comment: {
      en: 'I\'ve been a customer for 3 years. Their pawn loans are straightforward — no hidden fees, fair interest rates. Best pawn shop in the city.',
      de: 'Ich bin seit 3 Jahren Kundin. Ihre Pfandkredite sind unkompliziert — keine versteckten Gebühren, faire Zinsen.',
      hr: 'Kupac sam već 3 godine. Njihovi zalagaonički krediti su jednostavni — nema skrivenih naknada, poštene kamatne stope.',
      it: 'Sono cliente da 3 anni. I loro prestiti su pegno sono chiari — nessuna commissione nascosta, tassi d\'interesse equi.',
    },
    serviceType: 'pawn_loan',
  },
  {
    id: 't-4',
    customerName: 'Marco Rossi',
    rating: 4,
    comment: {
      en: 'Bought a Gibson guitar from their shop. Excellent condition, exactly as described. Fair price compared to other vintage guitar dealers.',
      de: 'Habe eine Gibson-Gitarre in ihrem Geschäft gekauft. Ausgezeichneter Zustand, genau wie beschrieben.',
      hr: 'Kupio sam Gibson gitaru u njihovoj trgovini. Izvrsno stanje, točno kako je opisano.',
      it: 'Ho comprato una chitarra Gibson dal loro negozio. Condizioni eccellenti, esattamente come descritto.',
    },
    serviceType: 'auction_purchase',
  },
  {
    id: 't-5',
    customerName: 'Sophie Mueller',
    rating: 5,
    comment: {
      en: 'Their jewelry appraisal service is top-notch. Very knowledgeable staff, explained everything about my grandmother\'s ring. Even helped me get insurance documentation.',
      de: 'Ihr Schmuckbewertungsservice ist erstklassig. Sehr sachkundiges Personal.',
      hr: 'Njihova usluga procjene nakita je vrhunska. Vrlo stručno osoblje.',
      it: 'Il loro servizio di valutazione gioielli è di prim\'ordine. Personale molto competente.',
    },
    serviceType: 'pawn_loan',
  },
  {
    id: 't-6',
    customerName: 'Luka Novak',
    rating: 5,
    comment: {
      en: 'Sold my old laptop and camera gear. Got a better price than what online buyback services offered. Quick, easy, and they handle everything.',
      de: 'Habe meinen alten Laptop und meine Kameraausrüstung verkauft. Besserer Preis als Online-Ankaufsservices.',
      hr: 'Prodao sam svoj stari laptop i opremu za kameru. Dobio sam bolju cijenu nego što nude online otkupni servisi.',
      it: 'Ho venduto il mio vecchio laptop e l\'attrezzatura fotografica. Ho ottenuto un prezzo migliore rispetto ai servizi di riacquisto online.',
    },
    serviceType: 'pawn_loan',
  },
  {
    id: 't-7',
    customerName: 'Elena Fischer',
    rating: 4,
    comment: {
      en: 'Snagged a designer bag at their auction for 40% less than retail. Authenticated and in perfect condition. The auction alerts email is super useful!',
      de: 'Habe eine Designertasche bei der Auktion für 40% weniger als den Einzelhandelspreis ergattert.',
      hr: 'Uhvatila sam dizajnersku torbu na aukciji za 40% manje od maloprodajne cijene.',
      it: 'Ho preso una borsa firmata alla loro asta al 40% in meno del prezzo al dettaglio.',
    },
    serviceType: 'auction_purchase',
  },
  {
    id: 't-8',
    customerName: 'Ivan Horvat',
    rating: 5,
    comment: {
      en: 'As a collector, this is my go-to shop. Their coin auctions always have rare finds. The online bidding system works perfectly. Transparent bid history.',
      de: 'Als Sammler ist dies mein Stammgeschäft. Die Münzauktionen haben immer seltene Funde.',
      hr: 'Kao kolekcionar, ovo je moja omiljena trgovina. Aukcije novčića uvijek imaju rijetke nalaze.',
      it: 'Come collezionista, questo è il mio negozio di riferimento. Le aste di monete hanno sempre pezzi rari.',
    },
    serviceType: 'auction_purchase',
  },
  {
    id: 't-9',
    customerName: 'Giulia Bianchi',
    rating: 5,
    comment: {
      en: 'Pawned my watch when I was between jobs. Got it back 2 months later when I was back on my feet. Fair terms, no pressure. They really care about customers.',
      de: 'Habe meine Uhr verpfändet, als ich zwischen Jobs war. Habe sie 2 Monate später zurückbekommen.',
      hr: 'Založila sam svoj sat kad sam bila bez posla. Vratila sam ga 2 mjeseca kasnije. Pošteni uvjeti, bez pritiska.',
      it: 'Ho dato in pegno il mio orologio quando ero tra un lavoro e l\'altro. L\'ho recuperato 2 mesi dopo.',
    },
    serviceType: 'pawn_loan',
  },
  {
    id: 't-10',
    customerName: 'Peter Schmidt',
    rating: 4,
    comment: {
      en: 'Great selection of power tools at their shop. Bought a complete Milwaukee set for much less than new. Everything was tested and working perfectly.',
      de: 'Tolle Auswahl an Elektrowerkzeugen im Geschäft. Habe ein komplettes Milwaukee-Set für viel weniger als neu gekauft.',
      hr: 'Odličan izbor električnih alata u trgovini. Kupio sam kompletan Milwaukee set za puno manje nego novi.',
      it: 'Ottima selezione di utensili elettrici nel loro negozio. Ho comprato un set Milwaukee completo a molto meno del nuovo.',
    },
    serviceType: 'auction_purchase',
  },
];
