import "./app.scss"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section>Parallax</section>
      <section id="Portfolio">Portfolio</section>
      <section>Project1</section>
      <section id="Contact">Contact me</section>
      <section id="About">About</section>
    </div>
  )
}

export default App
