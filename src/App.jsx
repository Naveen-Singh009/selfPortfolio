import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import SocialLinks from "./components/SocialLinks"
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'





function App() {

  return (
    <>
     
     <Router>
     <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/socialLinks" element={<SocialLinks/>}/>
      </Routes>
     </Router>

    </>
  )
}

export default App