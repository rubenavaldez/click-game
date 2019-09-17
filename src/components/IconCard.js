import React from 'react';





const IconCard = props => (
    <div id={props.id}
        className="col s3"
        value={props.id}
        onClick={()=>
            props.clickedPlayer(props.id)
        }>
            
                <img src={props.image}
                    className="responsive-img circle"
                    style={{"maxHeight":"400px", "maxWidth":"200px","minWidth":"200px","minHeight":"200px"}}
                    alt="game-char"/>
            
        </div>


    //     <div class="col s2">
    //     <img src="images/yuna.jpg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
    //   </div>
)

export default IconCard;