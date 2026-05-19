import { INITIAL_MODELS } from './constants'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { ModelGrid } from './components/ModelGrid'
import { About, Materials, Contact, Footer, Sep } from './components/sections'

export default function App() {
  function scrollToModele() {
    document.getElementById('modele')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Nav />
      <Hero onScrollToModele={scrollToModele} />
      <Sep />
      <ModelGrid models={INITIAL_MODELS} />
      <Sep />
      <About />
      <Sep />
      <Materials />
      <Sep />
      <Contact />
      <Footer />
    </>
  )
}
