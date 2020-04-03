import React from 'react';
import './calc_body.styles.css';

import Display from '../display/display.component'
import { CalcButton } from '../button/button.component';

export class Calc extends React.Component{
    constructor() {
        super();
        this.state={
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
    }

    render() {
        return(
            <div className="main-grid">
                <Display data={this.props.screen} answer={this.props.answer}/>
                {Object.keys(this.state).map(a => 
                    <CalcButton  
                        name={a} 
                        value={this.state[a]}
                        active={this.props[this.state[a]]}
                        {...this.props}
                    />)}
            </div>
        )
    }
}
