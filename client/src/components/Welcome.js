import React from 'react';

/* the main container that appears when the site loads*/
class Welcome extends React.Component {

    render() {
        return (
            <div>
                <div className="welcome-box">
                    <div className="header-1">
                        Hello, there!
                    </div>
                </div>
                <div className="font-box">
                <i className="fas fa-long-arrow-alt-down size-big"/>
                </div>
            </div>
        );
    }
}

export default Welcome;
