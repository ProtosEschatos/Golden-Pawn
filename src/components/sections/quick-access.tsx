'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Gavel, Calculator } from 'lucide-react';

export function QuickAccessSection() {
  const t = useTranslations('quickAccess');
  const cards = [
    { icon: DollarSign, title: t('sell'), desc: t('sellDesc'), href: '/pawn/sell-to-us' as const, badge: null },
    { icon: Gavel, title: t('auctions'), desc: t('auctionsDesc'), href: '/shop/live-auctions' as const, badge: `12 ${t('endingSoon')}` },
    { icon: Calculator, title: t('calculator'), desc: t('calculatorDesc'), href: '/pawn/calculator' as const, badge: null },
  ];
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link href={card.href} key={card.title}>
              <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10"><card.icon className="h-6 w-6 text-primary" /></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{card.title}</h3>
                      {card.badge && <Badge variant="destructive" className="text-[10px]">{card.badge}</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">{card.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
