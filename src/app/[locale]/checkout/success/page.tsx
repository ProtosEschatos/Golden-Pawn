'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CheckoutSuccessPage() {
  const t = useTranslations('checkoutSuccess');
  const [orderNum, setOrderNum] = useState('0000');

  useEffect(() => {
    setOrderNum(Math.floor(Math.random() * 10000).toString().padStart(4, '0'));
  }, []);

  return (
    <div className="container mx-auto px-4 py-20">
      <Card className="max-w-lg mx-auto text-center">
        <CardContent className="p-10">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
          <p className="text-lg text-muted-foreground mb-2">{t('subtitle')}</p>
          <p className="text-sm text-muted-foreground mb-8">{t('message')}</p>
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />Confirmation email sent
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Package className="h-4 w-4" />Order #GP-{orderNum}
            </div>
          </div>
          <div className="flex gap-3 justify-center mt-8">
            <Button asChild><Link href="/account/orders">View Orders</Link></Button>
            <Button variant="outline" asChild><Link href="/shop">Continue Shopping</Link></Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
