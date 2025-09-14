interface Props {
  params: { service: string };
}

export default function ServicePage({ params }: Props) {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Service: {params.service}</h1>
      <p className="mt-4">Service details coming soon.</p>
    </main>
  );
}
