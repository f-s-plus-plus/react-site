import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return(
            <div className="bottom-bar">
                <p> Filip Saulean </p>
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