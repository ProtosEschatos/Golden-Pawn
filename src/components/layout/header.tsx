'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './language-switcher';
import { Button } from '@/components/ui/button';
import { Menu, Gavel, ShieldCheck, User, ChevronDown, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const t = useTranslations('nav');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pawnOpen, setPawnOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const pawnLinks = [
    { href: '/pawn' as const, label: t('pawn') },
    { href: '/pawn/how-it-works' as const, label: t('howItWorks') },
    { href: '/pawn/apply' as const, label: t('apply') },
    { href: '/pawn/calculator' as const, label: t('calculator') },
    { href: '/pawn/appraisal' as const, label: t('appraisal') },
    { href: '/pawn/sell-to-us' as const, label: t('sellToUs') },
  ];

  const shopLinks = [
    { href: '/shop' as const, label: t('shop') },
    { href: '/shop/live-auctions' as const, label: t('liveAuctions') },
    { href: '/shop/buy-now' as const, label: t('buyNow') },
    { href: '/shop/categories' as const, label: t('categories') },
    { href: '/shop/sold' as const, label: t('soldArchive') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <ShieldCheck className="h-7 w-7 text-amber-500" />
          <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Golden Pawn</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <div className="relative" onMouseEnter={() => setPawnOpen(true)} onMouseLeave={() => setPawnOpen(false)}>
            <Button variant="ghost" size="sm" className="gap-1">
              <Gavel className="h-4 w-4" />{t('pawn')}<ChevronDown className="h-3 w-3" />
            </Button>
            {pawnOpen && (
              <div className="absolute left-0 top-full bg-popover border rounded-md shadow-lg z-50 min-w-[200px] py-1">
                {pawnLinks.map(l => (
                  <Link key={l.href} href={l.href} className="block px-3 py-2 text-sm hover:bg-accent transition-colors">{l.label}</Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setShopOpen(true)} onMouseLeave={() => setShopOpen(false)}>
            <Button variant="ghost" size="sm" className="gap-1">
              <Gavel className="h-4 w-4" />{t('shop')}<ChevronDown className="h-3 w-3" />
            </Button>
            {shopOpen && (
              <div className="absolute left-0 top-full bg-popover border rounded-md shadow-lg z-50 min-w-[200px] py-1">
                {shopLinks.map(l => (
                  <Link key={l.href} href={l.href} className="block px-3 py-2 text-sm hover:bg-accent transition-colors">{l.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about"><Button variant="ghost" size="sm">{t('about')}</Button></Link>
          <Link href="/contact"><Button variant="ghost" size="sm">{t('contact')}</Button></Link>
          <Link href="/blog"><Button variant="ghost" size="sm">{t('blog')}</Button></Link>
          <Link href="/faq"><Button variant="ghost" size="sm">{t('faq')}</Button></Link>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LanguageSwitcher />
          <Link href="/account"><Button variant="ghost" size="icon" className="h-9 w-9"><User className="h-4 w-4" /></Button></Link>
          <Button variant="ghost" size="icon" className="h-9 w-9 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t bg-background px-4 py-4 space-y-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase px-3 mb-1">Pawn Services</p>
          {pawnLinks.map(l => (
            <Link key={l.href} href={l.href} className="block px-3 py-2 text-sm hover:bg-accent rounded-md" onClick={() => setMobileOpen(false)}>{l.label}</Link>
          ))}
          <p className="text-xs font-semibold text-muted-foreground uppercase px-3 mt-3 mb-1">Auction Shop</p>
          {shopLinks.map(l => (
            <Link key={l.href} href={l.href} className="block px-3 py-2 text-sm hover:bg-accent rounded-md" onClick={() => setMobileOpen(false)}>{l.label}</Link>
          ))}
          <p className="text-xs font-semibold text-muted-foreground uppercase px-3 mt-3 mb-1">More</p>
          {[{ href: '/about' as const, l: 'About' }, { href: '/contact' as const, l: 'Contact' }, { href: '/blog' as const, l: 'Blog' }, { href: '/faq' as const, l: 'FAQ' }].map(item => (
            <Link key={item.href} href={item.href} className="block px-3 py-2 text-sm hover:bg-accent rounded-md" onClick={() => setMobileOpen(false)}>{item.l}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
