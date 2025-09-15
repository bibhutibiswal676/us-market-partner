import { getHomeContent } from '@/lib/content';
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
  const content = await getHomeContent();

  const stats = [
    { value: '50+', label: 'Target Sectors' },
    { value: '10+', label: 'Priority Countries' },
    { value: '24h', label: 'Response SLA' },
    { value: 'A+', label: 'Client Satisfaction' },
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
    // Service-Wise FAQs
    {
      section: 'Insurance Services',
      items: [
        { q: 'Why do I need business insurance when expanding into the US?', a: 'Business insurance helps protect you from legal, financial, and operational risks such as lawsuits, employee injuries, and property damage. It’s also a requirement for many contracts and partnerships.' },
        { q: 'What types of insurance do you provide?', a: 'We offer general liability insurance, product liability coverage, workers\' compensation, property insurance, cyber insurance, and specialized industry coverage.' },
        { q: 'Can I get coverage before registering my company in the US?', a: 'Yes, we can provide preliminary coverage quotes and guide you through the process of activating policies once your entity is legally formed.' },
      ],
    },
    {
      section: 'Specialized Industry Services',
      items: [
        { q: 'What industries do you cover?', a: 'We support industries including IT, manufacturing, pharmaceuticals, automotive, retail, and healthcare.' },
        { q: 'Do you help with industry certifications?', a: 'Yes, we help you obtain required certifications like FDA, ISO, GMP, and other industry-specific compliance requirements.' },
        { q: 'Can you assist with supply chain partnerships?', a: 'Absolutely — we connect you with trusted US suppliers, distributors, and manufacturing partners.' },
      ],
    },
    {
      section: 'Marketing & Sales Services',
      items: [
        { q: 'Do you provide US market research?', a: 'Yes, we offer comprehensive market studies, competitor analysis, and customer persona development.' },
        { q: 'Can you run lead generation campaigns for us?', a: 'Yes, we run digital campaigns, email marketing, and B2B lead generation to help you acquire customers in the US.' },
        { q: 'Do you help with branding?', a: 'Absolutely — we assist with US-specific branding, messaging, and go-to-market strategy.' },
      ],
    },
    {
      section: 'Operational & Infrastructure Services',
      items: [
        { q: 'Do you help with office space setup?', a: 'Yes, we provide solutions for virtual offices, coworking spaces, and long-term office leasing.' },
        { q: 'Can you arrange warehousing and logistics?', a: 'Yes, we partner with fulfillment centers and logistics providers to set up an efficient supply chain.' },
        { q: 'Do you assist with hiring local staff?', a: 'Yes, we can help you recruit local employees or contract-based staff.' },
      ],
    },
    {
      section: 'Banking & Financial Services',
      items: [
        { q: 'Can I open a US business bank account remotely?', a: 'Yes, we assist with remote business bank account opening and provide guidance on documentation.' },
        { q: 'Do you help with business credit building?', a: 'Yes, we provide strategies for building US business credit and securing funding.' },
        { q: 'Do you offer CFO or financial consulting services?', a: 'Yes, we offer fractional CFO services to help manage your finances and cash flow.' },
      ],
    },
    {
      section: 'Tax & Accounting Services',
      items: [
        { q: 'Do you handle US federal and state tax filings?', a: 'Yes, we manage compliance with IRS and state tax authorities including sales tax registration and filing.' },
        { q: 'Can you support multi-entity accounting?', a: 'Absolutely — we consolidate reports and provide bookkeeping for global companies with US subsidiaries.' },
        { q: 'Do you assist with audits?', a: 'Yes, we prepare for internal and external audits and ensure compliance with GAAP.' },
      ],
    },
    {
      section: 'Legal & Compliance Services',
      items: [
        { q: 'Can you register my business in the US?', a: 'Yes, we help you choose the right entity type (LLC, C-Corp, etc.) and register it in your preferred state.' },
        { q: 'Do you draft contracts?', a: 'Yes, we prepare legally compliant contracts including NDAs, MSAs, and client agreements.' },
        { q: 'Do you help with immigration compliance?', a: 'Yes, we advise on work visas and employment compliance for foreign staff.' },
      ],
    },
    {
      section: 'HR & Talent Services',
      items: [
        { q: 'Can you help hire talent in the US?', a: 'Yes, we help you hire remote and in-office employees across various skill sets.' },
        { q: 'Do you manage payroll and benefits?', a: 'Yes, we provide payroll management, employee benefits administration, and compliance support.' },
        { q: 'Can you handle employee onboarding?', a: 'Absolutely — we create structured onboarding processes to meet local HR regulations.' },
      ],
    },
    {
      section: 'IT & Tech Support',
      items: [
        { q: 'Do you offer IT infrastructure setup?', a: 'Yes, we provide cloud setup, IT networking, and security solutions for your US office.' },
        { q: 'Can you develop custom software?', a: 'Yes, we offer full-stack development services, integrations, and ongoing tech support.' },
        { q: 'Do you provide cybersecurity support?', a: 'Absolutely — we offer monitoring, penetration testing, and compliance audits.' },
      ],
    },

    // Country-Wise FAQs
    {
      section: 'India - US Business Expansion',
      items: [
        { q: 'Why should Indian companies consider entering the US market?', a: 'The US is India’s largest export destination for IT, pharmaceuticals, and professional services. Establishing a local presence helps Indian businesses get closer to enterprise clients, tap into venture capital, and build credibility with US customers.' },
        { q: 'What challenges do Indian startups face when expanding to the US?', a: 'Key challenges include legal incorporation, understanding tax regulations, hiring locally, and managing compliance with US data and labor laws.' },
        { q: 'Which sectors from India perform best in the US?', a: 'IT & SaaS, e-commerce, pharmaceuticals, fintech, and professional consulting remain the top-performing sectors.' },
        { q: 'How can US Market Partner help Indian businesses?', a: 'We offer end-to-end support, including market research, company registration, compliance, and connecting with potential partners and investors.' },
      ],
    },
    {
      section: 'Japan - US Business Expansion',
      items: [
        { q: 'Why is the US a top destination for Japanese companies?', a: 'The US is one of Japan’s largest trading partners and offers strong demand for automobiles, EVs, robotics, and industrial equipment.' },
        { q: 'What is driving Japanese investment in the US?', a: 'Japanese firms are investing in EV production, next-gen robotics, and semiconductor supply chains to remain competitive and meet US sustainability goals.' },
        { q: 'How do Japanese companies navigate US compliance?', a: 'They work with local advisors to meet safety, labor, and environmental standards — a key step we facilitate at US Market Partner.' },
        { q: 'Which US states are popular for Japanese companies?', a: 'Texas, Ohio, Tennessee, and Alabama are popular due to automotive manufacturing hubs and favorable tax conditions.' },
      ],
    },
    {
      section: 'Canada - US Business Expansion',
      items: [
        { q: 'Why is cross-border business so strong between Canada and the US?', a: 'The two countries share the USMCA trade agreement, making it easier for Canadian businesses to set up subsidiaries, ship goods, and expand quickly.' },
        { q: 'What sectors dominate Canadian investment in the US?', a: 'Finance, insurance, manufacturing, and energy infrastructure lead the way.' },
        { q: 'How does US Market Partner assist Canadian SMEs?', a: 'We handle tax registration, legal setup, and compliance support so Canadian businesses can focus on operations and growth.' },
      ],
    },
    {
      section: 'Germany (Europe) -  US Business Expansion',
      items: [
        { q: 'Why do German companies expand to the US?', a: 'The US provides a large market for German chemical, engineering, and automotive products, along with opportunities to open R&D and logistics hubs.' },
        { q: 'What are the key challenges for German businesses?', a: 'Understanding US employment law, local tax compliance, and building distribution networks can be challenging.' },
        { q: 'Which sectors are most successful?', a: 'Chemicals, engineering services, energy infrastructure, and e-commerce logistics hubs have the strongest presence.' },
      ],
    },
    {
      section: 'United Kingdom & Europe - US Business Expansion',
      items: [
        { q: 'Why is the US attractive for UK and European businesses?', a: 'The US is a natural next step for fintech, AI, and manufacturing companies thanks to shared language, legal frameworks, and investor networks.' },
        { q: 'Which sectors thrive most?', a: 'Finance, high-tech, AI, and advanced manufacturing affiliates see the highest growth.' },
        { q: 'How does US Market Partner assist?', a: 'We provide regulatory navigation, banking and tax setup, and GTM (go-to-market) strategies for UK/European companies.' },
      ],
    },
    {
      section: 'UAE (Abu Dhabi, G42) - US Business Expansion',
      items: [
        { q: 'Why are UAE companies investing in the US?', a: 'AI, cloud computing, and high-tech infrastructure investments are growing rapidly. UAE funds are actively backing US startups and infrastructure projects.' },
        { q: 'How do we help UAE businesses?', a: 'We assist with compliance, partnerships with US tech firms, and business setup for AI and cloud ventures.' },
      ],
    },
    {
      section: 'Taiwan - US Business Expansion',
      items: [
        { q: 'Why is Taiwan key to the US semiconductor market?', a: 'Taiwanese giants like TSMC are reshaping semiconductor supply chains by building fabs in Arizona and partnering with US companies.' },
        { q: 'How can smaller Taiwanese firms participate?', a: 'Through supplier partnerships, logistics solutions, and US Market Partner’s facilitation of B2B connections.' },
      ],
    },
    {
      section: 'South Korea - US Business Expansion',
      items: [
        { q: 'Why are Korean companies investing in EV battery plants in the US?', a: 'US EV incentives and demand for clean energy make local production highly profitable.' },
        { q: 'How do we assist Korean businesses?', a: 'We help with site selection, labor compliance, and partnerships with US automakers.' },
      ],
    },
    {
      section: 'Mexico - US Business Expansion',
      items: [
        { q: 'Why do Mexican SMEs enter the US market?', a: 'Proximity, competitive manufacturing costs, and strong US demand make cross-border trade lucrative.' },
        { q: 'How does US Market Partner assist?', a: 'We help with import/export compliance, distribution setup, and e-commerce expansion.' },
      ],
    },
    {
      section: 'Brazil - US Business Expansion',
      items: [
        { q: 'What makes the US attractive for Brazilian businesses?', a: 'Brazilian agri-business and consumer goods firms see the US as a major growth market.' },
        { q: 'Which services do they need most?', a: 'Legal setup, FDA compliance for food products, and marketing strategies to reach US consumers.' },
      ],
    },
    {
      section: 'Israel - US Business Expansion',
      items: [
        { q: 'Why do Israeli companies look to the US first?', a: 'The US is the largest market for cybersecurity, SaaS, and medtech — key strengths of Israel’s startup ecosystem.' },
        { q: 'How do we help Israeli companies?', a: 'We provide compliance assistance, access to venture networks, and go-to-market support.' },
      ],
    },
    {
      section: 'Singapore - US Business Expansion',
      items: [
        { q: 'Why is the US a prime market for Singaporean businesses?', a: 'Singapore’s fintech, medtech, and logistics players see the US as the largest market for scaling operations globally.' },
        { q: 'Which services are critical for Singapore SMEs?', a: 'Legal incorporation, compliance, and supply chain setup are crucial — services we deliver end-to-end.' },
      ],
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
          subtitle="Book a 20 minute consultation to map your fastest path."
          ctaLabel="Book a call"
          ctaHref="/contact"
        />
        {/* <CTASection {...content.ctaSection} /> */}
        <FAQ items={faqs} title="Frequently Asked Questions" />
      </main>
      <FloatingBookCall />
      <Footer />
    </>
  );
}
