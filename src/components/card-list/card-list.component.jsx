import React from "react";
import { Card } from "../card/card.component";
import './card-list.styles.css';

export const CardList = props => (
    <div className = "card-list">
        {props.picture.map(picture => (<Card key = {picture.id} picture = {picture}/>))}
    </div>
);