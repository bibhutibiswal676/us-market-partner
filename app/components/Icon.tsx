export default function Icon({
  name,
  className = 'h-6 w-6',
}: {
  name: string;
  className?: string;
}) {
  // simple emoji fallback for MVP
  const map: Record<string, string> = {
    shield: '🛡️',
    factory: '🏭',
    megaphone: '📣',
    gear: '⚙️',
    bank: '🏦',
    calculator: '🧮',
    gavel: '⚖️',
    people: '👥',
    laptop: '💻',
    cart: '🛒',
    pill: '💊',
    car: '🚗',
    chip: '🧠',
    cloud: '☁️',
    truck: '🚚',
    book: '📘',
    info: 'ℹ️',
    phone: '📞',
    globe: '🌍',
    rocket: '🚀',
    link: '🔗',
    // Flags
    'flag-india': '🇮🇳',
    'flag-japan': '🇯🇵',
    'flag-canada': '🇨🇦',
    'flag-germany': '🇩🇪',
    'flag-uk': '🇬🇧',
    'flag-eu': '🇪🇺',
    'flag-uae': '🇦🇪',
    'flag-taiwan': '🇹🇼',
    'flag-south-korea': '🇰🇷',
    'flag-mexico': '🇲🇽',
    'flag-brazil': '🇧🇷',
    'flag-israel': '🇮🇱',
    'flag-singapore': '🇸🇬',
  };
  return (
    <span className={className} aria-hidden>
      {map[name] ?? '▫️'}
    </span>
  );
}
