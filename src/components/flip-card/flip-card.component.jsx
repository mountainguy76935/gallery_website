import React from 'react';
import "./flip-card.styles.css";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { CardFront } from "../card-front/card-front.component";
import { CardBack } from "../card-back/card-back.component"


export class FlipCard extends React.Component{
render() {
  return (
    <Flippy 
      className = "full"
      flipOnClick={true}
      flipDirection="horizontal"
      ref={(r) => this.flippy = r}
      style={{
        paddingBottom: '50px',
        height: '0%'
      }}
    >
      <FrontSide 
      >
        <CardFront picture={this.props.picture}/>
      </FrontSide>
      <BackSide 
        style={{
          padding: '0em'
        }}
      >
        <CardBack picture={this.props.picture}/>
      </BackSide>
    </Flippy>
    )
  }
}
