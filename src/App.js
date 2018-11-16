import React, { Component } from 'react';

//components
import Menu from './components/Menu.js';
import Instructions from './components/Instructions.js';
import CardContainer from './components/cards/CardContainer.js';
import GameOver from './components/GameOver.js';
import GameWon from './components/GameWon.js';

class App extends Component {

  state = {
    score: 0,
    imageOrder: null,
    clickedImages: [],
    gameOver: false,
    gameWon: false
  }

  componentDidMount() {
    this.shuffleImages();
  }

  componentDidUpdate() {
    if (this.state.score === 12) {
      this.setState({
        score: 0,
        gameWon: true
      });
    }
  }

  shuffleImages() {
    const orderedArray = [];
    const randomArray = [];
    const numberOfImages = 12;
    for (let a = 1; a <= numberOfImages; a++) {
      orderedArray.push(a);
    }
    for (let a = 1; a <= numberOfImages; a++) {
      let nextNumberIndex = this.randomNumber(0, orderedArray.length - 1);
      let nextNumber = orderedArray[nextNumberIndex];
      randomArray.push(nextNumber);
      orderedArray.splice(nextNumberIndex, 1);
    }
    this.setState({
      imageOrder: randomArray
    })
  }

  checkScore(imageNumber) {
    const alreadyClicked = this.state.clickedImages.includes(imageNumber);
    if (alreadyClicked) this.gameOver();
    else this.addPoint(imageNumber);
  }

  gameOver() {
    this.setState({
      gameOver: true
    });
  }

  addPoint(imageNumber) {
    const clickedImages = this.state.clickedImages.concat(imageNumber);
    this.setState({
      clickedImages: clickedImages,
      score: this.state.score + 1
    });
    this.shuffleImages();
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  resetGame() {
    this.setState({
      score: 0,
      clickedImages: [],
      gameOver: false,
      gameWon: false
    })
    this.shuffleImages();
  }

  render() {
    return (
      <div className="App">
        <Menu score={this.state.score} />
        <div className="border border-info" style={{ height: '2px' }} />
        <Instructions />
        <CardContainer imageOrder={this.state.imageOrder} checkScore={this.checkScore.bind(this)} />
        <GameOver gameOver={this.state.gameOver} score={this.state.score} resetGame={this.resetGame.bind(this)} />
        <GameWon gameWon={this.state.gameWon} resetGame={this.resetGame.bind(this)} />
      </div>
    );
  }
}

export default App;
