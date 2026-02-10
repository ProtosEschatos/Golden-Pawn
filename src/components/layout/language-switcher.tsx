'use client';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useState } from 'react';

const localeOptions = [
  { code: 'en', label: 'English', flag: '\u{1F1EC}\u{1F1E7}' },
  { code: 'de', label: 'Deutsch', flag: '\u{1F1E9}\u{1F1EA}' },
  { code: 'hr', label: 'Hrvatski', flag: '\u{1F1ED}\u{1F1F7}' },
  { code: 'it', label: 'Italiano', flag: '\u{1F1EE}\u{1F1F9}' },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const current = localeOptions.find(l => l.code === locale) || localeOptions[0];

  return (
    <div className="relative">
      <Button variant="ghost" size="sm" className="gap-1.5 h-9" onClick={() => setOpen(!open)}>
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{current.flag} {current.code.toUpperCase()}</span>
      </Button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-popover border rounded-md shadow-lg z-50 min-w-[150px]">
          {localeOptions.map(l => (
            <button key={l.code} className={`w-full text-left px-3 py-2 text-sm hover:bg-accent transition-colors ${locale === l.code ? 'bg-accent' : ''}`}
              onClick={() => { router.replace(pathname, { locale: l.code }); setOpen(false); }}>
              {l.flag} {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
