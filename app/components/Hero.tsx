import dynamic from 'next/dynamic';
import Button from './Button';
const VideoPlayer = dynamic(() => import('./VideoPlayer'), {
  ssr: false,
  loading: () => (
    <div className="w-full">
      <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 bg-gray-100" />
    </div>
  ),
});

export default function Hero({
  title,
  subtitle,
  ctaText,
  videoSrc,
  poster,
}: {
  title: string;
  subtitle: string;
  ctaText: string;
  videoSrc: string;
  poster?: string;
}) {
  return (
    <section className="relative container mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-center motion-safe:animate-fade-up">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        style={{
          background:
            'radial-gradient(60% 60% at 90% 10%, rgba(99,102,241,0.12), transparent 60%), radial-gradient(80% 70% at 0% 100%, rgba(34,197,94,0.08), transparent 60%)',
        }}
      />
      <div className="p-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        <div className="mt-6">
          <Button href="https://calendly.com/l4rgusllc/scheduling" size="lg">
            {ctaText}
          </Button>
        </div>
      </div>
      <VideoPlayer src={videoSrc} poster={poster} />
    </section>
  );
}
