import { unstable_setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/sections/hero';
import { QuickAccessSection } from '@/components/sections/quick-access';
import { LiveAuctionsSection } from '@/components/sections/live-auctions';
import { HowPawnWorksSection } from '@/components/sections/how-pawn-works';
import { FeaturedItemsSection } from '@/components/sections/featured-items';
import { RecentlySoldSection } from '@/components/sections/recently-sold';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us';
import { CategoriesSection } from '@/components/sections/categories-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { NewsletterSection } from '@/components/sections/newsletter-section';
import { FAQSection } from '@/components/sections/faq-section';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <HeroSection />
      <QuickAccessSection />
      <LiveAuctionsSection />
      <HowPawnWorksSection />
      <FeaturedItemsSection />
      <RecentlySoldSection />
      <WhyChooseUsSection />
      <CategoriesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FAQSection />
    </>
  );
}
