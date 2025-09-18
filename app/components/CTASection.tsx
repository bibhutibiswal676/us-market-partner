import Button from './Button';

export default function CTASection({
  title,
  buttonText,
}: {
  title: string;
  buttonText: string;
}) {
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <div className="rounded-xl bg-white/70 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-200 shadow-sm motion-safe:animate-fade-up">
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        <Button href="https://calendly.com/l4rgusllc/scheduling" size="lg">
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
