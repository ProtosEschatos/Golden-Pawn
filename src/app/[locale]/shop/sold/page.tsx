'use client';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getSoldItems } from '@/data/sold-items';
import { getLocalizedField, formatCurrency, formatDate } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

export default function SoldPage() {
  const t = useTranslations('sold');
  const locale = useLocale();
  const items = getSoldItems();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-lg text-muted-foreground">{t('subtitle')}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <Link key={item.id} href={`/shop/sold/${item.slug}`}>
            <Card className="overflow-hidden hover:shadow-md transition-all cursor-pointer h-full opacity-90 hover:opacity-100">
              <div className="relative aspect-square bg-muted">
                <div className="absolute inset-0 flex items-center justify-center text-4xl grayscale">
                  {item.category === 'jewelry' ? '💍' : item.category === 'watches' ? '⌚' : item.category === 'electronics' ? '📱' : '📦'}
                </div>
                <div className="absolute inset-0 bg-black/10" />
                <Badge className="absolute top-2 left-2 bg-red-600 text-white">{t('soldBadge')}</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm line-clamp-1">{getLocalizedField(item.name, locale)}</h3>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="text-xs text-muted-foreground">{t('soldFor')}</p>
                    <p className="font-bold text-green-600">{formatCurrency(item.soldPrice)}</p>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <div className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-green-500" />{item.daysToSell}d</div>
                    <div>{formatDate(item.soldDate)}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
