import React from "react";
import { FlipCard } from "../flip-card/flip-card.component";
import './card-list.styles.css';

export const CardList = props => (
    <div className = "card-list">
        {props.picture.map(picture => (
        <FlipCard 
            key = {picture.id} 
            picture = {picture}
        />))}
    </div>
);