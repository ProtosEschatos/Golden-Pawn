'use client';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getBuyNowItems } from '@/data/auction-items';
import { Locale } from '@/types';
import { ShoppingCart, ArrowRight } from 'lucide-react';

export function FeaturedItemsSection() {
  const t = useTranslations('featured');
  const locale = useLocale() as Locale;
  const items = getBuyNowItems().slice(0, 8);
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{t('title')}</h2>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all">
              <div className="relative aspect-square overflow-hidden">
                <img src={item.imageUrls[0]} alt={item.name[locale]} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-4">
                <Link href={`/shop/items/${item.slug}`}>
                  <h3 className="font-semibold text-sm line-clamp-2 hover:text-primary transition-colors mb-2">{item.name[locale]}</h3>
                </Link>
                <p className="text-lg font-bold text-primary mb-3">${item.buyNowPrice?.toLocaleString()}</p>
                <Link href={`/shop/items/${item.slug}`}>
                  <Button size="sm" className="w-full gap-1"><ShoppingCart className="h-4 w-4" /> Buy Now</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/shop/buy-now"><Button variant="outline" size="lg" className="gap-2">{t('viewAll')} <ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
      </div>
    </section>
  );
}
