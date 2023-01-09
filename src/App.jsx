import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import './style.css'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {data.map(details => {
          return(
            <Card
              key={details.id}
              item={details}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
