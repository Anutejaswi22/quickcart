export type Category = {
    slug: string;
    name: string;
    subs: { slug: string; name: string }[];
  };
  
  export const CATEGORIES: Category[] = [
    {
      slug: "fruits-veg",
      name: "Fruits & Veggies",
      subs: [
        { slug: "leafy-greens", name: "Leafy Greens" },
        { slug: "roots", name: "Roots" },
        { slug: "herbs", name: "Herbs" },
        { slug: "seasonal", name: "Seasonal" },
      ],
    },
    {
      slug: "dairy-eggs",
      name: "Dairy & Eggs",
      subs: [
        { slug: "milk", name: "Milk" },
        { slug: "cheese", name: "Cheese" },
        { slug: "yogurt", name: "Yogurt" },
        { slug: "eggs", name: "Eggs" },
      ],
    },
    {
      slug: "snacks",
      name: "Snacks",
      subs: [
        { slug: "chips", name: "Chips" },
        { slug: "cookies", name: "Cookies" },
        { slug: "nuts", name: "Nuts" },
        { slug: "bars", name: "Energy Bars" },
      ],
    },
  ];