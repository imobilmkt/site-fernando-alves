import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyMiami from "@/components/WhyMiami";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyMiami />
        <Services />
        <Gallery />
        <Process />
        <About />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
