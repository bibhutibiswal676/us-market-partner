import { getHomeContent } from '@/lib/content';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CountryList from '@/components/CountryList';
import ServiceGrid from '@/components/ServiceGrid';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StatBar from '@/components/StatBar';
// import LogoCloud from '@/components/LogoCloud';
import Testimonials from '@/components/Testimonials';
import CTARibbon from '@/components/CTARibbon';
import FloatingBookCall from '@/components/FloatingBookCall';
import IntroCard from '@/components/IntroCard';
import FAQ from '@/components/FAQ';

export default async function Page() {
  const content = await getHomeContent();
  // Minimal placeholder data for newly added reusable sections. Replace with real content later.
  const stats = [
    { value: '50+', label: 'Target Sectors' },
    { value: '10+', label: 'Priority Countries' },
    { value: '24h', label: 'Response SLA' },
    { value: 'A+ ', label: 'Client Satisfaction' },
  ];
  const testimonials = [
    {
      quote: 'They helped us enter the US market faster than expected.',
      author: 'COO, TechCo',
      role: 'Mid-market SaaS',
      logoSrc: '/og.png',
    },
    {
      quote: 'Clear guidance on entity, tax, and hiring from day one.',
      author: 'Founder, RetailCo',
      role: 'Omnichannel retail',
    },
    {
      quote: 'Reliable execution and great partner network.',
      author: 'Head of Ops, FinCo',
      role: 'Fintech',
    },
  ];
  const faqs = [
    {
      q: 'What services do you offer for US expansion?',
      a: 'We provide end-to-end support across market entry strategy, legal and compliance, tax and accounting, hiring, and go-to-market execution.',
    },
    {
      q: 'How soon can we get started?',
      a: 'We can typically start with a discovery call within 24–48 hours and outline a plan in the same week.',
    },
    {
      q: 'Do you work with startups or only enterprises?',
      a: 'We partner with startups, SMBs, and mid-market teams. We tailor the engagement based on stage and needs.',
    },
  ];
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
          subtitle="Book a 20‑minute consultation to map your fastest path."
          ctaLabel="Book a call"
          ctaHref="/contact"
        />
        <CTASection {...content.ctaSection} />
        <FAQ items={faqs} title="FAQs" />
      </main>
      <FloatingBookCall />
      <Footer />
    </>
  );
}
