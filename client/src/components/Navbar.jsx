import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }

    componentDidMount() {
        this.setState({isOpen: true, accordionStatus: "accordion-close"})
    }

    //for toggling the navbar
    toggle = () => {
        if(!this.state.isOpen) {
            this.setState({
                isOpen: true,
            });
        }
        else {
            this.setState({
                isOpen: false,
            });
        }
    };

    render() {
        return(
            <div className='navbar-container'>
                <div className={this.state.isOpen ? 'navbar navbar-close' : 'navbar navbar-open'}>
                    <a href="https://github.com/f-s-plus-plus" className="github">
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/filip-saulean-919624179/" className="linkedin">
                        Linkedin
                    </a>
                    <a href="#resume" className="resume">
                        Resume
                    </a>
                    <a href="#projects" className="notepad">
                        Projects
                    </a>
                </div>
                <button onClick={this.toggle} className="active-btn open-navbar-btn">
                </button>
            </div>
        );
    }
}

export default Navbar;