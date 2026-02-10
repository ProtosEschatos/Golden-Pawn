import { FAQItem } from '@/types';

export const faqItems: FAQItem[] = [
  // PAWN FAQs
  {
    id: 'faq-1',
    question: {
      en: 'How does a pawn loan work?',
      de: 'Wie funktioniert ein Pfandkredit?',
      hr: 'Kako funkcionira zalagaonički kredit?',
      it: 'Come funziona un prestito su pegno?',
    },
    answer: {
      en: 'Bring your valuable item to our shop. Our certified appraiser will evaluate it and offer you a loan based on its value. If you accept, you receive cash immediately. You have 90 days to repay the loan plus interest and reclaim your item. No credit check required.',
      de: 'Bringen Sie Ihren wertvollen Gegenstand in unser Geschäft. Unser zertifizierter Gutachter bewertet ihn und bietet Ihnen einen Kredit basierend auf seinem Wert an. Bei Annahme erhalten Sie sofort Bargeld. Sie haben 90 Tage, um den Kredit plus Zinsen zurückzuzahlen.',
      hr: 'Donesete svoj vrijedan predmet u našu trgovinu. Naš certificirani procjenitelj će ga procijeniti i ponuditi vam kredit na temelju njegove vrijednosti. Ako prihvatite, dobivate gotovinu odmah. Imate 90 dana za otplatu kredita plus kamatu.',
      it: 'Porta il tuo oggetto di valore nel nostro negozio. Il nostro perito certificato lo valuterà e ti offrirà un prestito basato sul suo valore. Se accetti, ricevi contanti immediatamente. Hai 90 giorni per rimborsare il prestito più gli interessi.',
    },
    category: 'pawn',
  },
  {
    id: 'faq-2',
    question: {
      en: 'What items do you accept as collateral?',
      de: 'Welche Gegenstände akzeptieren Sie als Sicherheit?',
      hr: 'Koje predmete prihvaćate kao zalog?',
      it: 'Quali oggetti accettate come garanzia?',
    },
    answer: {
      en: 'We accept jewelry (gold, silver, diamonds, watches), electronics (laptops, phones, cameras), musical instruments, tools, collectibles, luxury items (designer bags, premium watches), art, and licensed firearms. Items must be in working condition and legally owned.',
      de: 'Wir akzeptieren Schmuck, Elektronik, Musikinstrumente, Werkzeuge, Sammlerstücke, Luxusgüter, Kunst und lizenzierte Schusswaffen.',
      hr: 'Prihvaćamo nakit, elektroniku, glazbene instrumente, alate, kolekcionarstvo, luksuzne predmete, umjetnine i licencirano vatreno oružje.',
      it: 'Accettiamo gioielli, elettronica, strumenti musicali, utensili, collezionismo, articoli di lusso, arte e armi da fuoco con licenza.',
    },
    category: 'pawn',
  },
  {
    id: 'faq-3',
    question: {
      en: 'What happens if I can\'t repay my loan on time?',
      de: 'Was passiert, wenn ich meinen Kredit nicht rechtzeitig zurückzahlen kann?',
      hr: 'Što se događa ako ne mogu otplatiti kredit na vrijeme?',
      it: 'Cosa succede se non riesco a rimborsare il prestito in tempo?',
    },
    answer: {
      en: 'You have several options: extend the loan for another 90 days by paying the accrued interest, make a partial payment, or let the item go. If you default, the item becomes our property and may be sold. Your credit score is never affected.',
      de: 'Sie haben mehrere Möglichkeiten: Verlängern Sie den Kredit um weitere 90 Tage, leisten Sie eine Teilzahlung oder geben Sie den Gegenstand auf.',
      hr: 'Imate nekoliko opcija: produžite kredit za još 90 dana plaćanjem narasle kamate, izvršite djelomičnu uplatu ili prepustite predmet.',
      it: 'Hai diverse opzioni: prorogare il prestito per altri 90 giorni, effettuare un pagamento parziale o cedere l\'oggetto.',
    },
    category: 'pawn',
  },
  {
    id: 'faq-4',
    question: {
      en: 'What interest rate do you charge?',
      de: 'Welchen Zinssatz berechnen Sie?',
      hr: 'Koju kamatnu stopu naplaćujete?',
      it: 'Quale tasso di interesse applicate?',
    },
    answer: {
      en: 'Our interest rates range from 2% to 5% per month, depending on the item value and loan amount. We are fully transparent — all fees are disclosed upfront before you agree to the loan. No hidden charges.',
      de: 'Unsere Zinssätze liegen zwischen 2% und 5% pro Monat.',
      hr: 'Naše kamatne stope kreću se od 2% do 5% mjesečno.',
      it: 'I nostri tassi di interesse vanno dal 2% al 5% al mese.',
    },
    category: 'pawn',
  },
  {
    id: 'faq-5',
    question: {
      en: 'Can I sell my item outright instead of pawning it?',
      de: 'Kann ich meinen Gegenstand direkt verkaufen, anstatt ihn zu verpfänden?',
      hr: 'Mogu li prodati svoj predmet umjesto da ga založim?',
      it: 'Posso vendere il mio oggetto direttamente invece di darlo in pegno?',
    },
    answer: {
      en: 'Absolutely! If you prefer a one-time sale, we offer competitive buyout prices. You\'ll typically receive 60-80% of the item\'s retail value, paid in cash on the spot. No waiting, no loan terms.',
      de: 'Natürlich! Wir bieten wettbewerbsfähige Ankaufspreise.',
      hr: 'Naravno! Nudimo konkurentne otkupne cijene.',
      it: 'Assolutamente! Offriamo prezzi di acquisto competitivi.',
    },
    category: 'pawn',
  },
  // AUCTION FAQs
  {
    id: 'faq-6',
    question: {
      en: 'How do auctions work?',
      de: 'Wie funktionieren die Auktionen?',
      hr: 'Kako funkcioniraju aukcije?',
      it: 'Come funzionano le aste?',
    },
    answer: {
      en: 'Browse our live auctions, create a free account, and place your bid. Each item has a minimum bid increment. Auctions run for 3-10 days. If someone outbids you, you\'ll be notified instantly. The highest bidder at the end wins. Payment is processed through secure Stripe checkout.',
      de: 'Durchstöbern Sie unsere Live-Auktionen, erstellen Sie ein Konto und bieten Sie mit.',
      hr: 'Pregledajte naše live aukcije, napravite besplatan račun i ponudite svoju cijenu.',
      it: 'Sfoglia le nostre aste live, crea un account gratuito e fai la tua offerta.',
    },
    category: 'auction',
  },
  {
    id: 'faq-7',
    question: {
      en: 'What is the auto-extend feature?',
      de: 'Was ist die automatische Verlängerungsfunktion?',
      hr: 'Što je funkcija automatskog produženja?',
      it: 'Cos\'è la funzione di estensione automatica?',
    },
    answer: {
      en: 'To prevent last-second sniping, if a bid is placed in the last 5 minutes of an auction, the timer automatically extends by 5 minutes. This gives all bidders a fair chance to respond.',
      de: 'Um Last-Second-Sniping zu verhindern, wird die Auktion automatisch um 5 Minuten verlängert.',
      hr: 'Da bi se spriječilo nadmetanje u zadnjoj sekundi, aukcija se automatski produžuje za 5 minuta.',
      it: 'Per prevenire le offerte dell\'ultimo secondo, l\'asta viene automaticamente estesa di 5 minuti.',
    },
    category: 'auction',
  },
  {
    id: 'faq-8',
    question: {
      en: 'Is there a buyer\'s premium?',
      de: 'Gibt es eine Käuferprämie?',
      hr: 'Postoji li kupčeva premija?',
      it: 'C\'è un premio per l\'acquirente?',
    },
    answer: {
      en: 'No buyer\'s premium! The winning bid is the price you pay, plus applicable shipping costs if you choose delivery instead of in-store pickup.',
      de: 'Keine Käuferprämie! Der Zuschlagspreis ist der Preis, den Sie zahlen.',
      hr: 'Nema kupčeve premije! Pobjednička ponuda je cijena koju plaćate.',
      it: 'Nessun premio per l\'acquirente! L\'offerta vincente è il prezzo che paghi.',
    },
    category: 'auction',
  },
  {
    id: 'faq-9',
    question: {
      en: 'Can I inspect items before bidding?',
      de: 'Kann ich Gegenstände vor dem Bieten inspizieren?',
      hr: 'Mogu li pregledati predmete prije nadmetanja?',
      it: 'Posso ispezionare gli oggetti prima di fare un\'offerta?',
    },
    answer: {
      en: 'Yes! All items are available for in-person inspection during business hours. Just visit our shop and ask to see any item listed in our auctions. We also provide detailed photos, condition reports, and provenance documentation online.',
      de: 'Ja! Alle Gegenstände können während der Geschäftszeiten persönlich besichtigt werden.',
      hr: 'Da! Svi predmeti dostupni su za osobni pregled tijekom radnog vremena.',
      it: 'Sì! Tutti gli oggetti sono disponibili per l\'ispezione durante l\'orario lavorativo.',
    },
    category: 'auction',
  },
  {
    id: 'faq-10',
    question: {
      en: 'What payment methods do you accept?',
      de: 'Welche Zahlungsmethoden akzeptieren Sie?',
      hr: 'Koje načine plaćanja prihvaćate?',
      it: 'Quali metodi di pagamento accettate?',
    },
    answer: {
      en: 'For auction wins and buy-now purchases, we accept all major credit/debit cards through Stripe (Visa, Mastercard, AMEX). For in-store transactions (pawn loans, sell-to-us), we also accept cash and bank transfers.',
      de: 'Für Auktionsgewinne akzeptieren wir alle gängigen Kreditkarten über Stripe.',
      hr: 'Za aukcijske pobjede prihvaćamo sve glavne kreditne kartice putem Stripea.',
      it: 'Per le vincite all\'asta accettiamo tutte le principali carte di credito tramite Stripe.',
    },
    category: 'general',
  },
  {
    id: 'faq-11',
    question: {
      en: 'Do you ship items?',
      de: 'Versenden Sie Gegenstände?',
      hr: 'Šaljete li predmete?',
      it: 'Spedite gli oggetti?',
    },
    answer: {
      en: 'Yes, we offer insured shipping for most items. Shipping costs depend on the item size, weight, and destination. All shipments are fully insured. Some items (large instruments, firearms) may require in-store pickup.',
      de: 'Ja, wir bieten versicherten Versand für die meisten Gegenstände an.',
      hr: 'Da, nudimo osigurani transport za većinu predmeta.',
      it: 'Sì, offriamo spedizioni assicurate per la maggior parte degli oggetti.',
    },
    category: 'general',
  },
  {
    id: 'faq-12',
    question: {
      en: 'Are the items authenticated?',
      de: 'Sind die Gegenstände authentifiziert?',
      hr: 'Jesu li predmeti autentificirani?',
      it: 'Gli oggetti sono autenticati?',
    },
    answer: {
      en: 'Every item goes through our authentication process. Jewelry is tested and appraised by GIA-trained gemologists. Electronics are tested for functionality. Designer items are verified for authenticity. Certificates and documentation are provided where available.',
      de: 'Jeder Gegenstand durchläuft unseren Authentifizierungsprozess.',
      hr: 'Svaki predmet prolazi naš postupak autentifikacije.',
      it: 'Ogni oggetto passa attraverso il nostro processo di autenticazione.',
    },
    category: 'general',
  },
  {
    id: 'faq-13',
    question: {
      en: 'What are your business hours?',
      de: 'Was sind Ihre Öffnungszeiten?',
      hr: 'Koje je vaše radno vrijeme?',
      it: 'Quali sono i vostri orari di apertura?',
    },
    answer: {
      en: 'Monday to Friday: 9:00 AM – 6:00 PM, Saturday: 10:00 AM – 4:00 PM, Sunday: Closed. Online auctions run 24/7. Our live chat is available during business hours.',
      de: 'Montag bis Freitag: 9:00 – 18:00, Samstag: 10:00 – 16:00, Sonntag: Geschlossen.',
      hr: 'Ponedjeljak – petak: 9:00 – 18:00, Subota: 10:00 – 16:00, Nedjelja: Zatvoreno.',
      it: 'Lunedì-Venerdì: 9:00-18:00, Sabato: 10:00-16:00, Domenica: Chiuso.',
    },
    category: 'general',
  },
  {
    id: 'faq-14',
    question: {
      en: 'Is my personal information secure?',
      de: 'Sind meine persönlichen Daten sicher?',
      hr: 'Jesu li moji osobni podaci sigurni?',
      it: 'Le mie informazioni personali sono al sicuro?',
    },
    answer: {
      en: 'Absolutely. We use industry-standard encryption and comply with GDPR/CCPA regulations. Your financial information is processed securely through Stripe. We never share your data with third parties.',
      de: 'Absolut. Wir verwenden branchenübliche Verschlüsselung und entsprechen den DSGVO-Vorschriften.',
      hr: 'Apsolutno. Koristimo industrijsku enkripciju i usklađeni smo s GDPR propisima.',
      it: 'Assolutamente. Utilizziamo crittografia standard del settore e rispettiamo le normative GDPR.',
    },
    category: 'general',
  },
  {
    id: 'faq-15',
    question: {
      en: 'Do I need an account to bid?',
      de: 'Brauche ich ein Konto zum Bieten?',
      hr: 'Trebam li račun za nadmetanje?',
      it: 'Ho bisogno di un account per fare offerte?',
    },
    answer: {
      en: 'Yes, you need to create a free account to place bids. This helps us ensure fair bidding and notify winners. You can browse all items and watch auctions without an account.',
      de: 'Ja, Sie müssen ein kostenloses Konto erstellen.',
      hr: 'Da, trebate napraviti besplatan račun za nadmetanje.',
      it: 'Sì, devi creare un account gratuito per fare offerte.',
    },
    category: 'auction',
  },
];

export function getFAQsByCategory(category: string) {
  return faqItems.filter(f => f.category === category);
}
