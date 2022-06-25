import React, { useState, useEffect } from 'react'
import { getClassList } from '../../services/api-calls'
import { Link } from 'react-router-dom'

const ClassList = (props) => {
    const [results, setResults] = useState([])

    useEffect(() => {
        getClassList()
        .then(classData => setResults(classData.results))
    }, [])


    
    return (
        <>
            {results.length ?
        <>
            {console.log("CLASS LIST")}
            <div className="icon-container">
                <h3>I'm the Class List !!!</h3>
                {results.map(classTitle => 
                    <Link to="/class" state={{ classTitle }} key={classTitle.index}>
                         <div id="classDiv" >
                        <img style={{ width: "100px", height: "100px" }}
								src={`/images/${classTitle.name}.svg`} 
								alt="class-logo" />
                        {classTitle.name}
                    </div>
                    </Link>
                   
                )}
            </div>
        </>
        :
        <h2>Loading...</h2>}
        </>
        
    );
}

export default ClassList