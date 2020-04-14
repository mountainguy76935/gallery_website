import React from 'react';
import './navigation.styles.css';
import { Link } from 'react-router-dom';
import { Hamburger } from '../hamburger/hamburger.component'

export class Navigation extends React.Component{
    constructor() {
        super();
        this.state = {
            toggled: false,
            pages: [
                {
                    title: 'HOME',
                    path: '/'
                },
                {
                    title: 'ABOUT',
                    path: '/about'
                },
                {
                    title: 'NASA PIC!',
                    path: '/daily_pic'
                }
            ]
        }
    }

    handleClick = () => {
          this.setState({
              toggled: this.state.toggled === false ? true : false
          })
      }

    render() {
    let row = this.state.toggled === true ? 'row' : 'row1';
    return  (
        <React.Fragment>
            <Hamburger 
                handleClick={this.handleClick} 
                toggled={this.state.toggled}
            />
            <div className = {row}  name="head" > 
                {this.state.pages.map(a => {
                    return (
                        <span className="hov">
                            <Link 
                                className={
                                    this.state.toggled ? 
                                    'linkClass' : 
                                    'linkClass active'
                                } 
                                to={a.path} 
                                onClick={
                                    !this.state.toggled ? 
                                    (event) => event.preventDefault() : 
                                    null
                                }>
                                {a.title}
                            </Link>
                        </span>
                    )
                })}
            </div>
        </React.Fragment>
    )}
}