import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;