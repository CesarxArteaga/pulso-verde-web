"use client";
import Contact from "@/src/components/sections/contact/Contact";
import CreamosContigo from "@/src/components/sections/creamos_contigo/CreamosContigo";
import Footer from "@/src/components/sections/footer/Footer";
import Hero from "@/src/components/sections/hero/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <CreamosContigo />
      <Contact />
      <Footer />
    </div>
  );
}
