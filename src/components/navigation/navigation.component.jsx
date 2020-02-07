import React from 'react';
import './navigation.styles.css';
import { Link } from 'react-router-dom';


export class Navigation extends React.Component{
    render() {
    let styles = {textDecoration: 'none', color: 'black'};
    return  (
        <div className = "row">
            <span className = "hov">
                <Link style={styles} to="/about">
                    ABOUT
                </Link>
            </span>
            <span className = "hov">
                <Link style={styles} strict to="/">
                    HOME
                </Link>
            </span>
            <span className = "hov">
                <Link style={styles} to="/contact">
                    CONTACT
                </Link>
            </span>
        </div>
    )}
}