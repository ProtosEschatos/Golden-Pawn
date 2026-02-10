'use client';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqItems } from '@/data/faq';
import { Locale } from '@/types';
import { ArrowRight } from 'lucide-react';

export function FAQSection() {
  const t = useTranslations('faqSection');
  const locale = useLocale() as Locale;
  const displayFaqs = faqItems.slice(0, 8);
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{t('title')}</h2>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {displayFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left">{faq.question[locale]}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer[locale]}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-center mt-8">
          <Link href="/faq"><Button variant="outline" className="gap-2">{t('viewAll')} <ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
      </div>
    </section>
  );
}
