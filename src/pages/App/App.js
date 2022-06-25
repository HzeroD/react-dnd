import logo from '../../logo.svg';
import './App.css';
import React, { useState } from "react"
import NavBar from '../../components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'

import ClassList from '../ClassList/ClassList'
import MonsterList from '../MonsterList/MonsterList'
import ClassDetails from '../ClassDetails/ClassDetails'
import MonsterDetails from '../MonsterDetails/MonsterDetails'
import SpellSearch from "../SpellSearch/SpellSearch"


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
        <Route path='/class' element={<ClassDetails />} />
        <Route path='/monster-list' element={<MonsterList />} />
        <Route path='/monster' element={<MonsterDetails />} />
        <Route path='/spell-search' element={<SpellSearch />} />
      </Routes>
    </>
  )
  
}

export default App;
