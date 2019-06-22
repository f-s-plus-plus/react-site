import React, { Component } from 'react';

let dictionary = [
    {
        link: "https://github.com/f-s-plus-plus",
        text: "Github"
    },
    {
        link: "https://www.linkedin.com/in/filip-saulean-919624179/",
        text: "Linkedin"
    },
    {
        link: "#projects",
        text: "Projects"
    },
    {
        link: "#resume",
        text: "Resume"
    },
    {
        link: "https://mithridatium.io",
        text: "Application"
    }
];

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

    generateLinks = () => {
        let links = [];
        dictionary.forEach( (entry, index) => {
            links.push(
                <a key={index} href={entry.link}>
                    <div className={"navbar-icon " + entry.text.toLowerCase()} />
                    <p className="a-text"> {entry.text} </p>
                </a>
            )}
        );
        return links
    };

    render() {
        return(
            <div className='navbar-container'>
                <div className={this.state.isOpen ? 'navbar navbar-close' : 'navbar navbar-open'}>
                    {this.generateLinks()}
                </div>
                <button onClick={this.toggle} className="active-btn open-navbar-btn">
                </button>
            </div>
        );
    }
}

export default Navbar;