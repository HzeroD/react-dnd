import logo from '../../logo.svg';
import './App.css';
import React, { useState } from "react"
import NavBar from '../../components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'

import ClassList from '../../components/ClassList/ClassList'


function App() {
  const [navItems, setNavItems] = useState([
    {url: "/class-list", name: "Class List"},
    {url: "/monster-list", name: "Monster List"},
    {url: "/spell-search", name: "Search For Spells"},
    {url: "/about-game-master", name: "About Game Master"}
  ])
  return (
    <>
      <NavBar navItems={navItems} />
      <Routes>
        <Route path='/class-list' element={<ClassList />} />
      </Routes>
    </>
  )
  
}

export default App;
