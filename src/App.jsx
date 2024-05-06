import React from 'react'
import Navbar from './components/Navbar.jsx'
import {Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home.jsx'
import Recipes from './components/pages/Recipes.jsx'
import Searched from './components/pages/Searched.jsx'
import Details from './components/pages/Details.jsx'
import Restaurants from './components/pages/Restaurants.jsx'

function App() {

  return (
   <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/searched/:search" element={<Searched />}/>
      <Route path = "/details/:name" element={<Details />} />
      <Route path = "/restaurants" element = {<Restaurants />} />
    </Routes>
   </>
  )
}

export default App
