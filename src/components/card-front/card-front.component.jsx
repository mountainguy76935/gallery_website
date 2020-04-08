import React from "react";
import './card-front.styles.css';

export const CardFront = (props) => (
    <div className = 'cardfrot'>
        <img 
            className="cardImages" 
            alt={props.picture.id} 
            src={props.picture.src} 
            width="180px" 
            height="180px"
        />
        <h2>{props.picture.name}</h2>
    </div>
)

