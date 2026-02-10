'use client';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPage() {
  const t = useTranslations('privacy');
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: January 15, 2025</p>
        <Card><CardContent className="p-8 prose dark:prose-invert max-w-none">
          <h2>Data Collection</h2>
          <p>We collect personal information necessary to provide our services: name, email, phone number, and payment information. For pawn loans, we also collect government-issued ID information as required by law.</p>
          <h2>Data Usage</h2>
          <p>Your data is used to process loans, manage auctions, communicate about orders, and improve our services. We never sell your personal information to third parties.</p>
          <h2>Data Security</h2>
          <p>All data is encrypted in transit and at rest. Payment information is handled by Stripe and never stored on our servers.</p>
          <h2>Analytics</h2>
          <p>We use Plausible Analytics, a privacy-focused tool that does not use cookies or collect personal data.</p>
          <h2>Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data at any time. Contact us at privacy@goldenpawn.com.</p>
        </CardContent></Card>
      </div>
    </div>
  );
}
