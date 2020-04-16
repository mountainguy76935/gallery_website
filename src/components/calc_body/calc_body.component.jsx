import React from 'react';
import './calc_body.styles.css';

import { Display } from '../display/display.component'
import { CalcButton } from '../button/button.component';

export const Calc = (props) => {
    const operations = {
        'clear': 'AC',
        'divide': '/',
        'multiply': '*',
        'subtract': '-',
        'add': '+',
        'equals': '=',
        'point': '.',
        'seven': '7',
        'eight': '8',
        'nine' : '9',
        'four' : '4',
        'five' : '5',
        'six': '6',
        'one': '1',
        'two': '2',
        'three': '3',
        'zero': '0'
    }        
    return(
        <div className="main-grid">
            <Display data={props.screen} answer={props.answer}/>
            {Object.keys(operations).map(a => 
                <CalcButton  
                    name={a} 
                    value={operations[a]}
                    active={props[operations[a]]}
                    {...props}
                />)}
        </div>
    )
}
