import Cursor from './components/Cursor'
import Loader from './components/Loader'
import ThemeFAB from './components/ThemeFAB'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import TabPreview from './components/TabPreview'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useMobileMenu } from './hooks/useMobileMenu'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useCounters } from './hooks/useCounters'
import { useMagneticButtons } from './hooks/useMagneticButtons'
import { useNavScroll } from './hooks/useNavScroll'
import { useHeroParallax } from './hooks/useHeroParallax'

export default function App() {
  const { menuOpen, openMenu, closeMenu } = useMobileMenu()

  useScrollReveal()
  useCounters()
  useMagneticButtons()
  useNavScroll()
  useHeroParallax()

  return (
    <>
      <Cursor />
      <Loader />
      <ThemeFAB />
      <Navbar onMenuOpen={openMenu} />
      <MobileMenu open={menuOpen} onClose={closeMenu} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work />
        <Process />
        <Team />
        <Testimonials />
        <CTABanner />
        <TabPreview />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
