'use client';
import { useLocale } from 'next-intl';
import { faqItems } from '@/data/faq';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Locale } from '@/types';

export default function FaqPage() {
  const locale = useLocale() as Locale;
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? faqItems : faqItems.filter(f => f.category === filter);
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
      <p className="text-muted-foreground mb-8">Quick answers to common questions</p>
      <div className="flex gap-2 mb-8 flex-wrap">
        {['all','pawn','auction','general'].map(cat => (
          <Button key={cat} variant={filter === cat ? 'default' : 'outline'} size="sm" onClick={() => setFilter(cat)} className="capitalize">{cat === 'all' ? 'All' : cat}</Button>
        ))}
      </div>
      <Accordion type="single" collapsible>
        {filtered.map(item => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-left">{item.question[locale]}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.answer[locale]}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}