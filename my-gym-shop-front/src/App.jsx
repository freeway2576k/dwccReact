import './App.css'
import { Inicio } from './components/Inicio'
import { NavBar } from './components/NavBar'
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import { Footer } from './components/Footer'

function App() {

  return (
    <body>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/' element={<Inicio />} />
          <Route path='/' element={<Inicio />} />
        </Routes>
        <Footer />
      </Router>

    </body>
  )
}

export default App
