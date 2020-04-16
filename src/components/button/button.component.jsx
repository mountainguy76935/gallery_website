import React from 'react';
import './button.styles.css'

export const CalcButton= (props) => {
    const [check, setCheck] = React.useState(false)

    const handleHover = () => {
        setCheck(true)
    }

    const handleExit = () => {
        setCheck(false)
    }

    const inputCalc = (value) => {
        let regEx = /\/|\+|-|\*/g;
        if (regEx.test(value)) {
            props.handleOp(` ${value} `)
        } else if (parseInt(value) < 10 || parseInt(value) >= 0 || value === '.' || value === '=') {
            props.handleClick(value)
        } else if (value === 'AC') {
            props.handleClear()
        } else if (value === '=') {
            props.handleSolve()
        }
    }

        return(
            <div 
                onClick={() => inputCalc(props.value)} 
                onMouseOver = {handleHover}
                onMouseOut = {handleExit}
                className = {
                    props.active || check ? 
                    `buttons active ${props.name}` : 
                    `buttons ${props.name}`
                }>
                {props.value}
            </div>
        )
}