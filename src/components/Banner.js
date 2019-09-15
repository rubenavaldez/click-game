import React from 'react';

const style = {
    logoIcon: {
        width:150,
        heigth:100
    },
    bgDark: {
        backgroundColor: `rgb(1,0,1)`
    }
}

const Banner = props => (
    <article style={style.bgDark}
        className="mw7 center ph3 ph5-ns tc br2 pv3 bg-blac-90 mb5 animated fadeIn">
        <img style={style.logoIcon}
            className='logoIcon'
            src="./img/pacman.gif"
            alt="pacman"/>
        <h2 className="fw2 f4 1h-copy mt0 mb3 white animated fadeIn slower">
            Select an image. If the image has not been selected yet, your score will increase. 
            <br></br>
            If a previous chosen image is clicked, the it's Game Over.
            <br></br>
            Can you remember what you've clicked so far?
            </h2>    
        </article>
)

export default Banner;