'use client';
import { Link } from '@/i18n/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CreditCard, Lock } from 'lucide-react';

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-lg">
      <h1 className="text-3xl font-bold mb-2">Checkout</h1>
      <p className="text-muted-foreground mb-8">Complete your purchase securely</p>
      <Card><CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground"><Lock className="w-4 h-4" /> Secured by Stripe</div>
        <div className="space-y-4 mb-6">
          <Input placeholder="4242 4242 4242 4242" className="font-mono" />
          <div className="grid grid-cols-2 gap-4"><Input placeholder="MM/YY" /><Input placeholder="CVC" /></div>
        </div>
        <Link href="/checkout/success"><Button className="w-full"><CreditCard className="w-4 h-4 mr-2" />Pay Now (Demo)</Button></Link>
        <p className="text-xs text-muted-foreground text-center mt-3">In production, this integrates with Stripe Checkout.</p>
      </CardContent></Card>
    </div>
  );
}