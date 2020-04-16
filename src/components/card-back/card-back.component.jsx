import React from "react";
import './card-back.styles.css';
import { Link } from 'react-router-dom'

export const CardBack = (props) => (
        <div 
            className="cardback" 
            style={{
                backgroundColor: 
                props.mainColor ? 
                props.mainColor : 
                'black'
            }}>
            {props.picture.link !== 'calc' &&  props.picture.link !== 'nasa' ?
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
                props.picture.link === 'calc' ? 
            <Link
                className="backlink"
                to="/calculator"
                >
                CLICK!
            </Link> : 
            <Link
                className="backlink"
                to="/daily_pic"
                >
                CLICK!
            </Link>
            }
            <div className="texture"></div>
        </div>
    )

