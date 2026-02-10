'use client';
import { useTranslations, useLocale } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { categories } from '@/data/categories';
import { Locale } from '@/types';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function ApplyPage() {
  const t = useTranslations('apply');
  const locale = useLocale() as Locale;
  const [submitted, setSubmitted] = useState(false);
  if (submitted) return (
    <div className="container mx-auto px-4 py-20 text-center max-w-lg">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h1 className="text-3xl font-bold mb-3">{t('submitted')}</h1>
      <p className="text-muted-foreground">We will review your application and get back to you soon.</p>
    </div>
  );
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="text-center mb-8"><h1 className="text-4xl font-bold mb-3">{t('title')}</h1><p className="text-muted-foreground">{t('subtitle')}</p></div>
      <Card><CardContent className="pt-6">
        <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
          <div><Label>{t('itemCategory')}</Label>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm mt-1">
              <option>{t('selectCategory')}</option>
              {categories.map(c => <option key={c.id} value={c.slug}>{c.name[locale]}</option>)}
            </select>
          </div>
          <div><Label>{t('itemDescription')}</Label><Textarea placeholder={t('itemDescriptionPlaceholder')} className="mt-1" rows={3} /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><Label>{t('estimatedValue')}</Label><Input type="number" placeholder="1000" className="mt-1" /></div>
            <div><Label>{t('amountNeeded')}</Label><Input type="number" placeholder="500" className="mt-1" /></div>
          </div>
          <div><Label>{t('fullName')}</Label><Input placeholder="John Doe" className="mt-1" required /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><Label>{t('email')}</Label><Input type="email" placeholder="john@example.com" className="mt-1" required /></div>
            <div><Label>{t('phone')}</Label><Input type="tel" placeholder="+43 1 234 5678" className="mt-1" /></div>
          </div>
          <Button type="submit" size="lg" className="w-full">{t('submit')}</Button>
        </form>
      </CardContent></Card>
    </div>
  );
}