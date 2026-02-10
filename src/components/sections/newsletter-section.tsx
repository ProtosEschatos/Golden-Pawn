'use client';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { useState } from 'react';

export function NewsletterSection() {
  const t = useTranslations('newsletter');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); setEmail(''); };
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">{t('title')}</h2>
          <p className="text-muted-foreground mb-6">{t('subtitle')}</p>
          {submitted ? (
            <p className="text-green-600 dark:text-green-400 font-medium">{t('success')}</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input type="email" placeholder={t('placeholder')} value={email} onChange={(e) => setEmail(e.target.value)} required className="flex-1" />
              <Button type="submit">{t('subscribe')}</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
