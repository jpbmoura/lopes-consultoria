import About from "@/components/about";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <>
      <div className="flex-1">
        <Hero />

        <About />

        {/* <Testimonials /> */}

        <Pricing />
      </div>
    </>
  );
}
