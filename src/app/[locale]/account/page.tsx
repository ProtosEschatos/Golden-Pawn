'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gavel, Trophy, Banknote, ShoppingCart, Heart, User, CreditCard } from 'lucide-react';

export default function AccountPage() {
  const t = useTranslations('account');
  const items = [
    { icon: Gavel, title: t('activeBids'), count: 3, href: '/account/bids' as const },
    { icon: Trophy, title: t('wonAuctions'), count: 1, href: '/account/wins' as const },
    { icon: Banknote, title: t('pawnLoans'), count: 2, href: '/account/loans' as const },
    { icon: ShoppingCart, title: t('orders'), count: 4, href: '/account/orders' as const },
    { icon: Heart, title: t('watchlist'), count: 5, href: '/account/watchlist' as const },
    { icon: User, title: t('profile'), count: null, href: '/account/profile' as const },
    { icon: CreditCard, title: t('paymentMethods'), count: null, href: '/account/payment-methods' as const },
  ];
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-4"><h1 className="text-4xl font-bold mb-2">{t('title')}</h1><Badge variant="outline">{t('demoMode')}</Badge></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
        {items.map((item, i) => (
          <Link key={i} href={item.href}>
            <Card className="hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer h-full">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10"><item.icon className="h-6 w-6 text-primary" /></div>
                <div className="flex-1"><h3 className="font-semibold">{item.title}</h3></div>
                {item.count !== null && <Badge>{item.count}</Badge>}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}