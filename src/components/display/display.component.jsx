import React from 'react';
import './display.styles.css';

export default class Display extends React.Component{
    render() {
        return(
            <div className="display">
                {this.props.data}
            </div>    
        )
    }
}

