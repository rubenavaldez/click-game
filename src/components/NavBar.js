import React from "react";



const NavBar = props => (
    
        <header>
        <nav>
        <div className="nav-wrapper black white-text" style={{"fontSize":"20pt"}}>
          <span className="brand-logo">Memory</span>
          <ul id="nav-mobile" className="right">
            {/* <li><span>Play Game </span></li> */}
            {/* <br></br> */}
            <li><span>Status: {props.status}</span></li>
            <br></br>
            <li><span>Score: {props.currentScore}</span></li>
            <br></br>
            <li><span>High Score: {props.topScore}</span></li>
            <br></br>
          </ul>
        </div>
      </nav>
      </header>
)

export default NavBar;