import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/animation/ScrollProgress'
import CustomCursor from './components/animation/CustomCursor'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Campus from './components/sections/Campus'
import Sports from './components/sections/Sports'
import Rankings from './components/sections/Rankings'
import Personalities from './components/sections/Personalities'
import Testimonials from './components/sections/Testimonials'
import Enquiry from './components/sections/Enquiry'
import useTheme from './hooks/useTheme'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Campus />
        <Sports />
        <Rankings />
        <Personalities />
        <Testimonials />
        <Enquiry />
      </main>
      <Footer />
    </>
  )
}
