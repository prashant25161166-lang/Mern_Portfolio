import { lazy, Suspense } from "react";

import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";

// Lazy load GitHub section
const Github = lazy(
  () => import("../components/Github/Github")
);

const GithubLoader = () => {
  return (
    <section
      id="github"
      className="flex min-h-[350px] items-center justify-center bg-slate-950 px-6"
      aria-label="Loading GitHub section"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-cyan-400" />

        <p className="text-sm text-slate-400">
          Loading GitHub...
        </p>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <main
      id="home"
      className="overflow-hidden bg-slate-950"
    >
      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Experience */}
      <Experience />

      {/* Education */}
      <Education />

      {/* Services */}
      <Services />

      {/* GitHub */}
      <Suspense fallback={<GithubLoader />}>
        <Github />
      </Suspense>

      {/* Contact */}
      <Contact />
    </main>
  );
};

export default Home;