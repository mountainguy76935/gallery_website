import React from 'react';
import './navigation.styles.css';
import { Link } from 'react-router-dom';

export class Navigation extends React.Component{
    constructor() {
        super();
        this.state = {
            toggled: false
        }
    }

    handleClick = () => {
          this.setState({
              toggled: this.state.toggled === false ? true : false
          })
      }

    render() {
    let line = this.state.toggled === true ? 'line1' : 'line';
    let line1 = this.state.toggled === true ? 'line3' : 'line2';
    let row = this.state.toggled === true ? 'row' : 'row1';
    return  (
        <div>
            <div className="block" onClick={this.handleClick}>
                <div className={line}></div>
                <div className={line1}></div>
                <div className={line1}></div>
            </div>
            <div className = {row}  name="head" >  
                <span className="hov">
                    { 
                        this.state.toggled
                        ?  <Link className="linkClass" to="/">HOME</Link>
                        : <Link className="linkClass" to="/" onClick={ (event) => event.preventDefault() }>HOME</Link>
                    }
                </span>
                <span className="hov">
                        { 
                        this.state.toggled
                        ?  <Link className="linkClass" to="/about">ABOUT</Link>
                        : <Link className="linkClass" to="/about" onClick={ (event) => event.preventDefault() }>ABOUT</Link>
                        }
                </span>
                <span className="hov">
                    { 
                        this.state.toggled
                        ?  <Link className="linkClass" to="/daily_pic">NASA PIC!</Link>
                        : <Link className="linkClass" to="/daily_pic" onClick={ (event) => event.preventDefault() }>NASA PIC!</Link>
                    }
                </span>
            </div>
        </div>
    )}
}