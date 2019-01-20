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
                <button onClick={this.toggle} className="active-btn open-navbar-btn">
                </button>
            </div>
        );
    }
}

export default Navbar;