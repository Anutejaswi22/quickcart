"use client";
import Image from "next/image";
import { useCart } from "@/store/cart";
import { PRODUCTS } from "@/data/products";

export default function SubcategoryPage({
  params,
}: { params: { category: string; sub: string } }) {
  const add = useCart((s) => s.add);
  const list = PRODUCTS.filter(
    (p) => p.category === params.category && p.subcategory === params.sub
  );

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-xl font-semibold mb-3 capitalize">
        {params.sub.replace(/-/g, " ")}
      </h1>

      {list.length === 0 && <div>No products yet.</div>}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {list.map((p) => (
          <div key={p.id} className="rounded-2xl border-2 border-slate-200 bg-white shadow-sm p-3">
            <div className="flex justify-center mb-2">
              <Image
                src={p.img ?? "/images/placeholder.png"}
                alt={p.name}
                width={128}
                height={128}
                className="h-28 w-28 object-contain"
              />
            </div>
            <div className="font-medium">{p.name}</div>
            <div className="text-sm text-slate-600">${p.price.toFixed(2)}</div>
            <button
              onClick={() => add({ id: p.id, name: p.name, price: p.price })}
              className="mt-2 w-full px-3 py-2 rounded-xl bg-[var(--color-primary)] text-white text-sm hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}