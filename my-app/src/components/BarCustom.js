import React from 'react';

class BarCustom extends React.Component {

  render() {
    return(
      <div className="container-welcome">
        <div className="text-top"> Welcome to my site! </div>
        <div className="welcome-text"> {this.props.welcomeText} </div>
      </div>
    );
  }
};

export default BarCustom;
