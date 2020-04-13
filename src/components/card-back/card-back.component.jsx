import React from "react";
import './card-back.styles.css';
import { Link } from 'react-router-dom'

export const CardBack = (props) => (
        <div className="cardback" style={{backgroundColor: props.mainColor ? props.mainColor : 'black'}}>
            {props.picture.link !== 'calc' ?
            <a 
                className='backlink'
                href= {
                    props.picture.link ? 
                    props.picture.link : 
                    ''
                } 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    {props.picture.link ? 
                    'CLICK!' : 
                    ''}
                </a> :
            <Link
                className="backlink"
                to="/calculator"
                >
                CLICK!
            </Link>
            }
        </div>
    )

