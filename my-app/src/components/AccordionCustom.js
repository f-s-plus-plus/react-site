import React from 'react';


class AccordionCustom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      accordionStatus: "accordion-close"
    }
    this.accordion = React.createRef();
  }

  componentDidMount() {
    this.setState({isOpen: false, accordionStatus: "accordion-close"})
   }

  //for toggling the accordion
  toggle = () => {
    if(!this.state.isOpen) {
      this.setState({
        isOpen: true,
        accordionStatus: "accordion-open"
      });
    }
    else {
      this.setState({
        isOpen: false,
        accordionStatus: "accordion-close"
      });
    }
  }

  //populates the accordion using the passed object description
  createAccordionContent = () => {
    let description = this.props.description;
    let accordionContent = [];
    Object.keys(description).forEach(key => {
      let anchor;
      if(description[key].link === "") {
        anchor = <button className="empty-anchor-custom"> {description[key].name} </button>;
      }
      else {
        anchor = <a className="anchors-custom" href={description[key].link}> {description[key].name} </a>
      }
      accordionContent.push(
        <div className={this.state.isOpen ? 'accordion-open' : 'accordion-close'} ref={this.accordion}>
          {anchor}
        </div>
      )
    });
    return accordionContent;
  };

  render() {
    return (
      <div className="post">
        <div>
        <button className="post-head" onClick={this.toggle}>
          {this.props.title}
          <i className="fas fa-caret-down padding-left"></i>
        </button>
            {this.createAccordionContent()}
            <div className={this.state.isOpen ? 'div-fill' : 'div-no-fill'}>
            </div>
        </div>
        </div>
    );
  }
}

export default AccordionCustom;
