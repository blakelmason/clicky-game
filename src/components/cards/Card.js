import React from 'react';

import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

const StyledImage = styled.img`
  animation: 1s ${fadeInAnimation};
  transition: .5s;
  box-shadow: 0 5px 15px 0 black;
  width: 100%;
  &:hover {
    opacity: .8;
    box-shadow: 0 5px 50px 0 black
  }
`;

const Card = (props) => {
  return (
    <div className="col-12 col-sm-6 col-lg-3 text-center px-xl-5 py-xl-4 px-lg-4 py-lg-3 px-md-4 py-md-4 px-3 py-3">
      <div className="bg-light rounded" onClick={() => props.checkScore(props.imageNumber)}>
        <StyledImage src={props.imageNumber ? require(`../../images/card-images/${props.imageNumber}.jpg`) : null} alt="" className="img-fluid rounded border border-secondary" />
      </div>
    </div >
  )
}

export default Card;