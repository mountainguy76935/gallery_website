import React from "react";
import './card-front.styles.css';

export const CardFront = (props) => (
    <React.Fragment>
        <img 
            className="cardImages" 
            alt={props.picture.id} 
            src={props.picture.src} 
            width="100px" 
            height="100px"
        />
    </React.Fragment>
)

