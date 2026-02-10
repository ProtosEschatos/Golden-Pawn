'use client';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';

export default function AppraisalPage() {
  const t = useTranslations('appraisal');
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-8"><h1 className="text-4xl font-bold mb-3">{t('title')}</h1><p className="text-lg text-muted-foreground">{t('subtitle')}</p></div>
      <Card><CardContent className="pt-6">
        <div className="bg-muted/50 rounded-xl p-8 text-center">
          <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t('calPlaceholder')}</h3>
          <p className="text-muted-foreground mb-6">In production, the Cal.com widget loads here for appointment scheduling.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-sm">
            <div className="flex items-center gap-2 justify-center"><Clock className="h-4 w-4 text-primary" /><span>30 min sessions</span></div>
            <div className="flex items-center gap-2 justify-center"><MapPin className="h-4 w-4 text-primary" /><span>In-store or video</span></div>
            <div className="flex items-center gap-2 justify-center"><CheckCircle className="h-4 w-4 text-green-500" /><span>100% Free</span></div>
          </div>
        </div>
      </CardContent></Card>
    </div>
  );
}