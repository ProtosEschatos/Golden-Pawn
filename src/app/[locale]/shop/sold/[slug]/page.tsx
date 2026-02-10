'use client';
import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { getSoldItemBySlug } from '@/data/sold-items';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Locale } from '@/types';
import { formatCurrency, conditionLabel } from '@/lib/locale';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';

export default function SoldItemPage() {
  const locale = useLocale() as Locale;
  const t = useTranslations('sold');
  const { slug } = useParams<{ slug: string }>();
  const item = getSoldItemBySlug(slug);
  if (!item) return <div className="container mx-auto px-4 py-20 text-center"><h1 className="text-2xl font-bold">Item not found</h1></div>;
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/shop/sold"><Button variant="ghost" size="sm" className="mb-4"><ArrowLeft className="w-4 h-4 mr-1" />Back to Sold Archive</Button></Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square rounded-xl overflow-hidden bg-muted relative">
          <img src={item.imageUrls[0]} alt={item.name[locale]} className="w-full h-full object-cover opacity-80" />
          <Badge variant="destructive" className="absolute top-3 left-3 text-base px-3 py-1">SOLD</Badge>
        </div>
        <div>
          <Badge variant="secondary" className="mb-2">{conditionLabel(item.condition || '')}</Badge>
          <h1 className="text-2xl font-bold mb-3">{item.name[locale]}</h1>
          <p className="text-muted-foreground mb-6">{item.description[locale]}</p>
          <Card><CardContent className="pt-4 space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">{t('soldFor')}</span><span className="text-2xl font-bold text-primary">{formatCurrency(item.soldPrice || 0)}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" />{t('soldOn')}</span><span>{item.soldDate ? new Date(item.soldDate).toLocaleDateString() : ''}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" />{t('buyerLocation')}</span><span>{item.buyerLocation}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Bids</span><span>{item.bidCount}</span></div>
          </CardContent></Card>
        </div>
      </div>
    </div>
  );
}