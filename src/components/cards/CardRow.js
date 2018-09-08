import React, { Component } from 'react';

//components
import Card from './Card.js';

class CardRow extends Component {
  render() {
    const cardsPerRow = 4;
    const cardsArray = [];
    for (let i = 1; i <= cardsPerRow; i++) {
      cardsArray.push(i);
    }

    return (
      <div className="row">
        {cardsArray.map((elem, index) => {
          return <Card key={`card ${elem}`} imageNumber={this.props.cards ? this.props.cards[index] : null} checkScore={this.props.checkScore} />
        })}
      </div>
    )
  }
}
export default CardRow;