import About from './components/About.jsx'
import BackToTop from './components/BackToTop.jsx'
import Contact from './components/Contact.jsx'
import Experience from './components/Experience.jsx'
import Expertise from './components/Expertise.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Preloader from './components/Preloader.jsx'
import Projects from './components/Projects.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import SectionDivider from './components/SectionDivider.jsx'
import Skills from './components/Skills.jsx'
import useScrollProgress from './hooks/useScrollProgress.js'

export default function App() {
  const { progress, y } = useScrollProgress()
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Preloader />
      <ScrollProgress progress={progress} />
      <Navbar scrolled={y > 40} />
      <main id="main">
        <Hero />
        <SectionDivider variant="wave" from="ink" to="paper" />
        <About />
        <SectionDivider variant="tilt" from="paper" to="ink-2" />
        <Skills />
        <SectionDivider variant="wave" from="ink-2" to="white" />
        <Experience />
        <SectionDivider variant="curve" from="white" to="paper" />
        <Expertise />
        <SectionDivider variant="wave" from="paper" to="ink" />
        <Projects />
        <SectionDivider variant="tilt" from="ink" to="ink-3" flip />
        <Contact />
      </main>
      <Footer />
      <BackToTop progress={progress} y={y} />
    </>
  )
}
