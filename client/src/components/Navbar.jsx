import React from 'react';

//For the sidebar/navbar
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }

    componentDidMount() {
        this.setState({
          isOpen: true,
          accordionStatus: "accordion-close"
        });
    }

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
      const dictionary = [
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
                text: "Web App"
            }
        ];

        return dictionary.map((entry, index) => {
            return (
                <a key={ index } href={ entry.link }>
                    <div className={ "navbar-icon " + entry.text.toLowerCase().replace(" ","-") } />
                    <p>
                      { entry.text }
                    </p>
                </a>
            )}
        );
    };

    render() {
        return(
            <div className='navbar-container'>
                <div className={ this.state.isOpen ? 'navbar navbar-close' : 'navbar navbar-open' }>
                    { this.generateLinks() }
                </div>
                <button
                    onClick={ this.toggle }
                    className="active-btn open-navbar-btn"
                />
            </div>
        );
    }
}

export default Navbar;
