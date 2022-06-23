import React from 'react'


const NavBar = (props) => {
    return (
        <header className="App-header">
            <img 
            src="/images/Monk.svg" 
            alt="dnd"
            className="App-logo" 
            style={{width: "100px", height: "100px"}}
             />
             {props.navItems.map((navItem, idx) =>
               <a key={idx} className="nav-links" href={navItem.url}>{navItem.name}</a>)}
        </header>


    );
};

export default NavBar;