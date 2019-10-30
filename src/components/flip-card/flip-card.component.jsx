import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Card } from "../card/card.component";
import { CardBack } from "../card-back/card-back.component"


export class FlipCard extends React.Component{
render() {
	// .. return
  return (
  <Flippy // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r}
  >
    <FrontSide>
        <Card key = {this.props.key} picture={this.props.picture}/>
    </FrontSide>
    <BackSide>
      <CardBack/>
    </BackSide>
  </Flippy>
  )
}
}
