import React, { Component } from 'react';

/* the main container that appears when the site loads*/
class Welcome extends Component {

    render() {
        return (
            <div className="welcome-box">
                <h1 className='header-1'>
                    Hello There!
                </h1>
                <a className='scroll-down-link' href='#resume'> You can scroll down! </a>
            </div>
        );
    }
}

export default Welcome;
