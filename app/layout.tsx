import type { Metadata } from "next";
import React from "react";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "US Market Partner | Expand Your Business to the USA with Local Support",
  description:
    "We help global companies expand into the U.S. with trusted local partnership, LLC & C-Corp setup, compliance, and sales growth strategies. Partner with a U.S. citizen to succeed in the American market.",
  metadataBase: new URL("https://www.usmarketpartner.com"),
  openGraph: {
    type: "website",
    siteName: "US Market Partner",
    url: "https://www.usmarketpartner.com",
    title: "Expand Your Business to the USA – Expert Guidance & Compliance",
    description:
      "Partner with a U.S. citizen to enter the American market. We provide company formation, compliance, distribution, and sales growth support for global businesses expanding to the USA.",
    images: [
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/business-expansion.webp",
        alt: "From Registration to Revenue – Complete US Business Setup",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Gateway to the US Market – Setup, Scale & Succeed",
    description:
      "We help international companies establish and grow in the U.S. market through local partnership, legal setup, and sales expansion.",
    creator: "@L4RGINDIA",
    images: [
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/business-expansion.webp",
        alt: "Global Expansion Starts Here – Enter the US Market Today",
      },
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.usmarketpartner.com/" },
  authors: [{ name: "L4RG US LLC" }],
  icons: {
    icon: [
       {
        url: "/favicon.ico",     
        sizes: "16x16 32x32 48x48",
        type: "image/x-icon",
      },
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/US-market-partner/favicon-16x16.webp",
        sizes: "16x16",
        type: "image/webp",
      },
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/US-market-partner/favicon-32x32.webp",
        sizes: "32x32",
        type: "image/webp",
      },
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/US-market-partner/favicon-96x96.webp",
        sizes: "96x96",
        type: "image/webp",
      },
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/US-market-partner/android-icon-192x192.webp",
        sizes: "192x192",
        type: "image/webp",
      },
    ],
    apple: [
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/US-market-partner/apple-icon-180x180.webp",
        sizes: "180x180",
      },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/*  Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Product",
              name: "Take Your Brand Global – Start Selling in the USA",
              image: [
                "https://d3euc6irt3la1j.cloudfront.net/business-expansion.webp",
              ],
              description:
                "US Market Partner helps international companies successfully enter and grow in the United States by providing expert local support, market insights, and tailored strategies.",
              url: "https://www.usmarketpartner.com/",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "997575",
              },
              audience: {
                "@type": "Audience",
                name: "International Businesses Expanding to the USA",
              },
            }),
          }}
        />

        {/* Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.usmarketpartner.com/",
              name: "US Market Partner | Expand Your Business to the USA with Local Support",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.usmarketpartner.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Review */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              author: { "@type": "Person", name: "John Doe" },
              name: "Outstanding Support for Expanding into the US Market",
              url: "https://www.usmarketpartner.com/",
              image:
                "https://d3euc6irt3la1j.cloudfront.net/business-expansion.webp",
              reviewBody:
                "US Market Partner made our expansion into the United States smooth and stress-free. Their local expertise, market insights, and hands-on guidance helped us quickly establish a strong presence.",
              reviewRating: { "@type": "Rating", ratingValue: "4.9" },
              itemReviewed: {
                "@type": "LocalBusiness",
                name: "L4RG US LLC",
                priceRange: "12000",
                image:
                  "https://d3euc6irt3la1j.cloudfront.net/business-expansion.webp",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                  postalCode: "27703",
                  addressCountry: { "@type": "Country", name: "US" },
                },
              },
            }),
          }}
        />

        {/* ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "US Market Partner – Expand Your Business to the USA with Local Support",
              image:
                "https://d3euc6irt3la1j.cloudfront.net/business-expansion.webp",
              url: "https://www.usmarketpartner.com/",
              telephone: "+1 (336) 792-5111",
              address: {
                "@type": "PostalAddress",
                streetAddress: "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703",
                postalCode: "27703",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 35.96039,
                longitude: -78.8272,
              },
              priceRange: "$$",
              sameAs: [
                "https://www.facebook.com/L4RGINDIA/",
                "https://twitter.com/L4rgindia",
                "https://www.instagram.com/l4rgllc/",
                "https://www.youtube.com/c/L4RGINDIA",
                "https://in.linkedin.com/company/l4rgindia",
              ],
            }),
          }}
        />

        {/*  EmployerAggregateRating */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "EmployerAggregateRating",
              itemReviewed: {
                "@type": "Organization",
                name: "US Market Partner",
                sameAs: "https://www.usmarketpartner.com/",
              },
              ratingValue: "4.9",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "6895410",
            }),
          }}
        />

        {/* WebPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: "https://www.usmarketpartner.com/",
              name: "US Market Partner | Expand Your Business to the USA with Local Support",
              description:
                "US Market Partner helps international businesses expand successfully into the United States by providing expert local support, tailored strategies, and market insights.",
              publisher: {
                "@type": "Organization",
                name: "US Market Partner",
                logo: {
                  "@type": "ImageObject",
                  url: "https://d3euc6irt3la1j.cloudfront.net/US-market-partner-logo.webp",
                },
              },
              inLanguage: "en",
            }),
          }}
        />

        {/* FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What services does US Market Partner provide for business expansion?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "US Market Partner offers local market research, regulatory guidance, business development support, customer acquisition strategies, and on-the-ground representation to help companies successfully expand into the United States.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who can benefit from US Market Partner’s services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "International businesses, startups, and entrepreneurs looking to establish or grow their presence in the US market can benefit from US Market Partner’s tailored support and local expertise.",
                  },
                },
              ],
            }),
          }}
        />

        {/* QAPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "QAPage",
              mainEntity: {
                "@type": "Question",
                name: "What industries does US Market Partner support?",
                text: "US Market Partner works with businesses from various industries seeking to enter or grow in the U.S. market.",
                answerCount: 1,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "US Market Partner supports companies across technology, healthcare, manufacturing, retail, and other sectors, offering tailored strategies for successful U.S. market entry and growth.",
                },
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
