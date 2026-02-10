'use client';
import { useTranslations } from 'next-intl';
import { Gavel } from 'lucide-react';

export default function MyBidsPage() {
  const t = useTranslations('myBids');
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
      <p className="text-muted-foreground mb-8">{t('subtitle')}</p>
      <div className="text-center py-20"><Gavel className="h-12 w-12 text-muted-foreground mx-auto mb-4" /><h2 className="text-xl font-semibold mb-2">{t('empty')}</h2><p className="text-muted-foreground">{t('emptyDesc')}</p></div>
    </div>
  );
}