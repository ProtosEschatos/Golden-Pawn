'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { AuctionCard } from '@/components/auction/auction-card';
import { getAuctionItems } from '@/data/auction-items';
import { ArrowRight } from 'lucide-react';

export function LiveAuctionsSection() {
  const t = useTranslations('liveAuctions');
  const items = getAuctionItems().slice(0, 6);
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{t('title')}</h2>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => <AuctionCard key={item.id} item={item} />)}
        </div>
        <div className="text-center mt-8">
          <Link href="/shop/live-auctions"><Button variant="outline" size="lg" className="gap-2">{t('viewAll')} <ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
      </div>
    </section>
  );
}
