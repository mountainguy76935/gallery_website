import React from 'react';
import './circles.styles.css';
import { FlipCard } from '../flip-card/flip-card.component'

export const Circles = (props) => {

    const [active, setActive] = React.useState(false)

    const handleHover =() => {
        setActive(true);
        props.handleChange(props.color)
    }

    return(
        <div 
            className='circles'
            onMouseEnter={handleHover}
            >
            {active ? 
            <FlipCard 
            key = {props.picture.id} 
            picture = {props.picture}
            {...props}
            /> :
            <div 
                className='balls' 
                style={{backgroundColor: props.color}}></div>    
        }
        </div>
    )
}
