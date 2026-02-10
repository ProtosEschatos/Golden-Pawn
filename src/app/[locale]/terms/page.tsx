'use client';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';

export default function TermsPage() {
  const t = useTranslations('terms');
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: January 15, 2025</p>
        <Card><CardContent className="p-8 prose dark:prose-invert max-w-none">
          <h2>1. Pawn Loan Terms</h2>
          <p>All pawn loans are secured by collateral. Loan amounts are based on appraised value (typically 40-70% of fair market value). Interest rates range from 2-5% per month depending on loan amount and term. Standard loan terms are 30-90 days with extension options available.</p>
          <h2>2. Auction Rules</h2>
          <p>All bids are binding. Auctions may include a reserve price. Auto-extend applies when bids are placed in the final 5 minutes. Winning bidders must complete payment within 48 hours.</p>
          <h2>3. Buy Now Items</h2>
          <p>All Buy Now items are sold as-described. Condition reports are provided for all items. 7-day return policy for Buy Now purchases (not applicable to auction wins).</p>
          <h2>4. Authentication Guarantee</h2>
          <p>All luxury items are authenticated by certified experts. Full refund guaranteed if any item is found to be inauthentic.</p>
          <h2>5. Payments</h2>
          <p>We accept all major credit cards, bank transfers, and cash (in-store only). All online payments are processed securely through Stripe.</p>
        </CardContent></Card>
      </div>
    </div>
  );
}
