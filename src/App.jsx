import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Achievements } from "@/sections/Achievements";
import { WhyChooseMe } from "@/sections/WhyChooseMe";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Achievements />
        <WhyChooseMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
