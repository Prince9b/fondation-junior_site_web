import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Programme from './pages/Programme'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/programmes' element={<Programme/>} />
      </Routes>
    </div>
  )
}
