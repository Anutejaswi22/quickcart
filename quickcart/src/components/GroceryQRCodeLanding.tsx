import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const FEATURED = [
  { name: "Bananas (1kg)", price: 1.99, tag: "Best Seller" },
  { name: "Whole Milk (1L)", price: 2.49, tag: "Fresh" },
  { name: "Brown Bread", price: 2.29, tag: "New" },
];

export default function GroceryQRCodeLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-7xl px-4 h-14 flex items-center gap-3">
          <Button variant="ghost" size="icon" className="sm:hidden" aria-label="Open menu" type="button">
            <Menu className="h-5 w-5" />
          </Button>

          <Link href="/" className="flex items-center gap-2 font-semibold" aria-label="Go to home">
            <Image src="/logo.png" alt="Bismillah" width={32} height={32} className="h-8 w-8" />
            <span className="sr-only">Bismillah</span>
          </Link>

          <div className="ml-auto flex items-center gap-3">
            <Button variant="ghost" size="icon" aria-label="Cart" type="button">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-6">
        <h1 className="text-2xl font-bold">Shop fast by category</h1>
        <p className="text-sm text-slate-600">
          Browse top categories, or search what you need. Designed for quick checkout after scanning a QR.
        </p>

        <div className="mt-4 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input className="pl-9 h-11 rounded-xl" placeholder="Search products..." />
          </div>
          <Button className="h-11 rounded-xl" type="button">Go</Button>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <h2 className="text-lg font-semibold mb-3">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <Link href="/c/fruits-veg" className="rounded-xl border p-4 hover:shadow-sm text-center">
            Fruits &amp; Veggies
          </Link>
          <Link href="/c/dairy-eggs" className="rounded-xl border p-4 hover:shadow-sm text-center">
            Dairy &amp; Eggs
          </Link>
          <Link href="/c/snacks" className="rounded-xl border p-4 hover:shadow-sm text-center">
            Snacks
          </Link>
        </div>
      </section>

      {/* Featured Picks */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <h2 className="text-lg font-semibold mb-3">Quick Picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {FEATURED.map((p) => (
            <Card key={p.name} className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex justify-between">
                  <span>{p.name}</span>
                  <Badge variant="secondary">{p.tag}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <span className="font-bold">${p.price.toFixed(2)}</span>
                <Button size="sm" className="rounded-xl" type="button">Add</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/60">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-slate-500 flex justify-between">
          <div>© {new Date().getFullYear()} Bismillah</div>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}