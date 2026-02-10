'use client';
import { useTranslations } from 'next-intl';
import { AuctionCard } from '@/components/auction/auction-card';
import { getAuctionItems } from '@/data/auction-items';

export default function LiveAuctionsPage() {
  const t = useTranslations('liveAuctions');
  const items = getAuctionItems();
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
      <p className="text-muted-foreground mb-8">{t('subtitle')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map(item => <AuctionCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}