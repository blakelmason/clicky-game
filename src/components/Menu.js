import React from 'react';

//reactstrap
import { Navbar } from 'reactstrap';

const Menu = (props) => {
  return (
    <Navbar className="d-flex justify-content-around text-center text-light" color="dark" dark>
      <div className="col-12 col-lg-3"><h3>Clicky Game!</h3></div>
      <div className="col-12 col-lg-6 my-4 my-lg-0"><h1>Click an image to begin!</h1></div>
      <div className="col-12 col-lg-3"><h3>Score: &nbsp;&nbsp;&nbsp; {props.score} &nbsp;/&nbsp;  12</h3></div>
    </Navbar>
  )
}
export default Menu;