import React from 'react';

//accordion components that load after the bio
class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      accordionStatus: "accordion-close"
    };
    this.accordion = React.createRef();
  }

  toggle = () => {
    if (!this.state.isOpen) {
      this.setState({isOpen: true, accordionStatus: "accordion-open"});
    } else {
      this.setState({isOpen: false, accordionStatus: "accordion-close"});
    }
  };

  //populates the accordion using the passed object description
  createAccordionContent = () => {
    return Object.keys(this.props.description).map((key, index) => {
      if (this.props.description[key].link) {
        return (<div key={index} className={this.state.isOpen
            ? 'accordion-open'
            : 'accordion-close'} ref={this.accordion}>
          <a className="anchor-custom" href={this.props.description[key].link}>
            {this.props.description[key].name}
          </a>
        </div>)
      } else {
        return (<div key={index} className={this.state.isOpen
            ? 'accordion-open'
            : 'accordion-close'} ref={this.accordion}>
          <button className="empty-anchor-custom">
            {this.props.description[key].name}
          </button>
        </div>)
      }
    });
  };

  render() {
    return (<div className="post">
      <button className="post-head" onClick={this.toggle}>
        {this.props.title}
        <span className='caret-down'></span>
      </button>
      {this.createAccordionContent()}
      <div className={this.state.isOpen
          ? 'div-fill'
          : 'div-no-fill'}></div>
    </div>);
  }
}

export default Accordion;
