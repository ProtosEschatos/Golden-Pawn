'use client';
import { Link } from '@/i18n/navigation';
import { ArrowLeft } from 'lucide-react';

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/account" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="w-4 h-4" /> Back to Account</Link>
      <h1 className="text-3xl font-bold mb-4 capitalize">orders</h1>
      <div className="bg-card border border-border rounded-xl p-8 text-center">
        <p className="text-muted-foreground">This page will display your orders when connected to Supabase Auth.</p>
        <p className="text-sm text-muted-foreground mt-2">Demo mode — sign up for a free account to track your activity.</p>
      </div>
    </div>
  );
}