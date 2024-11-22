import { useState } from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import DataScience from './Components/DataScience'
import Teams from './Components/Teams'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
     <Hero  />
     <DataScience />  
    <About  />
    <Teams />
    <Contact />
<Footer />
</>
  )
}

export default App
