import React, { useState, useEffect } from 'react'
import { getClassList } from '../../services/api-calls'

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
                    <div id="classDiv" key={classTitle.idx}>
                        <img style={{ width: "100px", height: "100px" }}
								src={`/images/${classTitle.name}.svg`} 
								alt="class-logo" />
                        {classTitle.name}
                    </div>
                )}
            </div>
        </>
        :
        <h2>Loading...</h2>}
        </>
        
    );
}

export default ClassList