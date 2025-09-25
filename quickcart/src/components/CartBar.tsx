"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart, cartTotal } from "@/store/cart";

export default function CartBar() {
  const items = useCart((s) => s.items);
  if (items.length === 0) return null;

  const total = cartTotal(items);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="mx-auto max-w-7xl px-4 pb-safe">
        <div className="mb-3 rounded-2xl border bg-white shadow-lg">
          <Link
            href="#"
            className="flex items-center justify-between px-4 py-3"
            aria-label="Open cart"
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-white p-0.5 rounded bg-[var(--color-primary)]" />
              <span className="text-sm">
                <strong>{items.reduce((n, i) => n + i.qty, 0)} items</strong> in cart
              </span>
            </div>
            <span className="font-semibold">${total.toFixed(2)} · Checkout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}