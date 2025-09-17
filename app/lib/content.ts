import type { HomeContent } from '@/types/content';

const data = {
  hero: {
    title: 'Expand Your Business into the US Market with Confidence',
    subtitle:
      'Partnering with global SMEs for 5+ years to unlock opportunities in the United States across industries, products, and services.',
    ctaText: 'Talk to an Expert',
    videoSrc: 'https://d3euc6irt3la1j.cloudfront.net/us-market-partner.mp4',
    poster: '/video/poster.jpg',
  },
  intro:
    'At US Market Partner, we specialize in helping small and medium enterprises (SMEs) from around the world successfully expand their businesses into the United States. With over 5 years of experience, we provide end-to-end support across multiple sectors — from e-commerce and food & beverage to technology and manufacturing. Our team of experts ensures a seamless transition into the US market by offering a comprehensive suite of Insurance, Specialized Industry, Marketing & Sales, Operational & Infrastructure, Banking & Financial, Tax & Accounting, and Legal & Compliance Services.',
  countries: [
    {
      slug: 'india',
      name: 'India',
      description:
        'India is one of the fastest-growing contributors to US business expansion, driven by its dominance in IT services, SaaS, e-commerce, and pharmaceuticals. Indian technology firms are setting up innovation hubs, sales offices, and R&D centers across the United States to better serve enterprise clients. The US remains India’s largest export destination for IT services and software products, making it crucial for startups and unicorns seeking global growth. E-commerce companies from India are opening fulfillment centers to optimize last-mile delivery and reach US consumers. Indian pharmaceutical firms are investing in FDA-compliant manufacturing facilities and clinical research operations. Fintech companies are entering the US market with payment solutions, neobanking apps, and cross-border money transfer services. Professional service providers, including consulting, legal, and accounting firms, are opening subsidiaries to expand client reach. India’s young, skilled workforce and government-backed initiatives like “Startup India” are helping companies accelerate US market entry.',
      sectors: [
        { slug: 'e-commerce', name: 'E-commerce' },
        { slug: 'pharmaceuticals', name: 'Pharmaceuticals' },
        { slug: 'it-and-saas', name: 'IT & SaaS' },
        { slug: 'fintech', name: 'Fintech' },
        { slug: 'professional-services', name: 'Professional Services' },
      ],
    },
    {
      slug: 'mexico',
      name: 'Mexico',
      description:
        'Mexico remains one of the most important manufacturing partners for the United States. Its SMEs specialize in auto components, electronics, and food production. Proximity and trade agreements make supply chains faster and more cost-efficient. Many US firms are nearshoring production to Mexico to mitigate global supply chain risks. Agricultural exports such as fruits, vegetables, and processed foods meet growing US demand. Mexican e-commerce sellers are expanding onto US online marketplaces. Maquiladoras near the US border provide jobs and boost bilateral trade. This partnership strengthens North America’s competitive edge in global manufacturing.',
      sectors: [
        { slug: 'food-and-beverage', name: 'Food & Beverage' },
        { slug: 'manufacturing', name: 'Manufacturing & Auto Components' },
        { slug: 'e-commerce', name: 'E-commerce' },
      ],
    },
    {
      slug: 'united-kingdom',
      name: 'United Kingdom',
      description:
        'The UK and Europe are key sources of foreign direct investment into the United States, particularly in finance, fintech, and advanced manufacturing. London-based banks and asset management firms maintain strong operations in New York and Chicago. European AI and SaaS startups use tech hubs like Austin, San Francisco, and Boston to scale globally. Manufacturing affiliates are setting up US production plants to meet local demand and reduce supply chain risks. The UK’s legal system and regulatory alignment make US expansion easier for businesses. Brexit has encouraged many UK firms to diversify into the US market to maintain global competitiveness. European cleantech companies are working with US cities to implement sustainable solutions. This strong partnership fuels job creation, investment, and technological growth.',
      sectors: [
        { slug: 'finance-and-banking', name: 'Finance & Banking' },
        { slug: 'high-tech-and-ai', name: 'High-Tech & AI' },
        { slug: 'advance-manufacturing', name: 'Advanced Manufacturing' },
      ],
    },
    {
      slug: 'germany',
      name: 'Germany',
      description:
        "Germany is Europe's largest investor in the United States, with major activity in chemical manufacturing, engineering, and energy infrastructure. German companies have established advanced manufacturing plants across several US states. Specialty chemical producers are building factories to supply the US industrial and pharmaceutical markets. German energy firms are investing in renewable power generation, hydrogen projects, and smart grids. E-commerce and logistics companies from Germany are opening warehouses and distribution centers to serve US consumers efficiently. Mittelstand businesses (SMEs) are forming B2B partnerships, supplying machinery and tools for US manufacturing operations. Collaborative R&D projects in AI, mobility, and sustainability are common between US and German firms. This relationship reinforces transatlantic trade and promotes technological advancement.",
      sectors: [
        {
          slug: 'chemical-engineering',
          name: 'Chemicals & Engineering',
        },
        {
          slug: 'engineering-and-infrastructure',
          name: 'Energy Infrastructure',
        },
        { slug: 'e-commerce-and-logistics', name: 'E-commerce & Logistics' },
      ],
    },
    {
      slug: 'brazil',
      name: 'Brazil',
      description:
        'Brazil is a major exporter of food, beverages, and agri-products to the US. Brazilian SMEs supply beef, poultry, soy, coffee, and sugar to US retailers. Processed food brands are gaining market share in US supermarkets and restaurants. Brazil’s fintech and SaaS companies are also entering the US market to access funding and customers. Legal and compliance support is key to meeting FDA and USDA requirements. Logistics operations and distribution hubs are being set up in major US cities. Brazil’s fashion, beauty, and creative industries are also finding success in the US. This combination of sectors makes Brazil an exciting partner for trade and investment.',
      sectors: [
        { slug: 'food-and-beverage', name: 'Food & Beverage' },
        { slug: 'agri-business', name: 'Agri-business' },
        { slug: 'e-commerce', name: 'E-commerce' },
      ],
    },
    {
      slug: 'israel',
      name: 'Israel',
      description:
        'Israel is a world leader in technology, cybersecurity, and medtech innovation. Israeli startups often choose the US as their primary market for growth. Cybersecurity firms work closely with US enterprises and government agencies to secure infrastructure. Medtech companies partner with hospitals and insurers to deploy innovative health solutions. SaaS firms are offering enterprise-grade analytics, CRM, and automation platforms to US businesses. The US market provides Israeli companies access to funding, customers, and strong IP protection. Compliance and legal guidance are essential for protecting intellectual property and meeting regulations. These partnerships accelerate technology adoption and foster bilateral growth.',
      sectors: [
        { slug: 'tech-and-saas', name: 'Tech & SaaS' },
        { slug: 'cybersecurity', name: 'Cybersecurity' },
        { slug: 'medtech', name: 'MedTech' },
      ],
    },
    {
      slug: 'singapore',
      name: 'Singapore',
      description:
        'Singapore is a leading hub for innovation and global business expansion. Its fintech startups are launching payment solutions and digital banking services in the US. Biotech and medtech firms are collaborating with US research institutions on breakthrough treatments. Logistics and supply chain companies from Singapore are building networks to support global e-commerce. The country’s business-friendly policies make it a preferred base for multinational firms. Singaporean companies are also active in precision engineering and advanced manufacturing. Government initiatives like Enterprise Singapore help businesses with funding and expansion. These factors make Singapore a key bridge between Asia-Pacific and the US market.',
      sectors: [
        { slug: 'fintech', name: 'Fintech' },
        { slug: 'medtech', name: 'MedTech' },
        {
          slug: 'logistics-and-supply-chain',
          name: 'Logistics & Supply Chain',
        },
        {
          slug: 'advance-manufacturing',
          name: 'Advanced Manufacturing',
        },
      ],
    },
    {
      slug: 'japan',
      name: 'Japan',
      description:
        'Japan continues to be one of the largest foreign investors in the US, with a strong presence in automotive manufacturing, robotics, and heavy industry. Japanese automakers are investing billions in EV production facilities and battery plants to meet the rising demand for electric vehicles. Robotics and automation solutions from Japan are improving manufacturing efficiency across US factories. Japanese firms are also active in high-speed rail, green energy, and smart supply chain projects. Their commitment to precision engineering and quality makes them key partners for American businesses. Financial institutions in Japan support mergers, acquisitions, and financing for expansion projects in the US. Japan’s focus on R&D and next-generation technology strengthens its partnership with the US.',
      sectors: [
        {
          slug: 'automotive-manufacturing',
          name: 'Automotive Manufacturing',
        },
        { slug: 'heavy-industry', name: 'Heavy Industry' },
        { slug: 'robotics-automation', name: 'Robotics & Automation' },
        { slug: 'ev-production', name: 'EV Production' },
      ],
    },
    {
      slug: 'canada',
      name: 'Canada',
      description:
        'Canada maintains one of the closest economic relationships with the United States, supported by the USMCA trade agreement. Canadian companies invest heavily in finance, insurance, and manufacturing sectors across the US. Cross-border trade is streamlined, enabling SMEs to expand quickly and cost-effectively. Canadian manufacturing firms supply automotive parts, aerospace components, and machinery to US industries. Energy collaboration remains strong, with Canada exporting oil, gas, and renewables to the US. Tech startups from Canada are moving into US markets like Silicon Valley and New York to raise venture capital. The cultural alignment and regulatory similarities between the two countries make US market entry easier for Canadian businesses. This integrated relationship ensures Canada remains one of the top players in North American trade .',
      sectors: [
        { slug: 'finance-insurance', name: 'Finance & Insurance' },
        { slug: 'manufacturing', name: 'Manufacturing' },
        { slug: 'energy-infrastructure', name: 'Energy & Infrastructure' },
      ],
    },
    {
      slug: 'uae',
      name: 'UAE',
      description:
        'The UAE has emerged as a major strategic investor in the US, focusing on AI, cloud computing, and digital infrastructure. Sovereign wealth funds and groups like G42 are funding data centers, cybersecurity initiatives, and AI research projects. These investments support America’s digital transformation and future-ready economy. Emirati capital is also backing biotech, logistics, and healthcare ventures. The UAE’s diversification strategy aligns well with US innovation goals, making it a natural partner. Joint projects in smart city development and AI-driven healthcare solutions are increasing. Emirati companies are seeking technology partners and service providers to strengthen these initiatives. This collaboration is opening doors for businesses across multiple industries.',
      sectors: [
        { slug: 'ai-ml', name: 'AI & Machine Learning' },
        { slug: 'cloud-computing', name: 'Cloud Computing' },
        { slug: 'digital-infrastructure', name: 'Digital Infrastructure' },
      ],
    },
    {
      slug: 'taiwan',
      name: 'Taiwan',
      description:
        "Taiwan is a critical player in the US semiconductor and electronics supply chain. TSMC is building multi-billion-dollar chip manufacturing plants in Arizona, reshaping global semiconductor production. Electronics giants like Compal and Inventec are opening assembly and testing facilities in the US. This expansion creates opportunities for suppliers, contractors, and technology partners. Taiwanese firms are collaborating with US companies on R&D for next-generation processors and AI chips. Their expertise ensures a stable and high-quality supply of critical components. These efforts strengthen America's competitiveness in advanced computing. Taiwan's commitment to innovation makes it a reliable partner for US tech companies.",
      sectors: [
        { slug: 'semiconductors', name: 'Semiconductors' },
        {
          slug: 'electronics-manufacturing',
          name: 'Electronics Manufacturing',
        },
        {
          slug: 'chip-design-fabrication',
          name: 'Chip Design & Fabrication',
        },
      ],
    },
    {
      slug: 'south-korea',
      name: 'South Korea',
      description:
        'South Korea is rapidly expanding in the US with major investments in electric vehicle production and clean energy. Automakers like Hyundai and Kia are building EV assembly plants to meet growing demand. LG Energy Solutions is investing in battery gigafactories across the US. These initiatives are central to America’s clean energy transition. Korean companies are also pioneering robotics and AI-powered manufacturing solutions. Strategic partnerships with US universities and labs are driving innovation in green energy and mobility. Legal and workforce compliance support is essential for these large-scale projects. Together, these investments are building a future-ready automotive and energy ecosystem in the US.',
      sectors: [
        { slug: 'ev-battery-production', name: 'EV Battery Production' },
        {
          slug: 'automotive-manufacturing',
          name: 'Automotive Manufacturing',
        },
        {
          slug: 'clean-energy-infrastructure',
          name: 'Clean Energy Infrastructure',
        },
      ],
    },
    {
      slug: 'united-kingdom-europe',
      name: 'United Kingdom & Europe',
      description:
        'The UK and Europe are key sources of foreign direct investment into the United States, particularly in finance, fintech, and advanced manufacturing. London-based banks and asset management firms maintain strong operations in New York and Chicago. European AI and SaaS startups use tech hubs like Austin, San Francisco, and Boston to scale globally. Manufacturing affiliates are setting up US production plants to meet local demand and reduce supply chain risks. The UK’s legal system and regulatory alignment make US expansion easier for businesses. Brexit has encouraged many UK firms to diversify into the US market to maintain global competitiveness. European cleantech companies are working with US cities to implement sustainable solutions. This strong partnership fuels job creation, investment, and technological growth.',
      sectors: [
        { slug: 'finance-banking', name: 'Finance & Banking' },
        { slug: 'high-tech-ai', name: 'High-Tech & AI' },
        { slug: 'advanced-manufacturing', name: 'Advanced Manufacturing' },
      ],
    },
  ],
  services: [
    {
      slug: 'insurance',
      title: 'Insurance Services',
      shortDescription:
        'Protect your assets and operations with tailored business insurance solutions.',
      icon: 'shield',
    },
    {
      slug: 'industry',
      title: 'Specialized Industry Services',
      shortDescription:
        'Industry-specific consulting, certifications, and compliance support.',
      icon: 'factory',
    },
    {
      slug: 'marketing-sales',
      title: 'Marketing & Sales Services',
      shortDescription:
        'Market research, lead generation, digital marketing, and sales enablement.',
      icon: 'megaphone',
    },
    {
      slug: 'operations',
      title: 'Operational & Infrastructure Services',
      shortDescription:
        'Office setup, supply chain management, warehousing, and logistics.',
      icon: 'gear',
    },
    {
      slug: 'banking',
      title: 'Banking & Financial Services',
      shortDescription:
        'Assistance with banking, loans, investment, and cash flow management.',
      icon: 'bank',
    },
    {
      slug: 'tax',
      title: 'Tax & Accounting Services',
      shortDescription:
        'GST, US federal/state tax compliance, bookkeeping, and audit support.',
      icon: 'calculator',
    },
    {
      slug: 'legal',
      title: 'Legal & Compliance Services',
      shortDescription:
        'Company registration, contracts, intellectual property, and regulatory compliance.',
      icon: 'gavel',
    },
    {
      slug: 'hr-talent',
      title: 'HR & Talent Services',
      shortDescription:
        'Recruitment, HR compliance, payroll setup, handbooks, and labor law adherence.',
      icon: 'people',
    },
    {
      slug: 'it-tech',
      title: 'IT & Tech Support',
      shortDescription:
        'Cloud setup, cybersecurity, integrations, and 24/7 technical support.',
      icon: 'laptop',
    },
  ],
  ctaSection: {
    title: 'Ready to Expand Your Business to the US?',
    buttonText: 'Get Started Today',
  },
};

export function getHomeContent(): HomeContent {
  return data;
}

export const stats = [
  { value: '50+', label: 'Target Sectors' },
  { value: '10+', label: 'Priority Countries' },
  { value: '24h', label: 'Response SLA' },
  { value: 'A+', label: 'Client Satisfaction' },
];

export const testimonials = [
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

export const faqs = [
  // Service-Wise FAQs
  {
    section: 'Insurance Services',
    items: [
      {
        q: 'Why do I need business insurance when expanding into the US?',
        a: 'Business insurance helps protect you from legal, financial, and operational risks such as lawsuits, employee injuries, and property damage. It’s also a requirement for many contracts and partnerships.',
      },
      {
        q: 'What types of insurance do you provide?',
        a: "We offer general liability insurance, product liability coverage, workers' compensation, property insurance, cyber insurance, and specialized industry coverage.",
      },
      {
        q: 'Can I get coverage before registering my company in the US?',
        a: 'Yes, we can provide preliminary coverage quotes and guide you through the process of activating policies once your entity is legally formed.',
      },
    ],
  },
  {
    section: 'Specialized Industry Services',
    items: [
      {
        q: 'What industries do you cover?',
        a: 'We support industries including IT, manufacturing, pharmaceuticals, automotive, retail, and healthcare.',
      },
      {
        q: 'Do you help with industry certifications?',
        a: 'Yes, we help you obtain required certifications like FDA, ISO, GMP, and other industry-specific compliance requirements.',
      },
      {
        q: 'Can you assist with supply chain partnerships?',
        a: 'Absolutely — we connect you with trusted US suppliers, distributors, and manufacturing partners.',
      },
    ],
  },
  {
    section: 'Marketing & Sales Services',
    items: [
      {
        q: 'Do you provide US market research?',
        a: 'Yes, we offer comprehensive market studies, competitor analysis, and customer persona development.',
      },
      {
        q: 'Can you run lead generation campaigns for us?',
        a: 'Yes, we run digital campaigns, email marketing, and B2B lead generation to help you acquire customers in the US.',
      },
      {
        q: 'Do you help with branding?',
        a: 'Absolutely — we assist with US-specific branding, messaging, and go-to-market strategy.',
      },
    ],
  },
  {
    section: 'Operational & Infrastructure Services',
    items: [
      {
        q: 'Do you help with office space setup?',
        a: 'Yes, we provide solutions for virtual offices, coworking spaces, and long-term office leasing.',
      },
      {
        q: 'Can you arrange warehousing and logistics?',
        a: 'Yes, we partner with fulfillment centers and logistics providers to set up an efficient supply chain.',
      },
      {
        q: 'Do you assist with hiring local staff?',
        a: 'Yes, we can help you recruit local employees or contract-based staff.',
      },
    ],
  },
  {
    section: 'Banking & Financial Services',
    items: [
      {
        q: 'Can I open a US business bank account remotely?',
        a: 'Yes, we assist with remote business bank account opening and provide guidance on documentation.',
      },
      {
        q: 'Do you help with business credit building?',
        a: 'Yes, we provide strategies for building US business credit and securing funding.',
      },
      {
        q: 'Do you offer CFO or financial consulting services?',
        a: 'Yes, we offer fractional CFO services to help manage your finances and cash flow.',
      },
    ],
  },
  {
    section: 'Tax & Accounting Services',
    items: [
      {
        q: 'Do you handle US federal and state tax filings?',
        a: 'Yes, we manage compliance with IRS and state tax authorities including sales tax registration and filing.',
      },
      {
        q: 'Can you support multi-entity accounting?',
        a: 'Absolutely — we consolidate reports and provide bookkeeping for global companies with US subsidiaries.',
      },
      {
        q: 'Do you assist with audits?',
        a: 'Yes, we prepare for internal and external audits and ensure compliance with GAAP.',
      },
    ],
  },
  {
    section: 'Legal & Compliance Services',
    items: [
      {
        q: 'Can you register my business in the US?',
        a: 'Yes, we help you choose the right entity type (LLC, C-Corp, etc.) and register it in your preferred state.',
      },
      {
        q: 'Do you draft contracts?',
        a: 'Yes, we prepare legally compliant contracts including NDAs, MSAs, and client agreements.',
      },
      {
        q: 'Do you help with immigration compliance?',
        a: 'Yes, we advise on work visas and employment compliance for foreign staff.',
      },
    ],
  },
  {
    section: 'HR & Talent Services',
    items: [
      {
        q: 'Can you help hire talent in the US?',
        a: 'Yes, we help you hire remote and in-office employees across various skill sets.',
      },
      {
        q: 'Do you manage payroll and benefits?',
        a: 'Yes, we provide payroll management, employee benefits administration, and compliance support.',
      },
      {
        q: 'Can you handle employee onboarding?',
        a: 'Absolutely — we create structured onboarding processes to meet local HR regulations.',
      },
    ],
  },
  {
    section: 'IT & Tech Support',
    items: [
      {
        q: 'Do you offer IT infrastructure setup?',
        a: 'Yes, we provide cloud setup, IT networking, and security solutions for your US office.',
      },
      {
        q: 'Can you develop custom software?',
        a: 'Yes, we offer full-stack development services, integrations, and ongoing tech support.',
      },
      {
        q: 'Do you provide cybersecurity support?',
        a: 'Absolutely — we offer monitoring, penetration testing, and compliance audits.',
      },
    ],
  },

  // Country-Wise FAQs
  {
    section: 'India - US Business Expansion',
    items: [
      {
        q: 'Why should Indian companies consider entering the US market?',
        a: 'The US is India’s largest export destination for IT, pharmaceuticals, and professional services. Establishing a local presence helps Indian businesses get closer to enterprise clients, tap into venture capital, and build credibility with US customers.',
      },
      {
        q: 'What challenges do Indian startups face when expanding to the US?',
        a: 'Key challenges include legal incorporation, understanding tax regulations, hiring locally, and managing compliance with US data and labor laws.',
      },
      {
        q: 'Which sectors from India perform best in the US?',
        a: 'IT & SaaS, e-commerce, pharmaceuticals, fintech, and professional consulting remain the top-performing sectors.',
      },
      {
        q: 'How can US Market Partner help Indian businesses?',
        a: 'We offer end-to-end support, including market research, company registration, compliance, and connecting with potential partners and investors.',
      },
    ],
  },
  {
    section: 'Japan - US Business Expansion',
    items: [
      {
        q: 'Why is the US a top destination for Japanese companies?',
        a: 'The US is one of Japan’s largest trading partners and offers strong demand for automobiles, EVs, robotics, and industrial equipment.',
      },
      {
        q: 'What is driving Japanese investment in the US?',
        a: 'Japanese firms are investing in EV production, next-gen robotics, and semiconductor supply chains to remain competitive and meet US sustainability goals.',
      },
      {
        q: 'How do Japanese companies navigate US compliance?',
        a: 'They work with local advisors to meet safety, labor, and environmental standards — a key step we facilitate at US Market Partner.',
      },
      {
        q: 'Which US states are popular for Japanese companies?',
        a: 'Texas, Ohio, Tennessee, and Alabama are popular due to automotive manufacturing hubs and favorable tax conditions.',
      },
    ],
  },
  {
    section: 'Canada - US Business Expansion',
    items: [
      {
        q: 'Why is cross-border business so strong between Canada and the US?',
        a: 'The two countries share the USMCA trade agreement, making it easier for Canadian businesses to set up subsidiaries, ship goods, and expand quickly.',
      },
      {
        q: 'What sectors dominate Canadian investment in the US?',
        a: 'Finance, insurance, manufacturing, and energy infrastructure lead the way.',
      },
      {
        q: 'How does US Market Partner assist Canadian SMEs?',
        a: 'We handle tax registration, legal setup, and compliance support so Canadian businesses can focus on operations and growth.',
      },
    ],
  },
  {
    section: 'Germany (Europe) -  US Business Expansion',
    items: [
      {
        q: 'Why do German companies expand to the US?',
        a: 'The US provides a large market for German chemical, engineering, and automotive products, along with opportunities to open R&D and logistics hubs.',
      },
      {
        q: 'What are the key challenges for German businesses?',
        a: 'Understanding US employment law, local tax compliance, and building distribution networks can be challenging.',
      },
      {
        q: 'Which sectors are most successful?',
        a: 'Chemicals, engineering services, energy infrastructure, and e-commerce logistics hubs have the strongest presence.',
      },
    ],
  },
  {
    section: 'United Kingdom & Europe - US Business Expansion',
    items: [
      {
        q: 'Why is the US attractive for UK and European businesses?',
        a: 'The US is a natural next step for fintech, AI, and manufacturing companies thanks to shared language, legal frameworks, and investor networks.',
      },
      {
        q: 'Which sectors thrive most?',
        a: 'Finance, high-tech, AI, and advanced manufacturing affiliates see the highest growth.',
      },
      {
        q: 'How does US Market Partner assist?',
        a: 'We provide regulatory navigation, banking and tax setup, and GTM (go-to-market) strategies for UK/European companies.',
      },
    ],
  },
  {
    section: 'UAE (Abu Dhabi, G42) - US Business Expansion',
    items: [
      {
        q: 'Why are UAE companies investing in the US?',
        a: 'AI, cloud computing, and high-tech infrastructure investments are growing rapidly. UAE funds are actively backing US startups and infrastructure projects.',
      },
      {
        q: 'How do we help UAE businesses?',
        a: 'We assist with compliance, partnerships with US tech firms, and business setup for AI and cloud ventures.',
      },
    ],
  },
  {
    section: 'Taiwan - US Business Expansion',
    items: [
      {
        q: 'Why is Taiwan key to the US semiconductor market?',
        a: 'Taiwanese giants like TSMC are reshaping semiconductor supply chains by building fabs in Arizona and partnering with US companies.',
      },
      {
        q: 'How can smaller Taiwanese firms participate?',
        a: 'Through supplier partnerships, logistics solutions, and US Market Partner’s facilitation of B2B connections.',
      },
    ],
  },
  {
    section: 'South Korea - US Business Expansion',
    items: [
      {
        q: 'Why are Korean companies investing in EV battery plants in the US?',
        a: 'US EV incentives and demand for clean energy make local production highly profitable.',
      },
      {
        q: 'How do we assist Korean businesses?',
        a: 'We help with site selection, labor compliance, and partnerships with US automakers.',
      },
    ],
  },
  {
    section: 'Mexico - US Business Expansion',
    items: [
      {
        q: 'Why do Mexican SMEs enter the US market?',
        a: 'Proximity, competitive manufacturing costs, and strong US demand make cross-border trade lucrative.',
      },
      {
        q: 'How does US Market Partner assist?',
        a: 'We help with import/export compliance, distribution setup, and e-commerce expansion.',
      },
    ],
  },
  {
    section: 'Brazil - US Business Expansion',
    items: [
      {
        q: 'What makes the US attractive for Brazilian businesses?',
        a: 'Brazilian agri-business and consumer goods firms see the US as a major growth market.',
      },
      {
        q: 'Which services do they need most?',
        a: 'Legal setup, FDA compliance for food products, and marketing strategies to reach US consumers.',
      },
    ],
  },
  {
    section: 'Israel - US Business Expansion',
    items: [
      {
        q: 'Why do Israeli companies look to the US first?',
        a: 'The US is the largest market for cybersecurity, SaaS, and medtech — key strengths of Israel’s startup ecosystem.',
      },
      {
        q: 'How do we help Israeli companies?',
        a: 'We provide compliance assistance, access to venture networks, and go-to-market support.',
      },
    ],
  },
  {
    section: 'Singapore - US Business Expansion',
    items: [
      {
        q: 'Why is the US a prime market for Singaporean businesses?',
        a: 'Singapore’s fintech, medtech, and logistics players see the US as the largest market for scaling operations globally.',
      },
      {
        q: 'Which services are critical for Singapore SMEs?',
        a: 'Legal incorporation, compliance, and supply chain setup are crucial — services we deliver end-to-end.',
      },
    ],
  },
];
