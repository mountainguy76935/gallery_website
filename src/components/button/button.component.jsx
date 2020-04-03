import React from 'react';
import './button.styles.css'

export class CalcButton extends React.Component{
    constructor() {
        super();
        this.state={
            check: false
        }
    }

    handleHover = () => {
        this.setState({
            check: true
        })
    }

    handleExit = () => {
        this.setState({
            check: false
        })
    }

    inputCalc = (value) => {
        let regEx = /\/|\+|-|\*/g;
        if (regEx.test(value)) {
            this.props.handleOp(` ${value} `)
        } else if (parseInt(value) < 10 || parseInt(value) >= 0 || value === '.' || value === '=') {
            this.props.handleClick(value)
        } else if (value === 'AC') {
            this.props.handleClear()
        } else if (value === '=') {
            this.props.handleSolve()
        }
    }

    render() {
        return(
            <div 
                onClick={() => this.inputCalc(this.props.value)} 
                onMouseOver = {this.handleHover}
                onMouseOut = {this.handleExit}
                className = {
                    this.props.active || this.state.check? 
                    `buttons active ${this.props.name}` : 
                    `buttons ${this.props.name}`
                }>
                {this.props.value}
            </div>
        )
    }
}