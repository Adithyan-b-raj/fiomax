import { Hero } from "@/components/Hero";
import { PopularSubscriptions } from "@/components/PopularSubscriptions";
import { Giveaways } from "@/components/Giveaways";
import { WhyJoin } from "@/components/WhyJoin";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <PopularSubscriptions />
      <Giveaways />
      <WhyJoin />
      <FinalCta />
      <Footer />
    </main>
  );
}
