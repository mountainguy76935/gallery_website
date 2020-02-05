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
      paddingBottom: '50px'
    }}
  >
    <FrontSide 
      style={{
        padding: '0em'
      }}
    >
      <Card picture={this.props.picture}/>
    
    </FrontSide>
    <BackSide 
      style={{
        padding: '0em'
      }}
    >
      <CardBack picture={this.props.picture}/>
    </BackSide>
    <p value={Object.keys(this.props)}></p>
  </Flippy>
  )
}
}
