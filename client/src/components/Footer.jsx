import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return(
            <div className="bottom-bar">
                <div className="p1"> Filip Saulean </div>
                <div className="vertical-bar"/>
                <a href="https://reactjs.org/" className="react-link">
                    <i className="fab fa-react"></i>
                    Powered by React
                </a>
            </div>
        );
    }

}

export default Footer;