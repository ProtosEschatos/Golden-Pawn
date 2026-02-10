'use client';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function CalculatorPage() {
  const t = useTranslations('calculator');
  const [value, setValue] = useState(1000);
  const [term, setTerm] = useState(90);
  const loanAmount = Math.round(value * 0.5);
  const rate = value >= 5000 ? 2.0 : value >= 1000 ? 3.0 : 4.0;
  const months = term / 30;
  const monthlyInterest = Math.round(loanAmount * (rate / 100));
  const totalRepay = Math.round(loanAmount + monthlyInterest * months);

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="text-center mb-8"><Calculator className="h-10 w-10 text-primary mx-auto mb-3" /><h1 className="text-4xl font-bold mb-3">{t('title')}</h1><p className="text-muted-foreground">{t('subtitle')}</p></div>
      <Card><CardContent className="pt-6 space-y-6">
        <div>
          <Label>{t('itemValue')}</Label>
          <Input type="range" min={100} max={50000} step={100} value={value} onChange={e => setValue(+e.target.value)} className="mt-2" />
          <div className="text-center text-2xl font-bold text-primary mt-2">${value.toLocaleString()}</div>
        </div>
        <div>
          <Label>{t('loanTerm')}</Label>
          <div className="flex gap-2 mt-2">{[30,60,90,120].map(d => (
            <button key={d} onClick={() => setTerm(d)} className={"flex-1 py-2 rounded-md text-sm font-medium border transition-colors " + (term === d ? 'bg-primary text-primary-foreground border-primary' : 'border-input hover:bg-accent')}>{d} {t('days')}</button>
          ))}</div>
        </div>
        <div className="bg-muted/50 rounded-xl p-6 space-y-3">
          <div className="flex justify-between"><span className="text-muted-foreground">{t('estimatedLoan')}</span><span className="text-2xl font-bold text-primary">${loanAmount.toLocaleString()}</span></div>
          <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t('interestRate')}</span><span className="font-medium">{rate}% {t('perMonth')}</span></div>
          <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t('monthlyInterest')}</span><span className="font-medium">${monthlyInterest}</span></div>
          <div className="border-t pt-3 flex justify-between"><span className="font-semibold">{t('totalRepayment')}</span><span className="font-bold text-lg">${totalRepay.toLocaleString()}</span></div>
        </div>
        <p className="text-xs text-muted-foreground text-center">{t('disclaimer')}</p>
      </CardContent></Card>
    </div>
  );
}