import React, { Component } from 'react';

/* the main container that appears when the site loads*/
class Welcome extends Component {

    render() {
        return (
            <div>
                <div className="welcome-box">
                    <h2 className="header-1">
                        Hello, there!
                    </h2>
                    <a className='font-box' href="#resume">
                        <p>
                            Scroll Down
                        </p>
                        <div className='chevron-down'>
                        </div>
                    </a>
                </div>

            </div>
        );
    }
}

export default Welcome;
