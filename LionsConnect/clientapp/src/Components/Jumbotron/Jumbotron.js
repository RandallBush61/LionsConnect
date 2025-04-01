import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Jumbotron.css'

const MyJumbotron = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome to LionsConnect!</h1>
        <p className="lead">This is a simple home page for our program.</p>
        <hr className="my-2" />
        <p className="lead">
         
        </p>
      </Jumbotron>
    </div>
  );
};

export default MyJumbotron;