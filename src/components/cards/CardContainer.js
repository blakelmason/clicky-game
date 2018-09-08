import React, { Component } from 'react';

//components
import CardRow from './CardRow.js';

class CardContainer extends Component {
  render() {
    const cardRows = [];
    if (this.props.imageOrder) {
      const rows = 3;
      for (let a = 0; a < rows; a++) {
        const cards = [];
        for (let b = (4 * a); b < ((4 * a) + 4); b++) {
          cards.push(this.props.imageOrder[b]);
        }
        cardRows.push(<CardRow key={`row ${a + 1}`} cards={cards} imageNumber={a + 1} checkScore={this.props.checkScore} />)
      }
    }
    return (
      <div className="container">
        {cardRows}
      </div>
    )
  }
}

export default CardContainer;