import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layouts from "./layouts/Layouts"
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AboutUs from './pages/AboutUs'
import ContactUs from "./pages/ContactUs"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts/>}>
        <Route index path="" element={<Home/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App