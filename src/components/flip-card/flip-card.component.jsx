import React from 'react';
import "./flip-card.styles.css";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Card } from "../card/card.component";
import { CardBack } from "../card-back/card-back.component"


export class FlipCard extends React.Component{
render() {
  return (
  <Flippy 
    className = "full"// default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r}
    style={{
      'padding-bottom': '50px'
    }}
  >
    <FrontSide 
      style={{
        padding: '0em'
      }}
    >
        <Card key = {this.props.key} picture={this.props.picture}/>
    </FrontSide>
    <BackSide 
      style={{
        padding: '0em'
      }}
    >
      <CardBack key = {this.props.key} picture={this.props.picture}/>
    </BackSide>
  </Flippy>
  )
}
}
