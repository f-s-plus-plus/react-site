import React from 'react';

//For the sidebar
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    }
  }

  componentDidMount() {
    this.setState({isOpen: true, accordionStatus: "accordion-close"});
  }

  toggle = () => {
    if (!this.state.isOpen) {
      this.setState({isOpen: true});
    } else {
      this.setState({isOpen: false});
    }
  };

  generateLinks = () => {
    const actions = ["Profile", "Projects"].map((entry, index) => {
      return (<button key={`action-${index}`} onClick={() => this.props.changePage(index)}>
        <div className={`navbar-icon ${entry.toLowerCase()}`}/>
        <p>
          {entry}
        </p>
      </button>)
    });
    const links = [
      {
        link: "https://github.com/f-s-plus-plus",
        text: "Github"
      }, {
        link: "https://www.linkedin.com/in/filip-saulean-919624179/",
        text: "Linkedin"
      }, {
        link: "https://mithridatium.io",
        text: "Web App"
      }
    ].map((entry, index) => {
      return (<a key={`link-${index}`} href={entry.link}>
        <div className={`navbar-icon ${entry.text.replace(' ', '-').toLowerCase()}`}/>
        <p>
          {entry.text}
        </p>
      </a>)
    });
    return [
      ...actions,
      ...links
    ]
  };

  render() {
    return (<div className='navbar-container'>
      <div className={this.state.isOpen
          ? 'navbar navbar-close'
          : 'navbar navbar-open'}>
        {this.generateLinks()}
      </div>
      <button onClick={this.toggle} className="open-navbar-btn"/>
    </div>);
  }
}

export default Navbar;
