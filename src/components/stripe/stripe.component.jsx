import React from 'react';
import './stripe.styles.css'

export const Stripe = (props) => {
    const colors = ['#EFC413', '#E99A17', '#D45717', '#E33E32', '#CB303E'];
    return (
        <div className="whole">
            <div className={props.mainColor ? "back_img active" : "back_img"}></div>
            <div className='stripe'> 
                {colors.map((a, i) => <div 
                                    style={{
                                        left: `${80*i}px`,
                                        backgroundColor: `${a}`
                                    }} 
                                    className={'stripes'}></div>
                                )}
            </div>
            <div className="animation_box">
                <div 
                    className="stripe_black_left" 
                    style={{
                        backgroundColor: props.mainColor ? props.mainColor : 'black'
                    }}></div>
                {colors.map((a,i) => <div className={'stripe'+(i+1)}></div>)}
                <div 
                    className="stripe_black_right" 
                    style={{
                        backgroundColor: props.mainColor ? props.mainColor : 'black'
                    }}></div>
            </div>
        </div>
    )
}