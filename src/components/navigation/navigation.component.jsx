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
    let styles = {textDecoration: 'none', color: 'black'};
    let line = this.state.toggled === true ? 'line' : 'line1';
    let line1 = this.state.toggled === true ? 'line2' : 'line3';
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
                        ?  <Link style={styles} to="/about">ABOUT</Link>
                        : <Link style={styles} to="/about" onClick={ (event) => event.preventDefault() }>ABOUT</Link>
                        }
                </span>
                <span className="hov">
                    { 
                        this.state.toggled
                        ?  <Link style={styles} to="/">HOME</Link>
                        : <Link style={styles} to="/" onClick={ (event) => event.preventDefault() }>HOME</Link>
                    }
                </span>
            </div>
        </div>
    )}
}