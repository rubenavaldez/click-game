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
        className="center-align  white-text">
        <img style={style.logoIcon}
            className='logoIcon'
            src="https://66.media.tumblr.com/d8f1642e96a7e215bb40e76ae025690d/tumblr_msw9yfu1ir1qbbbqro1_500.gif"
            alt="character scroll"/>
        <h2 className="center-align white-text">
            Choose a fighter
            <br></br>
             If you haven't chosen them so far, your score will increase. 
            <br></br>
            If you've chosen them before
            <br></br>
             it's Game Over.
            <br></br>
            Can you remember?
            </h2>    
        </article>
)

export default Banner;