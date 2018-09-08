import React from 'react';

import { Button, Modal } from 'reactstrap';

const GameWon = (props) => {
  return (
    <Modal isOpen={props.gameWon} className={props.className} centered size="lg">
      <div className="border border-dark rounded">
        <div className="bg-success text-center py-4"><h1 className="font-weight-bold">You Win!</h1></div>
        <div className="py-5 bg-success text-center">
          <h3>
            Score: 12 / 12
          </h3>
        </div>
        <div className="p-3 border-top border-dark">
          <Button onClick={props.resetGame} className="btn-block btn-outline-success">Play Again?</Button>{' '}
        </div>
      </div>
    </Modal>
  );
}


export default GameWon;