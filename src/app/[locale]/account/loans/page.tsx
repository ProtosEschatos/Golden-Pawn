'use client';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { demoLoans } from '@/data/pawn-loans';
import { Locale } from '@/types';
import { ArrowLeft } from 'lucide-react';

export default function LoansPage() {
  const locale = useLocale() as Locale;
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/account" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="w-4 h-4" /> Back to Account</Link>
      <h1 className="text-3xl font-bold mb-2">My Pawn Loans</h1>
      <p className="text-sm text-muted-foreground mb-8">Demo data — connects to Supabase in production</p>
      <div className="space-y-4 max-w-3xl">
        {demoLoans.map(loan => (
          <div key={loan.id} className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
            <div className="flex-1">
              <h3 className="font-semibold">{typeof loan.itemDescription === 'string' ? loan.itemDescription : loan.itemDescription[locale]}</h3>
              <p className="text-sm text-muted-foreground">Loan #{loan.loanNumber} | Due: {new Date(loan.dueDate).toLocaleDateString()}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">${loan.loanAmount.toLocaleString()}</p>
              <span className={"text-xs font-medium px-2 py-1 rounded-full " + (loan.status === 'active' ? 'bg-green-500/10 text-green-600' : loan.status === 'repaid' ? 'bg-blue-500/10 text-blue-600' : 'bg-yellow-500/10 text-yellow-600')}>{loan.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}