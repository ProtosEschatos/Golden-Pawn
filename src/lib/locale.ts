import { Locale, LocalizedString } from '@/types';

export function t(obj: LocalizedString | undefined, locale: string): string {
  if (!obj) return '';
  return obj[locale as Locale] || obj.en || '';
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
}

export function formatDate(dateStr: string, locale: string): string {
  return new Date(dateStr).toLocaleDateString(locale === 'hr' ? 'hr-HR' : locale === 'de' ? 'de-DE' : locale === 'it' ? 'it-IT' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function conditionLabel(condition: string): string {
  const map: Record<string, string> = { new: 'New', like_new: 'Like New', excellent: 'Excellent', good: 'Good', fair: 'Fair', for_parts: 'For Parts' };
  return map[condition] || condition;
}
