import React from 'react';

import { Button, Modal } from 'reactstrap';

const GameOver = (props) => {
  return (
    <Modal isOpen={props.gameOver} className={props.className} centered size="lg">
      <div className="border border-dark rounded">
        <div className="bg-danger text-center py-4"><h1 className="font-weight-bold">Game Over!</h1></div>
        <div className="py-5 bg-danger text-center">
          <h3>
            Score: {props.score} / 12
          </h3>
        </div>
        <div className="p-3 border-top border-dark">
          <Button onClick={props.resetGame} className="btn-block btn-outline-danger">Try Again?</Button>{' '}
        </div>
      </div>
    </Modal>
  );
}


export default GameOver;