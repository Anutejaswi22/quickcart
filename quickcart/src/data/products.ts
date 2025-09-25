export type Product = {
    id: string;
    name: string;
    price: number;
    category: string;
    subcategory: string;
    img?: string;
  };
  
  export const PRODUCTS: Product[] = [
    { id: "p1", name: "Bananas (1kg)",  price: 1.99, category: "fruits-veg", subcategory: "seasonal", img: "/images/bananas.png" },
    { id: "p2", name: "Whole Milk (1L)",price: 2.49, category: "dairy-eggs", subcategory: "milk",     img: "/images/milk.png" },
    { id: "p3", name: "Brown Bread",    price: 2.29, category: "snacks",     subcategory: "bars",     img: "/images/bread.png" },
    { id: "p4", name: "Potato Chips (L)",price: 3.49, category: "snacks",    subcategory: "chips",    img: "/images/chips.png" },
    { id: "p5", name: "Cheddar Cheese", price: 4.79, category: "dairy-eggs", subcategory: "cheese",   img: "/images/cheese.png" },
  ];