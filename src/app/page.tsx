import HeroBio from "@/components/HeroBio";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="sections">
        <HeroBio />
        <Quote />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
