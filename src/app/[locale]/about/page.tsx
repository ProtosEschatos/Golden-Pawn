'use client';
import { useLocale, useTranslations } from 'next-intl';
import { teamMembers } from '@/data/team';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Locale } from '@/types';

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale() as Locale;
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-16"><h1 className="text-4xl font-bold mb-3">{t('title')}</h1><p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('subtitle')}</p></div>
      <div className="max-w-3xl mx-auto mb-16 space-y-8">
        <div><h2 className="text-2xl font-bold mb-4">{t('story')}</h2><p className="text-muted-foreground leading-relaxed">{t('storyText')}</p></div>
        <div><h2 className="text-2xl font-bold mb-4">{t('mission')}</h2><p className="text-muted-foreground leading-relaxed">{t('missionText')}</p></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[{n:'30+',l:t('yearsInBusiness')},{n:'15K+',l:t('happyCustomers')},{n:'8K+',l:t('itemsSold')},{n:'12K+',l:t('loansProcessed')}].map((s,i) => (
          <Card key={i}><CardContent className="pt-6 text-center"><p className="text-3xl font-bold text-primary mb-1">{s.n}</p><p className="text-sm text-muted-foreground">{s.l}</p></CardContent></Card>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-center mb-8">{t('team')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map(m => (
          <Card key={m.id} className="overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden"><img src={m.photoUrl} alt={m.name} className="w-full h-full object-cover" /></div>
            <CardContent className="pt-4">
              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-sm text-primary mb-2">{m.title[locale]}</p>
              <p className="text-sm text-muted-foreground mb-3">{m.bio[locale]}</p>
              <div className="flex flex-wrap gap-1">{m.specialties.map(s => <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>)}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}