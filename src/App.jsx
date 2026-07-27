import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { profile, navLinks, about, skills, projects } from "./data";
import TechMarquee from "./components/TechMarquee";

function App() {
  return (
    <>
      <Navbar name={profile.name} links={navLinks} />
      <Hero
        name={profile.name}
        role={profile.role}
        intro={profile.intro}
        location={profile.location}
      />
      <About paragraphs={about.paragraphs} />
      <Skills skills={skills} />
      <section className="marquee-section">
  <TechMarquee items={skills.flatMap((s) => s.items)} />
</section>
      <Projects projects={projects} />
      <Contact
  email={profile.email}
  github={profile.github}
  linkedin={profile.linkedin}
  telegram={profile.telegram}
  twitter={profile.twitter}
  leetcode={profile.leetcode}
/>
      <Footer name={profile.name} />
    </>
  );
}

export default App;