import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TopoDivider from "@/components/TopoDivider";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <TopoDivider />
        <About />
        <TopoDivider />
        <Projects />
        <TopoDivider />
        <Experience />
        <TopoDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
