import Navbar from "@/components/site/Navbar";
import HomeHero from "@/components/HomeHero";
import TrendingCategories from "@/components/TrendingCategories";
// (Optional) import your existing quick picks if you want them below
// import GroceryQRCodeLanding from "@/components/GroceryQRCodeLanding";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <HomeHero />
        <TrendingCategories />
        {/* <GroceryQRCodeLanding />  // keep this if you want “Quick Picks” below */}
      </main>
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-slate-600 flex justify-between">
          <span>© {new Date().getFullYear()} Bismillah</span>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}