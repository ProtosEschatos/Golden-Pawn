'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { AuctionCard } from '@/components/auction/auction-card';
import { auctionItems } from '@/data/auction-items';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gavel, ShoppingCart, Archive } from 'lucide-react';

export default function ShopPage() {
  const t = useTranslations('shop');
  const live = auctionItems.filter(i => i.status === 'live');
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10"><h1 className="text-4xl font-bold mb-3">{t('title')}</h1><p className="text-lg text-muted-foreground">{t('subtitle')}</p></div>
      <div className="flex gap-3 justify-center mb-8 flex-wrap">
        <Link href="/shop/live-auctions"><Button variant="outline" className="gap-2"><Gavel className="h-4 w-4" />Live Auctions <Badge variant="destructive">{live.filter(i=>i.auctionType!=='buy_now').length}</Badge></Button></Link>
        <Link href="/shop/buy-now"><Button variant="outline" className="gap-2"><ShoppingCart className="h-4 w-4" />Buy Now</Button></Link>
        <Link href="/shop/sold"><Button variant="outline" className="gap-2"><Archive className="h-4 w-4" />Sold Archive</Button></Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {live.map(item => <AuctionCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}