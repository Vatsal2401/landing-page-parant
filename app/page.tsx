import Navbar from '@/components/Navbar';
import LandingHero from '@/components/LandingHero';
import ServicesSection from '@/components/ServicesSection';
import ComparisonSection from '@/components/ComparisonSection';
import WorkTeaser from '@/components/WorkTeaser';
import TestimonialsSection from '@/components/TestimonialsSection';
import ResultsStrip from '@/components/ResultsStrip';
import HowItWorksSection from '@/components/HowItWorksSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import NewsletterSection from '@/components/NewsletterSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';

export default function Page() {
  return (
    <>
      <Navbar />
      <LandingHero />
      <ServicesSection />
      <ComparisonSection />
      <WorkTeaser />
      <TestimonialsSection />
      <ResultsStrip />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <NewsletterSection />
      <FinalCTASection />
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
