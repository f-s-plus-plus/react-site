import React, { Component } from 'react';

/*for each project widget
this.props.projectName : name of each project
this.props.language : the name of the language it was made (passes a fontawesome class name(s))
this.props.description : the description of each project
this.props.demonstrationLink : the link to a live version of each project
this.props.link : the link to the github repository
*/
class Project extends Component {

    //creates a link for project element (if there is no demonstration link, then no link is created for it)
    createLink = () => {
        let link = null;
        if(this.props.demonstrationLink) {
            link = <a className='demonstration' href={this.props.demonstrationLink}> </a>
        }
        return link;
    };

    render() {
        return(
            <div className="project-container">
                <p className="project-title">
                    <i className={this.props.language} />
                    {this.props.projectName}
                </p>
                <p>
                    {this.props.description}
                </p>
                <div>
                    <a className='github' href={this.props.link}>
                    </a>
                    {this.createLink()}
                </div>
            </div>
        );
    }
}

export default Project;