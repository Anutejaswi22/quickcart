import Image from "next/image";
import Link from "next/link";

const CAT_CARDS = [
  { name: "Chocolates",        slug: "chocolates",       img: "/cats/chocolates.jpg" },
  { name: "Perfumes",          slug: "perfumes",         img: "/cats/perfumes.jpg" },
  { name: "The Dipper Incense",slug: "dipper-incense",   img: "/cats/dipper.jpg" },
  { name: "Air Fresheners",    slug: "air-fresheners",   img: "/cats/fresheners.jpg" },
];

export default function TrendingCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <h2 className="mt-10 mb-4 text-center text-3xl font-extrabold tracking-tight">
        Trending Categories
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CAT_CARDS.map((c) => (
          <Link
            key={c.slug}
            href={`/c/${c.slug}`}
            className="group rounded-2xl border-2 border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={c.img}
                alt={c.name}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="bg-black text-white text-center py-3 text-base font-semibold">
              {c.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}