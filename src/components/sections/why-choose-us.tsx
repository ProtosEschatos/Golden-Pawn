'use client';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Scale, Zap, Lock, Gavel, Award } from 'lucide-react';

export function WhyChooseUsSection() {
  const t = useTranslations('whyChooseUs');
  const items = [
    { icon: Shield, title: t('licensed'), desc: t('licensedDesc') },
    { icon: Scale, title: t('fairPrices'), desc: t('fairPricesDesc') },
    { icon: Zap, title: t('fastCash'), desc: t('fastCashDesc') },
    { icon: Lock, title: t('noCredit'), desc: t('noCreditDesc') },
    { icon: Gavel, title: t('secureAuctions'), desc: t('secureAuctionsDesc') },
    { icon: Award, title: t('experience'), desc: t('experienceDesc') },
  ];
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{t('title')}</h2>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"><item.icon className="h-6 w-6 text-primary" /></div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
