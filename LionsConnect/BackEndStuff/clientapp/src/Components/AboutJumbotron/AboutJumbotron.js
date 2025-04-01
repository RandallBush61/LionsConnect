import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const MyAboutJumbo= (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">About Our Group And Client</h1>
          <p className="lead">We are developing this forums page/daily planner for our client Dr. John Burris.
          Our goal for this project is to develop a place where South Eastern students can communicate with their peers 
          in an environment design specifically for them. We hope you enjoy our program!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default MyAboutJumbo;