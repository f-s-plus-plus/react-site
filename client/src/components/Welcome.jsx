import React, { Component } from 'react';

/* the main container that appears when the site loads*/
class Welcome extends Component {

    render() {
        return (
            <div className="welcome-box">
                <div className="social-media element-move-in">
                    <a href="https://www.linkedin.com/in/filip-saulean-919624179/" className="linkedin social-box">
                    </a>
                    <a href="https://github.com/f-s-plus-plus" className="github social-box">
                    </a>
                </div>
                <br />
                <a className='scroll-down-link' href='#resume'> You can scroll down! </a>
                <div id='resume'/>
            </div>
        );
    }
}

export default Welcome;
