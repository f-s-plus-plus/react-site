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
    createAccordionContent = () => {
      let accordionContent = []
      for (let i = 0; i < this.props.description.length; i += 2) {
        var j = i + 1;
        accordionContent.push(
          <div className={this.state.isOpen ? 'accordion-open' : 'accordion-close'} ref={this.accordion}>
            <a className="anchors-custom" href={this.props.description[j]}>
              {this.props.description[i]}
            </a>
          </div>
        )
      }
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
