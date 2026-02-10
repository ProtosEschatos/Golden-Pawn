'use client';
import { useLocale, useTranslations } from 'next-intl';
import { faqItems } from '@/data/faq';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Locale } from '@/types';

export default function PawnFaqsPage() {
  const locale = useLocale() as Locale;
  const pawnFaqs = faqItems.filter(f => f.category === 'pawn');
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-2">Pawn Loan FAQs</h1>
      <p className="text-muted-foreground mb-8">Common questions about pawn loans and our services</p>
      <Accordion type="single" collapsible>
        {pawnFaqs.map(faq => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="text-left">{faq.question[locale]}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.answer[locale]}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}