import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Configuracoes from './templates/Configuracoes'
import Dashboard from './templates/Dashboard'
import Perfil from './templates/Perfil'
import Suporte from './templates/Suporte'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
