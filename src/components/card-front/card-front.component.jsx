import React from "react";

export const CardFront = (props) => (
    <React.Fragment>
        <img 
            className="cardImages" 
            alt={props.picture.id} 
            src={props.picture.src} 
            width="100px" 
            height="100px"
            style={{
                borderRadius: '50%'
            }}
        />
    </React.Fragment>
)

