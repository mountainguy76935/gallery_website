import React from 'react';
import './display.styles.css';

export const Display = (props) => (
    <div className="display">
        {props.data}
    </div>    
)