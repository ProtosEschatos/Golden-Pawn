'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl mb-3">
              <ShieldCheck className="h-6 w-6 text-amber-500" />
              <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Golden Pawn</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">{t('description')}</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />123 Goldstrasse, Vienna, Austria 1010</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" />+43 1 234 5678</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" />info@goldenpawn.com</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{t('pawnServices')}</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/pawn/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link>
              <Link href="/pawn/apply" className="hover:text-foreground transition-colors">Apply for Loan</Link>
              <Link href="/pawn/calculator" className="hover:text-foreground transition-colors">Loan Calculator</Link>
              <Link href="/pawn/appraisal" className="hover:text-foreground transition-colors">Book Appraisal</Link>
              <Link href="/pawn/sell-to-us" className="hover:text-foreground transition-colors">Sell to Us</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{t('auctionShop')}</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/shop/live-auctions" className="hover:text-foreground transition-colors">Live Auctions</Link>
              <Link href="/shop/buy-now" className="hover:text-foreground transition-colors">Buy Now</Link>
              <Link href="/shop/categories" className="hover:text-foreground transition-colors">Categories</Link>
              <Link href="/shop/sold" className="hover:text-foreground transition-colors">Sold Archive</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{t('legal')}</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-foreground transition-colors">{t('terms')}</Link>
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">{t('privacy')}</Link>
              <Link href="/cookie-policy" className="hover:text-foreground transition-colors">{t('cookies')}</Link>
              <Link href="/shipping" className="hover:text-foreground transition-colors">{t('shipping')}</Link>
              <Link href="/returns" className="hover:text-foreground transition-colors">{t('returns')}</Link>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Golden Pawn. {t('allRights')}</p>
          <span className="text-xs">{t('businessHours')}: {t('monFri')} | {t('sat')} | {t('onlineAuctions')}</span>
        </div>
      </div>
    </footer>
  );
}
