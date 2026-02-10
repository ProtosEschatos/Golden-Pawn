'use client';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';

export default function ReturnsPage() {
  const t = useTranslations('returnPolicy');
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: January 15, 2025</p>
        <Card><CardContent className="p-8 prose dark:prose-invert max-w-none">
          <h2>Auction Items</h2>
          <p>All auction wins are final. Items sold at auction cannot be returned except in case of authenticity issues.</p>
          <h2>Buy Now Items</h2>
          <p>7-day return window from delivery date. Items must be in original condition. Return shipping is the buyer&apos;s responsibility.</p>
          <h2>Authenticity Guarantee</h2>
          <p>Full refund on any item found to be inauthentic, regardless of purchase type. Independent verification accepted.</p>
          <h2>How to Return</h2>
          <p>Contact returns@goldenpawn.com to initiate a return. Include your order number and reason for return.</p>
        </CardContent></Card>
      </div>
    </div>
  );
}
