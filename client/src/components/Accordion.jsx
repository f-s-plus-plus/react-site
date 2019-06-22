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

    //just to make sure that the accordion's state is set to closed
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
    };

    //populates the accordion using the passed object description
    createAccordionContent = () => {
        //gets the description object that is passed to the props
        let description = this.props.description;
        //empty array that will be returned at the end
        let accordionContent = [];

        //for each loop
        Object.keys(description).forEach((key, index) => {
            //checks to see if the anchor is going to a link or empty button
            let anchor;
            if(description[key].link == null) {
                anchor = <button className="empty-anchor-custom"> {description[key].name} </button>;
            }
            else {
                anchor = <a className="anchor-custom" href={description[key].link}> {description[key].name} </a>
            }

            //pushes it to that initially empty
            accordionContent.push(
                <div  key={index} className={this.state.isOpen ? 'accordion-open' : 'accordion-close'} ref={this.accordion}>
                    {anchor}
                </div>
            )
        });

        //returns that array
        return accordionContent;
    };

    render() {
        return (
            <div className="post">
                <button className="post-head" onClick={this.toggle}>
                    {this.props.title}
                    <span className='caret-down'> </span>
                </button>
                {this.createAccordionContent()}
                <div className={this.state.isOpen ? 'div-fill' : 'div-no-fill'}>
                </div>
            </div>
        );
    }
}

export default Accordion;
