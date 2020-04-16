import React from 'react';
import './title.styles.css';
import { Stripe } from '../stripe/stripe.component'

export const Title = (props) => {
      let colors = ['#8fb0a9', '#2e2a39']
      let percent = new Array(2).fill(35).map((a, i) => a-(1*i));
      let leftPer = 50;
      return (
            <div className='fade'>
            {percent.map((a, i) => {
                  return(
                  <h1 
                        className = "title" 
                        style={{
                              top: `${a}%`, 
                              left: `${leftPer-i/3}%`,
                              animationDelay: `${1+(i/10)}s`, 
                              color: colors[i]}}
                  >
                        {props.newTitle ? 
                        props.newTitle : 
                        'Welcome'
                  }
                  </h1>
                  )    
            })}
            <Stripe {...props}/>
            </div>
      )
}