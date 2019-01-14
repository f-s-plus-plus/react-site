import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div className="navbar">
              <a href="#resume" className="nav-link resume">
                  Resume
              </a>
              <a href="https://github.com/f-s-plus-plus" className="nav-link github">
                  Github
              </a>
              <a href="https://mithridatium.io" className="nav-link notepad">
                  Notepad App
              </a>
          </div>
        );
    }
}

export default Navbar;