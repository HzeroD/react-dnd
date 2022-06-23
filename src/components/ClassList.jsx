import React, { useState } from 'react'

const ClassList = (props) => {
    const [results, setResults] = useState(['Paladin', 'Rogue', 'Wizard'])
    return (
        <>
            <div>
                <h3>I'm the Class List !!!</h3>
            </div>
        
        </>
    );
}

export default ClassList