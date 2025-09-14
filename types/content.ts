export interface Country {
  slug: string;
  name: string;
  description: string;
  sectors: { slug: string; name: string }[];
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon?: string;
}

export interface HomeContent {
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    videoSrc: string;
    poster?: string;
  };
  intro: string;
  countries: Country[];
  services: Service[];
  ctaSection: { title: string; buttonText: string };
}
