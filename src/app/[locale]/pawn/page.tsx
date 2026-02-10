'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Banknote, Gem, Coins, Laptop, ArrowRight } from 'lucide-react';

export default function PawnPage() {
  const t = useTranslations('pawn');
  const services = [
    { icon: Banknote, title: t('personalLoans'), desc: t('personalLoansDesc'), href: '/pawn/apply' as const },
    { icon: Gem, title: t('jewelryAppraisal'), desc: t('jewelryAppraisalDesc'), href: '/pawn/appraisal' as const },
    { icon: Coins, title: t('goldBuying'), desc: t('goldBuyingDesc'), href: '/pawn/sell-to-us' as const },
    { icon: Laptop, title: t('electronicsTrade'), desc: t('electronicsTradeDesc'), href: '/pawn/sell-to-us' as const },
  ];
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('subtitle')}</p>
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center">{t('services')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <Card key={i} className="hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10"><s.icon className="h-6 w-6 text-primary" /></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                  <Link href={s.href}><Button size="sm" variant="outline" className="gap-1">Learn More <ArrowRight className="h-3 w-3" /></Button></Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}