import React from 'react';
import './hamburger.styles.css';


export const Hamburger = (props) => {
    let line = props.toggled ? 'line1' : 'line';
    let line1 = props.toggled ? 'line3' : 'line2';
    return(
        <div className="block" onClick={props.handleClick}>
                <div className={line}></div>
                <div className={line1}></div>
                <div className={line1}></div>
        </div>
    )
}