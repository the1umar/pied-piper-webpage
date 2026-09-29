import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Meetings } from './components/Meetings'
import { Nav } from './components/Nav'
import { Project } from './components/Project'
import { Schedule } from './components/Schedule'
import { Team } from './components/Team'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Project />
        <Team />
        <Meetings />
        <Schedule />
      </main>
      <Footer />
    </>
  )
}

export default App
