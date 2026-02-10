'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gavel } from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('hero');
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-background to-amber-50/30 dark:from-amber-950/20 dark:via-background dark:to-amber-950/10">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">{t('headline')}</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t('subheadline')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pawn/apply"><Button size="lg" className="w-full sm:w-auto gap-2 text-base">{t('ctaLoan')} <ArrowRight className="h-4 w-4" /></Button></Link>
            <Link href="/shop/live-auctions"><Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 text-base"><Gavel className="h-4 w-4" /> {t('ctaAuctions')}</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
