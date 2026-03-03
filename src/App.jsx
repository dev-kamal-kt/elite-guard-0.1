import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layouts from "./layouts/Layouts"
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts/>}>
        <Route index path="" element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App