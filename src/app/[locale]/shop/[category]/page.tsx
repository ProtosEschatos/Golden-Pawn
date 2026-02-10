'use client';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { AuctionCard } from '@/components/auction/auction-card';
import { getItemsByCategory } from '@/data/auction-items';
import { categories } from '@/data/categories';
import { Locale } from '@/types';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function CategoryPage() {
  const locale = useLocale() as Locale;
  const { category } = useParams<{ category: string }>();
  const cat = categories.find(c => c.slug === category);
  const items = getItemsByCategory(category);
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/shop/categories"><Button variant="ghost" size="sm" className="mb-4"><ArrowLeft className="w-4 h-4 mr-1" />All Categories</Button></Link>
      <h1 className="text-4xl font-bold mb-2">{cat ? cat.name[locale] : category}</h1>
      <p className="text-muted-foreground mb-8">{cat ? cat.description[locale] : ''}</p>
      {items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{items.map(item => <AuctionCard key={item.id} item={item} />)}</div>
      ) : (
        <div className="text-center py-20 text-muted-foreground"><p className="text-lg">No items in this category right now.</p><p className="text-sm">Check back soon!</p></div>
      )}
    </div>
  );
}