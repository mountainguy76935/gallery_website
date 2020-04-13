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
    >
      <FrontSide 
      style={{
        backgroundImage: this.props.picture
      }}
      >
        <CardFront picture={this.props.picture}/>
      </FrontSide>
      <BackSide 
      >
        <CardBack picture={this.props.picture} {...this.props}/>
      </BackSide>
    </Flippy>
    )
  }
}
