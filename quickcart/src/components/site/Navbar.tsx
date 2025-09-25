"use client";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Heart, UserRound, Search } from "lucide-react";
import { useState } from "react";

const NAV = [
  { name: "Air Fresheners", href: "/c/air-fresheners" },
  { name: "Dipper Incense", href: "/c/dipper-incense" },
  { name: "Perfumes", href: "/c/perfumes" },
  { name: "Chocolates", href: "/c/chocolates" },
  { name: "Variety Incense", href: "/c/variety-incense" },
  { name: "Snacks", href: "/c/snacks" },
  { name: "Roll on’s", href: "/c/roll-ons" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-16 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            {/* use your logo if available */}
            <Image src="/logo.png" alt="Bismillah" width={36} height={36} className="rounded" />
            <span className="font-bold text-lg">Bismillah</span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden md:flex flex-1 items-center gap-5 justify-center">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="text-sm hover:text-blue-700">
                {n.name}
              </Link>
            ))}
          </nav>

          {/* right icons */}
          <div className="ml-auto hidden md:flex items-center gap-4">
            <Link href="/search" className="flex items-center gap-1 text-sm">
              <Search className="h-4 w-4" /> Search
            </Link>
            <Link href="/wishlist" className="flex items-center gap-1 text-sm">
              <Heart className="h-4 w-4" /> Wishlist
            </Link>
            <Link href="/account" className="flex items-center gap-1 text-sm">
              <UserRound className="h-4 w-4" /> Login
            </Link>
            <Link href="/cart" className="flex items-center gap-1 text-sm">
              <ShoppingCart className="h-4 w-4" /> Cart
            </Link>
          </div>

          {/* mobile: burger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden ml-auto rounded-lg border px-3 py-2 text-sm"
          >
            Menu
          </button>
        </div>

        {/* mobile dropdown */}
        {open && (
          <div className="md:hidden pb-3">
            <div className="flex items-center gap-2 rounded-xl border px-3 py-2">
              <Search className="h-4 w-4 text-slate-500" />
              <input
                className="w-full outline-none text-sm"
                placeholder="Search products…"
              />
            </div>
            <div className="mt-2 flex flex-col">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="px-2 py-2 text-sm border-b last:border-0">
                  {n.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}