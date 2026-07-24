import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Works from "@/components/Works";
import Flow from "@/components/Flow";
import FadeIn from "@/components/FadeIn";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <FadeIn>
        <Hero />
      </FadeIn>
      
      <FadeIn>
        <About />
      </FadeIn>

      <FadeIn>
        <Service />
      </FadeIn>

      <FadeIn>
        <Works />
      </FadeIn>

      <FadeIn>
        <Flow />
      </FadeIn>

      <FadeIn>
        <FAQ />
      </FadeIn>

      <FadeIn>
        <Contact />
      </FadeIn>

      <FadeIn>
        <Footer />
      </FadeIn>



    </>
  );
}
