import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronCustom = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to my site</h1>
          <p className="lead">This is the personal site of MithridatesEupator</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronCustom;
