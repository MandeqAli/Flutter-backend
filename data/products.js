// data/products.js
// Same topic: wellness supplements + hair/skin care.
// NOTE: Keep ids unique.

const products = [
  {
    id: 1,
    title: "Ela De Pure",
    subtitle: "Hair care • Smooth & Shine",
    imageUrl:
      "https://images.unsplash.com/photo-1747098393451-6b985f62a2c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWxhJTIwRGUlMjBQdXJlJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    description:
      "Premium hair-care set for smoother, softer hair. Helps reduce frizz and supports healthy shine with regular use.",
    priceCents: 1099,
    rating: 4.8,
    etaText: "25-35 min",
  },
  {
    id: 2,
    title: "Omega Three",
    subtitle: "Supplement • Heart & Brain",
    imageUrl:
      "https://images.unsplash.com/photo-1662673142976-97d3d03934eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b21lZ2ElMjAzJTIwc3VwcGxlbWVudHN8ZW58MHx8MHx8fDA%3D",
    description:
      "Omega-3 softgels to support heart, brain, and joint wellness. Great for daily nutritional balance.",
    priceCents: 1299,
    rating: 4.6,
    etaText: "20-30 min",
  },
  {
    id: 3,
    title: "Magnesium 7",
    subtitle: "Supplement • Sleep & Relax",
    imageUrl:
      "https://images.unsplash.com/photo-1649333243484-df91ff7b73ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFnbmVzaXVtfGVufDB8fDB8fHww",
    description:
      "Magnesium blend designed to support relaxation, sleep quality, and muscle recovery—ideal for busy days.",
    priceCents: 999,
    rating: 4.5,
    etaText: "15-25 min",
  },
  {
    id: 4,
    title: "Zinc Guard",
    subtitle: "Supplement • Immunity & Skin",
    imageUrl:
      "https://images.unsplash.com/photo-1596177583101-26b7dada4f5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8emluYyUyMHN1cHBsZW1lbnRzfGVufDB8fDB8fHww",
    description:
      "Daily zinc tablets to support immune defense and healthy skin. A simple add-on for overall wellness.",
    priceCents: 999,
    rating: 4.7,
    etaText: "25-40 min",
  },
  {
    id: 5,
    title: "Daily Vitamins",
    subtitle: "Multivitamin • Energy Support",
    imageUrl:
      "https://images.unsplash.com/photo-1662695088125-e4a7a1fa0325?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGl0bGUlM0ElMjAlMjJEYWlseSUyMFZpdGFtaW5zJTIyJTJDfGVufDB8fDB8fHww",
    description:
      "Everyday multivitamin to support energy, immunity, and nutrition. Helps fill common diet gaps.",
    priceCents: 1299,
    rating: 4.4,
    etaText: "20-35 min",
  },
  {
    id: 6,
    title: "Sunday Sunday",
    subtitle: "Hair care • Weekly Routine",
    imageUrl:
      "https://images.unsplash.com/photo-1624939461078-66a124b3539c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpciUyMGNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Weekly hair routine essentials for nourishment and shine. Helps soften dry hair and improve texture.",
    priceCents: 899,
    rating: 4.3,
    etaText: "15-30 min",
  },

  // ✅ More products (same topic)
  {
    id: 7,
    title: "Biotin Boost",
    subtitle: "Supplement • Hair & Nails",
    imageUrl:
      "https://images.unsplash.com/photo-1729701462018-d4232bf11f1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlvdGlufGVufDB8fDB8fHww",
    description:
      "Biotin capsules to support stronger hair and nails. A popular daily supplement for beauty support.",
    priceCents: 1199,
    rating: 4.6,
    etaText: "20-35 min",
  },
  {
    id: 8,
    title: "Collagen Glow",
    subtitle: "Supplement • Skin Elasticity",
    imageUrl:
      "https://images.unsplash.com/photo-1746676260732-21a6f819806c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29sbGFnZW4lMjBwcm9kdWN0fGVufDB8fDB8fHww",
    description:
      "Collagen powder to support skin elasticity and a healthy glow. Mixes easily into water or smoothies.",
    priceCents: 1499,
    rating: 4.7,
    etaText: "20-35 min",
  },
  {
    id: 9,
    title: "Vitamin C Plus",
    subtitle: "Supplement • Antioxidant",
    imageUrl:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=900&auto=format&fit=crop&q=60",
    description:
      "Vitamin C tablets to support immunity and antioxidant protection—great for daily wellness routines.",
    priceCents: 899,
    rating: 4.5,
    etaText: "15-30 min",
  },
  {
    id: 10,
    title: "Hydration Electrolytes",
    subtitle: "Wellness • Recovery Support",
    imageUrl:
      "https://images.unsplash.com/photo-1628078290363-f9b47f939e62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb2x5dGUlMjBwb3dkZXIlMjBoeWRyYXRpb24lMjBlbGVjdHJvbHl0ZXN8ZW58MHx8MHx8fDA%3D",
    description:
      "Electrolyte mix to support hydration and recovery. Helpful after workouts or long days in the heat.",
    priceCents: 799,
    rating: 4.4,
    etaText: "15-25 min",
  },
  {
    id: 11,
    title: "Keratin Repair Shampoo",
    subtitle: "Hair care • Damage Repair",
    imageUrl:
      "https://images.unsplash.com/photo-1636708115132-0ae1b7829975?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8S2VyYXRpbiUyMFJlcGFpciUyMFNoYW1wb298ZW58MHx8MHx8fDA%3D",
    description:
      "Keratin-infused shampoo designed to support damage repair and smoother strands with consistent use.",
    priceCents: 1099,
    rating: 4.5,
    etaText: "25-40 min",
  },
  {
    id: 12,
    title: "Argan Hair Oil",
    subtitle: "Hair care • Moisture & Shine",
    imageUrl:
      "https://images.unsplash.com/photo-1667242003572-96caaf8ac5c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXJnYW4lMjBIYWlyJTIwT2lsfGVufDB8fDB8fHww",
    description:
      "Lightweight argan oil to lock in moisture, reduce frizz, and boost shine without heavy buildup.",
    priceCents: 999,
    rating: 4.6,
    etaText: "20-35 min",
  },
  {
    id: 13,
    title: "Aloe Soothing Gel",
    subtitle: "Skin care • Calm & Hydrate",
    imageUrl:
      "https://images.unsplash.com/photo-1630077318421-5ceace7f0676?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWxvZSUyMFNvb3RoaW5nJTIwR2VsfGVufDB8fDB8fHww",
    description:
      "Soothing aloe gel for calming and hydrating skin. Great after sun exposure or dryness.",
    priceCents: 699,
    rating: 4.4,
    etaText: "15-30 min",
  },
  {
    id: 14,
    title: "Probiotic Balance",
    subtitle: "Supplement • Gut Health",
    imageUrl:
      "https://images.unsplash.com/photo-1630962797355-2a4607601aba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJvYmlvdGljJTIwQmFsYW5jZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    description:
      "Probiotic capsules to support digestive balance and everyday gut health—ideal for routine wellness.",
    priceCents: 1399,
    rating: 4.5,
    etaText: "20-35 min",
  },
  {
    id: 15,
    title: "Iron Support",
    subtitle: "Supplement • Daily Strength",
    imageUrl:
      "https://media.istockphoto.com/id/528572312/photo/3d-iron-pill-on-spoon-over-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=5CbPnDvA2y3Lf04D6IIF0ReG_UzGw9sbMFg6ul6v9H0=",
    description:
      "Iron supplement to support daily strength and energy. Best taken as part of a balanced routine.",
    priceCents: 899,
    rating: 4.3,
    etaText: "20-35 min",
  },
  {
    id: 16,
    title: "Flex Seed Aloe",
    subtitle: "Hair care • Scalp Care",
    imageUrl:
      "https://images.unsplash.com/photo-1734892497171-2685f9994742?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhhaXIlMjBjYXJlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Scalp tonic to support a healthy scalp environment and stronger-looking hair with regular use.",
    priceCents: 1299,
    rating: 4.6,
    etaText: "25-40 min",
  },
];

module.exports = { products };
