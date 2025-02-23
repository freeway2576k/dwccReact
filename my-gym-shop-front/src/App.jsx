import { NavBar } from './components/NavBar'
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import { Footer } from './components/Footer'
import AppRoutes from './router/routes'

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <AppRoutes />
        <Footer />
      </Router>

    </div>
  )
}

export default App
