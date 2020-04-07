import React from "react";
import './card-back.styles.css';
import { Link } from 'react-router-dom'

export const CardBack = props => (
        <div className="cardback">
            <p>
                {props.picture.tagline}
            </p>
            {props.picture.link !== 'calc' ?
            <a 
                className="cardLink" 
                href= {
                    props.picture.link ? 
                    props.picture.link : 
                    ''
                } 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    {props.picture.link ? 
                    'Click Me' : 
                    ''}
                </a> :
            <Link to="/calculator">
                Click Me
            </Link>
            }
        </div>
    )

