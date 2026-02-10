'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Package, Search, Banknote, ArrowRight } from 'lucide-react';

export function HowPawnWorksSection() {
  const t = useTranslations('howPawnWorks');
  const steps = [
    { icon: Package, title: t('step1Title'), desc: t('step1Desc'), step: '1' },
    { icon: Search, title: t('step2Title'), desc: t('step2Desc'), step: '2' },
    { icon: Banknote, title: t('step3Title'), desc: t('step3Desc'), step: '3' },
  ];
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{t('title')}</h2>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <Card className="text-center h-full">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">{step.step}</div>
                  <step.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
              {i < steps.length - 1 && <ArrowRight className="hidden md:block absolute top-1/2 -right-5 h-6 w-6 text-muted-foreground" />}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/pawn/apply"><Button size="lg" className="gap-2">{t('cta')} <ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
      </div>
    </section>
  );
}
