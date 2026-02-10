import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: {
      en: 'How Pawn Loans Work: A Complete Guide',
      de: 'Wie Pfandkredite funktionieren: Ein vollständiger Leitfaden',
      hr: 'Kako funkcioniraju zalagaonički krediti: Kompletni vodič',
      it: 'Come funzionano i prestiti su pegno: Una guida completa',
    },
    slug: 'how-pawn-loans-work',
    excerpt: {
      en: 'Everything you need to know about pawn loans — from how they work to what items are accepted and how to get the best value.',
      de: 'Alles, was Sie über Pfandkredite wissen müssen.',
      hr: 'Sve što trebate znati o zalagaoničkim kreditima.',
      it: 'Tutto ciò che devi sapere sui prestiti su pegno.',
    },
    content: {
      en: `<h2>What is a Pawn Loan?</h2>
<p>A pawn loan is a secured loan where you use a personal item as collateral. Unlike bank loans, there's no credit check, no employment verification, and no lengthy application process. You bring in your item, get it appraised, and walk out with cash in minutes.</p>

<h2>The Process</h2>
<ol>
<li><strong>Bring Your Item</strong> — Visit our shop with the item you'd like to use as collateral.</li>
<li><strong>Free Appraisal</strong> — Our certified appraisers evaluate your item and make a loan offer.</li>
<li><strong>Accept & Get Cash</strong> — If you agree to the terms, you receive cash immediately.</li>
<li><strong>Repay & Reclaim</strong> — Pay back the loan plus interest within 90 days to get your item back.</li>
</ol>

<h2>Tips for Getting the Best Value</h2>
<ul>
<li>Bring original packaging, receipts, and certificates</li>
<li>Clean and present your item well</li>
<li>Know your item's market value beforehand</li>
<li>Consider the time of year — some items are more valuable seasonally</li>
</ul>`,
      de: '<h2>Was ist ein Pfandkredit?</h2><p>Ein Pfandkredit ist ein gesicherter Kredit, bei dem Sie einen persönlichen Gegenstand als Sicherheit verwenden...</p>',
      hr: '<h2>Što je zalagaonički kredit?</h2><p>Zalagaonički kredit je osigurani kredit u kojem koristite osobni predmet kao zalog...</p>',
      it: '<h2>Cos\'è un prestito su pegno?</h2><p>Un prestito su pegno è un prestito garantito in cui si utilizza un oggetto personale come garanzia...</p>',
    },
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800',
    author: 'Robert Goldstein',
    category: 'Guides',
    publishedAt: new Date(Date.now() - 5 * 86400000).toISOString(),
  },
  {
    id: 'blog-2',
    title: {
      en: 'Top 5 Tips for Selling Your Jewelry',
      de: 'Die 5 besten Tipps zum Verkauf Ihres Schmucks',
      hr: '5 najboljih savjeta za prodaju nakita',
      it: 'I 5 migliori consigli per vendere i tuoi gioielli',
    },
    slug: 'tips-selling-jewelry',
    excerpt: {
      en: 'Maximize the value of your jewelry when selling. Expert tips from our GIA-certified gemologist on getting the best price.',
      de: 'Maximieren Sie den Wert Ihres Schmucks beim Verkauf.',
      hr: 'Maksimizirajte vrijednost svog nakita pri prodaji.',
      it: 'Massimizza il valore dei tuoi gioielli quando vendi.',
    },
    content: {
      en: `<h2>Know What You Have</h2>
<p>Before selling, understand what you're working with. Get your jewelry appraised by a certified gemologist. Know the karat weight, stone quality, and current market prices for gold and silver.</p>

<h2>1. Get Multiple Appraisals</h2>
<p>Don't settle for the first offer. Visit at least 2-3 reputable buyers to compare offers.</p>

<h2>2. Clean Your Jewelry</h2>
<p>A clean piece of jewelry shows better and can command a higher price. Use appropriate cleaning methods for each metal type.</p>

<h2>3. Bring Documentation</h2>
<p>Original receipts, GIA certificates, and appraisal documents significantly increase value and buyer confidence.</p>

<h2>4. Understand Gold Pricing</h2>
<p>Gold prices fluctuate daily. Check the current spot price before selling. Most buyers offer 70-90% of melt value for gold.</p>

<h2>5. Consider the Whole Piece</h2>
<p>Sometimes a piece is worth more than its melt value. Designer pieces, antiques, and unique items may command premium prices.</p>`,
      de: '<p>Tipps zum Verkauf von Schmuck...</p>',
      hr: '<p>Savjeti za prodaju nakita...</p>',
      it: '<p>Consigli per vendere gioielli...</p>',
    },
    imageUrl: 'https://images.unsplash.com/photo-1515562141589-67f0d972ca37?w=800',
    author: 'Sarah Mitchell',
    category: 'Tips',
    publishedAt: new Date(Date.now() - 12 * 86400000).toISOString(),
  },
  {
    id: 'blog-3',
    title: {
      en: 'Online Auctions vs. Traditional: What\'s Better for Buyers?',
      de: 'Online-Auktionen vs. Traditionell: Was ist besser für Käufer?',
      hr: 'Online aukcije vs. tradicionalne: Što je bolje za kupce?',
      it: 'Aste online vs. tradizionali: Cosa è meglio per gli acquirenti?',
    },
    slug: 'online-vs-traditional-auctions',
    excerpt: {
      en: 'A comparison of online and in-person auctions. Discover which format offers better deals, transparency, and convenience.',
      de: 'Ein Vergleich von Online- und Präsenzauktionen.',
      hr: 'Usporedba online i osobnih aukcija.',
      it: 'Un confronto tra aste online e in presenza.',
    },
    content: {
      en: `<h2>The Rise of Online Auctions</h2>
<p>Online auctions have revolutionized how people buy and sell valuable items. But are they always the best option? Let's compare.</p>

<h2>Convenience</h2>
<p>Online auctions win hands down. Bid from anywhere, at any time. No need to travel to an auction house or wait for specific sale dates.</p>

<h2>Transparency</h2>
<p>Online platforms provide complete bid histories, detailed item descriptions, and high-resolution photos. This level of transparency is hard to match in traditional settings.</p>

<h2>Pricing</h2>
<p>Online auctions often achieve fair market prices due to wider audience reach. However, traditional auctions can sometimes create bidding excitement that drives prices higher.</p>

<h2>Our Recommendation</h2>
<p>We combine the best of both worlds — online convenience with the option for in-person inspection. Every item in our auctions can be viewed at our shop before bidding.</p>`,
      de: '<p>Online-Auktionen vs. Traditionell...</p>',
      hr: '<p>Online aukcije vs. tradicionalne...</p>',
      it: '<p>Aste online vs. tradizionali...</p>',
    },
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    author: 'Isabella Romano',
    category: 'Insights',
    publishedAt: new Date(Date.now() - 20 * 86400000).toISOString(),
  },
];

export function getBlogBySlug(slug: string) {
  return blogPosts.find(p => p.slug === slug);
}
