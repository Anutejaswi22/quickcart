import { create } from "zustand";

export type CartItem = { id: string; name: string; price: number; qty: number };
type CartState = {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useCart = create<CartState>((set) => ({
  items: [],
  add: (item) =>
    set((s) => {
      const idx = s.items.findIndex((i) => i.id === item.id);
      if (idx >= 0) {
        const next = [...s.items];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return { items: next };
      }
      return { items: [...s.items, { ...item, qty: 1 }] };
    }),
  remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
  clear: () => set({ items: [] }),
}));

export const cartTotal = (items: CartItem[]) =>
  items.reduce((sum, i) => sum + i.price * i.qty, 0);