import React from 'react';
import './flip-card.styles.css';

export class FlipCard extends React.Component{
  flip = () => {
    let card = document.querySelector('.card');
    card.onclick = function() {
    card.classList.toggle('flipped');
  }
}

  render() {
        return (
            <section class="container">
            <div class="card" onclick={this.flip}>
              <div class="front">1</div>
              <div class="back">2</div>
            </div>
          </section>
        )
    }
}
    