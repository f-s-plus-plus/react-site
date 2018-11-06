import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Well } from 'reactstrap';
import { Transition } from 'react-transition-group';

class TestCustom extends React.Component {

  render() {
    const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
  };

  const Fade = ({ in: inProp }) => (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          I'm a fade Transition!
        </div>
      )}
    </Transition>
  );

    return {Fade};
  }
}

export default TestCustom;
