// src/app/c/[category]/page.tsx
import Link from "next/link";
import { CATEGORIES } from "../../../data/categories";

// Define the props type explicitly for Next.js App Router
interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const cat = CATEGORIES.find((c) => c.slug === params.category);

  if (!cat) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-2">Category not found</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{cat.name}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {cat.subs?.map((s) => (
          <Link
            key={s.slug}
            href={`/c/${cat.slug}/${s.slug}`}
            className="rounded-xl border p-4 hover:shadow-sm text-center bg-white"
          >
            {s.name}
          </Link>
        ))}
      </div>
    </div>
  );
}