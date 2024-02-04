import "./app.scss"
import Contact from "./components/contact/Contact"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Portfolio from "./components/portfolio/Portfolio"
import About from "./components/About/About"
const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  )
}

export default App
