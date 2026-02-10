'use client';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useWatchlist } from '@/hooks/useWatchlist';
import { auctionItems } from '@/data/auction-items';
import { getLocalizedField, formatCurrency } from '@/lib/utils';
import { Heart } from 'lucide-react';

export default function WatchlistContent() {
  const t = useTranslations('watchlist');
  const locale = useLocale();
  const { watchlist, toggle } = useWatchlist();
  const items = auctionItems.filter(i => watchlist.includes(i.id));

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
      <p className="text-muted-foreground mb-8">{t('subtitle')}</p>
      {items.length === 0 ? (
        <div className="text-center py-16">
          <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-semibold mb-2">{t('empty')}</h2>
          <p className="text-muted-foreground mb-6">{t('emptyDesc')}</p>
          <Button asChild><Link href="/shop/live-auctions">Browse Auctions</Link></Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(item => (
            <Card key={item.id} className="overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center text-4xl">
                {item.category === 'jewelry' ? '💍' : item.category === 'watches' ? '⌚' : '📦'}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold line-clamp-1">{getLocalizedField(item.name, locale)}</h3>
                <p className="font-bold text-amber-600 mt-1">{formatCurrency(item.currentBid || item.buyNowPrice || 0)}</p>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" className="flex-1" asChild><Link href={`/shop/items/${item.slug}`}>View</Link></Button>
                  <Button size="sm" variant="outline" onClick={() => toggle(item.id)}><Heart className="h-4 w-4 fill-current" /></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
