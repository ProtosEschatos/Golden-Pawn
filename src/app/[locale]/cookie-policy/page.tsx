'use client';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';

export default function CookiePolicyPage() {
  const t = useTranslations('cookiePolicy');
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: January 15, 2025</p>
        <Card><CardContent className="p-8 prose dark:prose-invert max-w-none">
          <h2>Essential Cookies</h2>
          <p>We use essential cookies for authentication, language preference, and theme settings. These cannot be disabled.</p>
          <h2>Analytics</h2>
          <p>Plausible Analytics is cookie-free and GDPR-compliant. No tracking cookies are used for analytics.</p>
          <h2>Third-Party Cookies</h2>
          <p>Stripe may set cookies for payment processing. Crisp live chat may use cookies for chat sessions.</p>
          <h2>Cookie Management</h2>
          <p>Managed through Cookiebot consent banner in production. You can adjust preferences at any time.</p>
        </CardContent></Card>
      </div>
    </div>
  );
}
