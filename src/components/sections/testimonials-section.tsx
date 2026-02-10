'use client';
import { useLocale, useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { testimonials } from '@/data/testimonials';
import { Locale } from '@/types';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const locale = useLocale() as Locale;
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{t('title')}</h2>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </div>
        <div className="flex gap-4 pb-4 overflow-x-auto">
          {testimonials.map((test) => (
            <Card key={test.id} className="min-w-[320px] max-w-[320px] flex-shrink-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: test.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />)}
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-4">&ldquo;{test.comment[locale]}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">{test.customerName}</span>
                  <Badge variant="outline" className="text-[10px]">{test.serviceType === 'pawn_loan' ? t('pawnLoan') : t('auctionPurchase')}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
