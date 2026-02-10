'use client';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/data/categories';
import { Locale } from '@/types';

export default function CategoriesPage() {
  const t = useTranslations('categoriesSection');
  const locale = useLocale() as Locale;
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
      <p className="text-muted-foreground mb-8">{t('subtitle')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(cat => (
          <Link key={cat.id} href={"/shop/" + cat.slug}>
            <Card className="group overflow-hidden hover:shadow-lg transition-all cursor-pointer h-full">
              <div className="relative h-48 overflow-hidden">
                <img src={cat.imageUrl} alt={cat.name[locale]} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <h3 className="text-white font-semibold text-xl">{cat.name[locale]}</h3>
                  <p className="text-white/70 text-sm">{cat.itemCount} {t('items')}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}