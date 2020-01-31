import React from "react";
import './card-back.styles.css';

export const CardBack = props => (
        <div className="cardback">
            <p>
                {props.picture.tagline}
            </p>
            <a className="link" href= {props.picture.link ? props.picture.link : ''} >{props.picture.link ? 'Click Me' : ''}</a>
        </div>
    )

