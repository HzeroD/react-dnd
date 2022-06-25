import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from '../../services/api-calls'

const MonsterDetails = () => {
    const [details, setDetails] = useState({})
    const location = useLocation();

    useEffect(() => {
        getDetails(location.state.monster.url)
        .then(details => setDetails(details))
    },[])
  
    return (
    <>
    <div>MonsterDetails</div>
    <div>
        
            <h6>Name: </h6><p>{details.name}</p>
            <h6>Type: </h6><p>{details.type}</p>
            <h6>Alignment: </h6><p>{details.alignment}</p>
            <h6>Strength: </h6><p>{details.strength}</p>
        
    </div>
    </>
  )
}

export default MonsterDetails