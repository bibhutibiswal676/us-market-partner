interface Props {
  params: { country: string; sector: string };
}

export default function SectorPage({ params }: Props) {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">
        {params.country} — {params.sector}
      </h1>
      <p className="mt-4">Sector details coming soon.</p>
    </main>
  );
}
