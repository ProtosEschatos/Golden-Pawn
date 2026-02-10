'use client';
import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { getItemBySlug, getBidsForItem } from '@/data/auction-items';
import { useBidding } from '@/hooks/useBidding';
import { CountdownTimer } from '@/components/auction/countdown-timer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Locale } from '@/types';
import { t as loc, formatCurrency, conditionLabel } from '@/lib/locale';
import { ArrowLeft, Gavel, ShoppingCart, Heart, Clock, User, Info } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ItemDetailPage() {
  const locale = useLocale() as Locale;
  const t = useTranslations('itemDetail');
  const { slug } = useParams<{ slug: string }>();
  const item = getItemBySlug(slug);
  const serverBids = item ? getBidsForItem(item.id) : [];
  const { bids: userBids, placeBid } = useBidding(item?.id || '');
  const [bidAmount, setBidAmount] = useState('');
  const [bidMsg, setBidMsg] = useState('');
  const [currentBid, setCurrentBid] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    if (!item) return;
    const allBids = [...serverBids, ...userBids].sort((a,b) => b.bidAmount - a.bidAmount);
    setCurrentBid(allBids.length > 0 ? allBids[0].bidAmount : (item.startingBid || 0));
  }, [item, userBids]);

  if (!item) return <div className="container mx-auto px-4 py-20 text-center"><h1 className="text-2xl font-bold">Item not found</h1></div>;

  const isAuction = item.auctionType === 'auction' || item.auctionType === 'both';
  const isBuyNow = item.auctionType === 'buy_now' || item.auctionType === 'both';
  const minBid = currentBid + (item.bidIncrement || 0);
  const allBids = [...serverBids, ...userBids].sort((a,b) => b.bidAmount - a.bidAmount);

  const handleBid = () => {
    const amt = parseFloat(bidAmount);
    if (isNaN(amt) || amt < minBid) { setBidMsg("Bid must be at least " + formatCurrency(minBid)); return; }
    placeBid(amt);
    setCurrentBid(amt);
    setBidAmount('');
    setBidMsg(t('bidPlaced'));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Link href="/shop"><Button variant="ghost" size="sm" className="mb-4"><ArrowLeft className="w-4 h-4 mr-1" />Back to Shop</Button></Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="aspect-square rounded-xl overflow-hidden bg-muted mb-3">
            <img src={item.imageUrls[imgIdx]} alt={loc(item.name, locale)} className="w-full h-full object-cover" />
          </div>
          {item.imageUrls.length > 1 && (
            <div className="flex gap-2">{item.imageUrls.map((url, i) => (
              <button key={i} onClick={() => setImgIdx(i)} className={"w-16 h-16 rounded-md overflow-hidden border-2 " + (i === imgIdx ? 'border-primary' : 'border-transparent')}>
                <img src={url} alt="" className="w-full h-full object-cover" />
              </button>
            ))}</div>
          )}
        </div>
        <div>
          <div className="flex gap-2 mb-3">
            {isAuction && <Badge className="bg-red-500 text-white"><Gavel className="h-3 w-3 mr-1" />Auction</Badge>}
            {isBuyNow && <Badge className="bg-emerald-500 text-white"><ShoppingCart className="h-3 w-3 mr-1" />Buy Now</Badge>}
            <Badge variant="secondary">{conditionLabel(item.condition || '')}</Badge>
          </div>
          <h1 className="text-2xl font-bold mb-3">{loc(item.name, locale)}</h1>
          <p className="text-muted-foreground mb-6">{loc(item.description, locale)}</p>

          {isAuction && (
            <Card className="mb-4">
              <CardContent className="pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div><p className="text-xs text-muted-foreground">{t('currentBid')}</p><p className="text-3xl font-bold text-amber-600">{formatCurrency(currentBid)}</p></div>
                  <div className="text-right"><p className="text-xs text-muted-foreground">{t('endsIn')}</p><CountdownTimer endDate={item.auctionEnd} /></div>
                </div>
                <p className="text-sm text-muted-foreground">{item.bidCount + userBids.length} bids | Min: {formatCurrency(minBid)}</p>
                <div className="flex gap-2">
                  <Input type="number" placeholder={formatCurrency(minBid)} value={bidAmount} onChange={e => setBidAmount(e.target.value)} />
                  <Button onClick={handleBid} className="gap-1 shrink-0"><Gavel className="h-4 w-4" />{t('placeBid')}</Button>
                </div>
                {bidMsg && <p className="text-sm text-green-600">{bidMsg}</p>}
              </CardContent>
            </Card>
          )}

          {isBuyNow && item.buyNowPrice && (
            <Card className="mb-4">
              <CardContent className="pt-4">
                <div className="flex items-center justify-between mb-3">
                  <div><p className="text-xs text-muted-foreground">{t('buyNowPrice')}</p><p className="text-3xl font-bold text-emerald-600">{formatCurrency(item.buyNowPrice)}</p></div>
                </div>
                <Link href="/checkout"><Button size="lg" className="w-full gap-1"><ShoppingCart className="h-4 w-4" />{t('buyNow')}</Button></Link>
              </CardContent>
            </Card>
          )}

          <Card className="mb-4"><CardContent className="pt-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Info className="h-4 w-4" />{t('itemDetails')}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {item.brand && <><span className="text-muted-foreground">{t('brand')}</span><span>{item.brand}</span></>}
              {item.model && <><span className="text-muted-foreground">{t('model')}</span><span>{item.model}</span></>}
              {item.yearMade && <><span className="text-muted-foreground">{t('year')}</span><span>{item.yearMade}</span></>}
              {item.dimensions && <><span className="text-muted-foreground">{t('dimensions')}</span><span>{item.dimensions}</span></>}
              {item.weight && <><span className="text-muted-foreground">{t('weight')}</span><span>{item.weight}</span></>}
            </div>
          </CardContent></Card>

          {item.provenance && (
            <Card className="mb-4"><CardContent className="pt-4">
              <h3 className="font-semibold mb-2">{t('provenance')}</h3>
              <p className="text-sm text-muted-foreground">{loc(item.provenance, locale)}</p>
            </CardContent></Card>
          )}

          {allBids.length > 0 && (
            <Card><CardContent className="pt-4">
              <h3 className="font-semibold mb-3">{t('bidHistory')}</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {allBids.slice(0,10).map(bid => (
                  <div key={bid.id} className="flex items-center justify-between text-sm py-1 border-b last:border-0">
                    <span className="flex items-center gap-1"><User className="h-3 w-3" />{bid.bidderName}</span>
                    <span className="font-semibold">{formatCurrency(bid.bidAmount)}</span>
                    <span className="text-xs text-muted-foreground">{new Date(bid.createdAt).toLocaleTimeString()}</span>
                  </div>
                ))}
              </div>
            </CardContent></Card>
          )}
        </div>
      </div>
    </div>
  );
}