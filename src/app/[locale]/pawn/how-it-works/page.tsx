'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Search, Banknote, RefreshCw, ArrowRight, CheckCircle } from 'lucide-react';

export default function HowItWorksPage() {
  const t = useTranslations('howItWorks');
  const steps = [
    { icon: Package, title: 'Bring Your Item', desc: 'Visit our shop with any valuable item. No appointment needed for walk-ins.' },
    { icon: Search, title: 'Free Appraisal', desc: 'Our certified experts evaluate your item using current market data and condition assessment.' },
    { icon: Banknote, title: 'Get Cash', desc: 'Accept our offer and receive cash immediately. Typical loans are 40-60% of appraised value.' },
    { icon: RefreshCw, title: 'Repay & Reclaim', desc: 'Pay back your loan plus interest within 90 days. Your item is safely stored and insured.' },
  ];
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12"><h1 className="text-4xl font-bold mb-3">{t('title')}</h1><p className="text-lg text-muted-foreground">{t('subtitle')}</p></div>
      <div className="space-y-6">
        {steps.map((s, i) => (
          <Card key={i}><CardContent className="p-6 flex items-start gap-6">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">{i+1}</div>
              {i < steps.length-1 && <div className="w-0.5 h-12 bg-border mt-2" />}
            </div>
            <div><s.icon className="h-6 w-6 text-primary mb-2" /><h3 className="text-lg font-semibold mb-1">{s.title}</h3><p className="text-muted-foreground">{s.desc}</p></div>
          </CardContent></Card>
        ))}
      </div>
      <div className="mt-8 bg-muted/50 rounded-xl p-6">
        <h3 className="font-semibold mb-3 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" />What You Need to Know</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>No credit check required — your item is the only collateral</li>
          <li>Interest rates: 2-5% per month depending on item value</li>
          <li>Standard loan term: 90 days with option to extend</li>
          <li>Your item is stored securely and fully insured</li>
          <li>If you cannot repay, the item is forfeit — no further obligation</li>
        </ul>
      </div>
      <div className="text-center mt-8"><Link href="/pawn/apply"><Button size="lg" className="gap-2">Apply for a Loan <ArrowRight className="h-4 w-4" /></Button></Link></div>
    </div>
  );
}