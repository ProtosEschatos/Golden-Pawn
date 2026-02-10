'use client';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function SellToUsPage() {
  const t = useTranslations('sellToUs');
  const [sent, setSent] = useState(false);
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12"><h1 className="text-4xl font-bold mb-3">{t('title')}</h1><p className="text-lg text-muted-foreground">{t('subtitle')}</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">{t('howItWorks')}</h2>
          {[t('step1'), t('step2'), t('step3')].map((s, i) => (
            <div key={i} className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">{i+1}</div>
              <p className="text-muted-foreground mt-1">{s}</p>
            </div>
          ))}
          <Card className="mt-6"><CardContent className="pt-4 text-center">
            <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <p className="font-semibold">We pay 60-80% of market value</p>
            <p className="text-sm text-muted-foreground">Cash on the spot, no waiting</p>
          </CardContent></Card>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">{t('formTitle')}</h2>
          {sent ? (
            <Card><CardContent className="pt-6 text-center py-12"><CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" /><p className="font-semibold">Submission received! We will contact you within 24 hours.</p></CardContent></Card>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <Input placeholder="Item description" required />
              <Input placeholder="Brand / Model" />
              <Input type="number" placeholder="Your asking price" />
              <Textarea placeholder="Additional details (condition, accessories, etc.)" rows={3} />
              <Input placeholder="Your name" required />
              <Input type="email" placeholder="Email" required />
              <Button type="submit" className="w-full gap-1">Submit <ArrowRight className="h-4 w-4" /></Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}