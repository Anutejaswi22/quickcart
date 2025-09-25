"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="relative h-[42vw] max-h-[520px] min-h-[220px] overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-sm">
          <Image
            src="/banners/incense-1.jpg"
            alt="USA's Largest Incense Supplier"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white max-w-md">
            <h1 className="text-4xl font-extrabold leading-tight drop-shadow">
              USA’s Largest <br /> Incense Supplier
            </h1>
            <p className="mt-2 text-white/90">
              Premium incense, perfumes, snacks and more—delivered fast.
            </p>
            <Link
              href="/c/dipper-incense"
              className="mt-4 inline-block rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-2.5 text-white font-semibold"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}