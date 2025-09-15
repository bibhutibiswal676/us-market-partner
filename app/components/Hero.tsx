import VideoPlayer from './VideoPlayer';
import Button from './Button';

export default function Hero({
  title,
  subtitle,
  ctaText,
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
      <div className='p-4'>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        <div className="mt-6">
          <Button href="#contact" size="lg">
            {ctaText}
          </Button>
        </div>
      </div>
      <VideoPlayer src="https://d3euc6irt3la1j.cloudfront.net/us-market-partner.mp4" poster={poster} />
    </section>
  );
}
