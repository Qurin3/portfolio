import "./app.scss"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Parallax from "./components/parallax/Parallax"
const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services"><Parallax type="services" /></section>
      <section>Project1</section>
      <section id="Portfolio"><Parallax type="portfolio" /></section>
      <section id="Contact">Contact me</section>
      <section id="About">About</section>
    </div>
  )
}

export default App
