'use client';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [sent, setSent] = useState(false);
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12"><h1 className="text-4xl font-bold mb-3">{t('title')}</h1><p className="text-lg text-muted-foreground">{t('subtitle')}</p></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">{t('form')}</h2>
          {sent ? (
            <Card><CardContent className="pt-6 text-center py-12"><CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" /><p className="font-semibold">{t('sent')}</p></CardContent></Card>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <Input placeholder={t('name')} required />
              <Input type="email" placeholder={t('email')} required />
              <Input placeholder={t('subject')} />
              <Textarea placeholder={t('message')} rows={5} required />
              <Button type="submit" className="w-full"><Send className="w-4 h-4 mr-2" />{t('send')}</Button>
            </form>
          )}
        </div>
        <div>
          <Card><CardContent className="pt-6 space-y-5">
            {[
              { icon: MapPin, label: 'Visit Us', value: '123 Goldstrasse, Vienna, Austria 1010' },
              { icon: Phone, label: 'Call Us', value: '+43 1 234 5678' },
              { icon: Mail, label: 'Email Us', value: 'info@goldenpawn.com' },
              { icon: Clock, label: 'Hours', value: 'Mon-Fri: 9-18 | Sat: 10-16' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div><p className="text-sm text-muted-foreground">{item.label}</p><p className="font-medium">{item.value}</p></div>
              </div>
            ))}
          </CardContent></Card>
          <div className="mt-6 bg-muted rounded-xl h-[250px] flex items-center justify-center">
            <div className="text-center text-muted-foreground"><MapPin className="w-8 h-8 mx-auto mb-2" /><p className="text-sm">Google Maps Embed</p><p className="text-xs">123 Goldstrasse, Vienna</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}