import React from 'react';
import { Calc } from '../calc_body/calc_body.component';
import './calculator.styles.css'

export class Calculator extends React.Component{
    constructor() {
        super();
        this.state={
            screen: '',
            answer: '',
            decLock: false,
            screenAnswer: false
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleDown);
        document.addEventListener('keyup', this.handleUp);
    }
    
    handleUp = (e) => {
        let regEx = /\/|\+|-|\*/g;
        let pressedKey = String.fromCharCode(e.keyCode);
        let value;
        switch(e.keyCode) {
            case 191:
                value = '/'
                break;
            case 77: 
                value = '*'
                break;
            case 189:
                value = '-'
                break;
            case 80:
                value = '+'
                break;
            case 13:
                value = '='
                break;
            case 67:
                value = 'AC'
                break;
            default:
                value = null;
        }
        if (regEx.test(value)) {
            this.setState({
                [value]: false
            })
        } else if (value === '=') {
            this.setState({
                [value]: false
            })
        } else if (value === 'AC') {
            this.setState({
                [value]: false
            })
        } else {
            this.setState({
                [pressedKey]: false
            })
        }
    }

    handleDown = (e) => {
        let regEx = /\/|\+|-|\*/g;
        let cutUp;
        let pressedKey = String.fromCharCode(e.keyCode);
        if (this.state.screenAnswer) {
            this.setState({
                screen: '',
                screenAnswer: false
            })
        }
        if (e.keyCode === 8) {
            cutUp = this.state.screen.split('')
            cutUp = cutUp.slice(0, cutUp.length-1).join('')
            this.setState({
                screen: cutUp 
            })
        }
        if (!this.state.screen && pressedKey > 0 && pressedKey < 10) {
            this.setState({
                screen: this.state.screen.length <10 ?  this.state.screen + pressedKey : this.state.screen,
                [pressedKey]: true
            })
        } else if (this.state.screen && pressedKey >= 0 && pressedKey < 10){
            this.setState({
                screen: this.state.screen.length <10 ?  this.state.screen + pressedKey : this.state.screen,
                [pressedKey]: true
            })
        } else if (pressedKey === '.' && this.state.decLock === false) {
            this.setState({
                screen: this.state.screen + pressedKey,
                decLock: true
            })    
        }
        let value;
        switch(e.keyCode) {
            case 191:
                value = '/'
                break;
            case 77: 
                value = '*'
                break;
            case 189:
                value = '-'
                break;
            case 80:
                value = '+'
                break;
            case 13:
                value = '='
                break;
            case 67:
                value = 'AC'
                break;
            default:
                value = null;
        }
        if (regEx.test(value)) {
            this.setState({
                [value]: true
            })
            this.handleOp(` ${value} `)
        } else if (value === '=') {
            this.setState({
                [value]: true
            })
            this.handleSolve()
        } else if (value === 'AC') {
            this.setState({
                [value]: true
            })
            this.handleClear()
        }
    }

    handleClick = (e) => {
        let pressedKey = e;
        if (this.state.screenAnswer) {
            this.setState({
                screen: '',
                screenAnswer: false
            })
        }
        if (!this.state.screen && pressedKey > 0 && pressedKey < 10) {
            this.setState({
                screen: this.state.screen.length <10 ?  this.state.screen + pressedKey : this.state.screen
            })
        } else if (this.state.screen && pressedKey >= 0 && pressedKey < 10){
            this.setState({
                screen: this.state.screen.length <10 ?  this.state.screen + pressedKey : this.state.screen
            })
        } else if (pressedKey === '.' && this.state.decLock === false) {
            this.setState({
                screen: this.state.screen + pressedKey,
                decLock: true
            })    
        } else if (pressedKey === '=' && this.state.screen && this.state.answer) {
            this.handleSolve(); 
        }
    }

    handleOp = (vals) => {
        let regEx = /[/|+|\-|*] $/g;
        if (regEx.test(this.state.answer) && !this.state.screen) {
            return;
        }
        if (!this.state.answer) {
            vals = `${this.state.screen}${vals}`
            if (this.state.screen) {
                this.setState({
                    screen: '',
                    answer: vals,
                    decLock: false
                })
            }
        } else {
            this.handleSolve(vals);
            this.setState({
                screen: ''
            })
        }
    }

    handleClear = () => {
        this.setState({
            screen: '',
            answer: '',
            decLock: false
        })
    }

    handleSolve = (val) => {
        if (this.state.answer === this.state.screen || !this.state.answer || !this.state.screen) {
            this.setState({
                answer: '',
                screen: this.state.answer
            })
        } 
        let arr = this.state.answer+this.state.screen;
        if (arr.length>2) {
            arr = arr.split(' ');
        }
        if (arr.length<3) {
            this.setState({
                answer: '',
                screen: ''
            })
        } else if (arr.length>2){
            let answer;
            while(arr[1]) {
                switch(arr[1]) {
                    case '+':
                        answer = parseFloat(arr[0])+parseFloat(arr[2])
                        break;
                    case '-':
                        answer = parseFloat(arr[0])-parseFloat(arr[2])
                        break;
                    case '/':
                        answer = parseFloat(arr[0])/parseFloat(arr[2])
                        break;
                    case '*':
                        answer = parseFloat(arr[0])*parseFloat(arr[2])
                        break;
                    default:
                        return;
                } 
                arr.splice(0, 3)      
            }
            answer = (Math.floor(answer*100))/100
            this.setState({
                answer: val ? answer+val : answer,
                screen: answer,
                screenAnswer: true
            })
        }
    }

    render() {
        return(
            <div className="calc-app">
                {
                    this.state.answer ? 
                    <h1>{this.state.answer}</h1> : 
                    <h1>Answer displays here!</h1>
                }
                <Calc 
                    screen={this.state.screen} 
                    handleAnswer = {this.handleAnswer} 
                    handleDown = {this.handleDown} 
                    handleClick={this.handleClick} 
                    handleOp={this.handleOp}
                    handleClear={this.handleClear}
                    handleSolve={this.handleSolve}
                    {...this.state}
                />
                <p className="directions">
                    <br />
                    p = plus
                    <br />
                    - = subtract
                    <br />
                    / = divide
                    <br />
                    m = multiply
                    <br />
                    c = clear
                    <br />
                    enter = equals
                </p>
            </div>
        )
    }
}