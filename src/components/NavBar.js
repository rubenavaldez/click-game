import React from "react";

const style = {
    bgDark: {
        backgroundColor: `rgb(1,0,1)`
    }
}

const NavBar = props => (
    
        <header>
        <nav>
        <div className="nav-wrapper black white-text">
          <a href="#" className="brand-logo">Memory</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="">Play Game</a></li>
            <li><a href="" className="disabled">Status: {props.status}</a></li>
            <li><a href="" className="disabled">High Score: {props.topScore}</a></li>
          </ul>
        </div>
      </nav>
      </header>
)

export default NavBar;