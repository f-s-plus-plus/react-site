import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return(
            <div className="bottom-bar">
                <a href="https://reactjs.org/" className="react-link">
                    <i className="fab fa-react" />
                    Powered by React
                </a>
            </div>
        );
    }

}

export default Footer;