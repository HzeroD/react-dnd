import logo from '../../logo.svg';
import './App.css';
import React, { useState } from "react"
import NavBar from '../../components/NavBar/NavBar'


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
    </>
  )
  
}

export default App;
