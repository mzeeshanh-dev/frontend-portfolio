// App.jsx
import { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  // 🔥 Preload heavy sections ASAP
  useEffect(() => {
    import("./components/Portfolio");
    import("./components/Contact");
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Suspense fallback={<div className="text-center p-6">Loading...</div>}>
            <Portfolio />
          </Suspense>
        </section>
        <section id="contact">
          <Suspense fallback={<div className="text-center p-6">Loading...</div>}>
            <Contact />
          </Suspense>
        </section>
      </main>
      <Analytics/>
      <SpeedInsights/>
      
    </>
  );
};

export default App;
