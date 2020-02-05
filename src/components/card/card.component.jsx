import React from "react";
import './card.styles.css';

export const Card = props => (
    <div className = 'card_style'>
        <img className="images" alt="photos for site" src={props.picture.src} width="180px" height="180px"/>
        <h2>{props.picture.name}</h2>
        <p>Click Me to learn more!</p>
    </div>
)

