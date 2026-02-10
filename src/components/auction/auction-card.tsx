'use client';
import { AuctionItem } from '@/types';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CountdownTimer } from './countdown-timer';
import { t as loc, formatCurrency } from '@/lib/locale';
import { Gavel, ShoppingCart, Clock } from 'lucide-react';

export function AuctionCard({ item }: { item: AuctionItem }) {
  const locale = useLocale();
  const isAuction = item.auctionType === 'auction' || item.auctionType === 'both';
  const isBuyNow = item.auctionType === 'buy_now' || item.auctionType === 'both';

  return (
    <Link href={`/shop/items/${item.slug}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img src={item.imageUrls[0]} alt={loc(item.name, locale)} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute top-2 left-2 flex gap-1.5">
            {isAuction && <Badge className="bg-red-500 hover:bg-red-600 text-white gap-1"><Gavel className="h-3 w-3" />Auction</Badge>}
            {isBuyNow && <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white gap-1"><ShoppingCart className="h-3 w-3" />Buy Now</Badge>}
          </div>
          {item.featured && <Badge className="absolute top-2 right-2 bg-amber-500 text-white">Featured</Badge>}
        </div>
        <CardContent className="p-4 space-y-2">
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-amber-600 transition-colors">{loc(item.name, locale)}</h3>
          <div className="flex items-center justify-between">
            {isAuction && item.currentBid ? (
              <div><p className="text-xs text-muted-foreground">Current Bid</p><p className="text-lg font-bold text-amber-600">{formatCurrency(item.currentBid)}</p></div>
            ) : isBuyNow && item.buyNowPrice ? (
              <div><p className="text-xs text-muted-foreground">Buy Now</p><p className="text-lg font-bold text-emerald-600">{formatCurrency(item.buyNowPrice)}</p></div>
            ) : null}
            {isAuction && item.bidCount > 0 && <span className="text-xs text-muted-foreground">{item.bidCount} bids</span>}
          </div>
          {isAuction && item.auctionEnd && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="h-3 w-3" /><CountdownTimer endDate={item.auctionEnd} compact /></div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
