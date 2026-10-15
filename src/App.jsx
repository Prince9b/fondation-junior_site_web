import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Programme from './pages/Programme'
import Apropos from './pages/Apropos'
import Impact from './pages/Impact'
import Partenaire from './pages/Partenaire'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/apropos' element={<Apropos/>} />
        <Route path='/programmes' element={<Programme/>} />
        <Route path='/impact' element={<Impact/>} />
        <Route path='/partenaires' element={<Partenaire/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}
