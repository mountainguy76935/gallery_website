import React from 'react';
import './stripe.styles.css'

export const Stripe = (props) => {
    const classes = ['a', 'b', 'c', 'd', 'e'];
    let shadesa = !props.mainColor ? 'linear-gradient(to top, rgba(255,0,0,0), black)' : '';
    let shades1 = !props.mainColor ? 'linear-gradient(to top, black, rgba(255,0,0,0))' : '';
    return (
        <div className="whole">
            <div className='stripe'> 
                {classes.map(a => <div style={{backgroundImage: shadesa}} className={'stripe'+a}></div>)}
            </div>
            <div className="animation_box">
                <div 
                    className="stripe_black_left" 
                    style={{
                        backgroundColor: props.mainColor ? props.mainColor : 'black'
                    }}></div>
                {classes.map((a,i) => <div style={{backgroundImage: shades1}} className={'stripe'+(i+1)}></div>)}
                <div 
                    className="stripe_black_right" 
                    style={{
                        backgroundColor: props.mainColor ? props.mainColor : 'black'
                    }}></div>
            </div>
        </div>
    )
}