import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getMonsterList } from '../../services/api-calls'


 const MonsterList = () => {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    getMonsterList()
    .then(monsterData => setMonsters(monsterData.results))
  },[monsters])
  
    return (
        <>
            <div className="icon-container">
                <h3>I'm a Monster List !!!</h3>
                {monsters.map((monster, idx) => 
                <Link to='/monster' state={{ monster }} key={monster.index} >
                <div className="classDiv">
                     <img style= {{width:"100px",height:"100px"}} 
                     />
                     <p> {monster.name} </p>
                </div>
                </Link>
                
                )}
            </div>
        </>
  )
}

export default MonsterList;
