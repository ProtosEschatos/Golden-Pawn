'use client';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getSoldItems } from '@/data/sold-items';
import { Locale } from '@/types';
import { ArrowRight } from 'lucide-react';

export function RecentlySoldSection() {
  const t = useTranslations('recentlySold');
  const locale = useLocale() as Locale;
  const items = getSoldItems().slice(0, 10);
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{t('title')}</h2>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </div>
        <div className="flex gap-4 pb-4 overflow-x-auto">
          {items.map((item) => (
            <Card key={item.id} className="min-w-[260px] max-w-[260px] overflow-hidden flex-shrink-0">
              <div className="relative aspect-square overflow-hidden">
                <img src={item.imageUrls[0]} alt={item.name[locale]} className="object-cover w-full h-full opacity-80" />
                <Badge variant="destructive" className="absolute top-2 left-2">{t('soldFor')} ${item.soldPrice?.toLocaleString()}</Badge>
              </div>
              <CardContent className="p-3">
                <h3 className="font-semibold text-sm line-clamp-1 mb-1">{item.name[locale]}</h3>
                <p className="text-xs text-muted-foreground">{t('soldIn', { days: item.daysToSell })}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/shop/sold"><Button variant="outline" className="gap-2">{t('viewArchive')} <ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
      </div>
    </section>
  );
}
