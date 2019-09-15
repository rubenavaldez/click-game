import React from "react";

const style = {
    bgDark: {
        backgroundColor: `rgb(1,0,1)`
    }
}

const NavBar = props => (
    <header style={style.bgDark} 
        className= " w-100 ph3 pv3 pv2-ns ph4-m ph5-1 tc">
            <nav className="f6 fw6 ttu tracked">
                <p className="link dim white dib mr3"
                    title="Home">Play Game</p>
                <p className="link dim white dib mr3"
                    title="Status">Status: {props.status}</p>
                <p className="link dim white dib mr3"
                    title="Score">Score: {props.currentScore}</p>
                <p className="link dim white dib mr3"
                    title="High Score">High Score: {props.topScore}</p>
            </nav>
        </header>
)

export default NavBar;