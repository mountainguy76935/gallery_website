import React from "react";
import './card.styles.css';

//Later we are going to implement https://www.npmjs.com/package/react-card-flip into this card to put some 
//text on the back! It will be dope.

export const Card = props => (
    <div className = "card">
        <img className="images" alt="photos for game" src={props.picture.src} width="180px" height="180px"/>
        <h2>{props.picture.name}</h2>
        <p>{props.picture.tagline}</p>
    </div>
)

