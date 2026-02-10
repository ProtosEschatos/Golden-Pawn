'use client';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';

export default function ShippingPage() {
  const t = useTranslations('shippingPolicy');
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: January 15, 2025</p>
        <Card><CardContent className="p-8 prose dark:prose-invert max-w-none">
          <h2>Domestic Shipping</h2>
          <p>All items are shipped via insured courier (UPS/FedEx). Standard shipping: 3-5 business days. Express shipping: 1-2 business days. Free shipping on orders over €500.</p>
          <h2>International Shipping</h2>
          <p>We ship within the EU. International rates calculated at checkout. Customs duties are the buyer&apos;s responsibility.</p>
          <h2>In-Store Pickup</h2>
          <p>Free pickup available at our Vienna location. Items held for 7 days after purchase confirmation.</p>
          <h2>Insurance</h2>
          <p>All shipments are fully insured. Claims must be filed within 48 hours of delivery.</p>
        </CardContent></Card>
      </div>
    </div>
  );
}
