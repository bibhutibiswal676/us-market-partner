import { stats, testimonials, faqs, getHomeContent } from '@/lib/content';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CountryList from '@/components/CountryList';
import ServiceGrid from '@/components/ServiceGrid';
// import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StatBar from '@/components/StatBar';
// import LogoCloud from '@/components/LogoCloud';
import Testimonials from '@/components/Testimonials';
import CTARibbon from '@/components/CTARibbon';
import FloatingBookCall from '@/components/FloatingBookCall';
import IntroCard from '@/components/IntroCard';
import FAQ from '@/components/FAQ';

export default async function Page() {
  const content = getHomeContent();
  return (
    <>
      <Header />
      <main>
        <Hero {...content.hero} />
        <StatBar stats={stats} />
        {/* <LogoCloud logos={logos} title="Trusted by teams and partners" /> */}
        <IntroCard
          text={content.intro}
          chips={[
            'Insurance',
            'Marketing & Sales',
            'Operations & Infrastructure',
            'Banking & Financial',
            'Tax & Accounting',
            'Legal & Compliance',
            'Specialized Industry',
          ]}
        />
        <CountryList countries={content.countries} />
        <ServiceGrid services={content.services} />
        <Testimonials items={testimonials} title="What customers say" />
        <CTARibbon
          title="Ready to plan your US expansion?"
          subtitle="Book a 20 minute consultation to map your fastest path."
          ctaLabel="Book a call"
          ctaHref="https://calendly.com/l4rgusllc/scheduling"
        />
        {/* <CTASection {...content.ctaSection} /> */}
        <FAQ items={faqs} title="Frequently Asked Questions" />
      </main>
      <FloatingBookCall />
      <Footer />
    </>
  );
}
