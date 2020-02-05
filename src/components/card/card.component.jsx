import React from "react";
import './card-front.styles.css';

export const Card = props => (
    <div className = 'cardfront'>
        <img className="images" alt={props.picture.id} src={props.picture.src} width="180px" height="180px"/>
        <h2>{props.picture.name}</h2>
        <p>Click Me to learn more!</p>
    </div>
)

