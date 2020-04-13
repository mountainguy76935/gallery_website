import React from "react";
import { FlipCard } from "../flip-card/flip-card.component";
import './card-list.styles.css';

export const CardList = props => {
    const left = props.picture.slice(0, 4);
    const right = props.picture.slice(4);
    return(
        <div className="both">
            <div className = "right">
            {right.map(picture => (
                <FlipCard 
                    key = {picture.id} 
                    picture = {picture}
                />))}
            </div>
            <div className = "left">
                {left.map(picture => (
                <FlipCard 
                    key = {picture.id} 
                    picture = {picture}
                />))}
            </div>
        </div>
    )
}