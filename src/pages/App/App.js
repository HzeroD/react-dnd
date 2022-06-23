import logo from '../../logo.svg';
import './App.css';
import React, { useState } from "react"


function App() {
  const [navItems, setNavItems] = useState([
    {url: "/class-list", name: "Class List"},
    {url: "/monster-list", name: "Monster List"},
    {url: "/spell-search", name: "Search For Spells"}
  ])
  return (
    <>
      <h1>This is our App!</h1>
    </>
  )
  
}

export default App;
