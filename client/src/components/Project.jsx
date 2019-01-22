import React, { Component } from 'react';

class Project extends Component {

    createLink = () => {
        let link = null;
        if(this.props.demonstrationLink) {
            link = <a className='demonstration' href={this.props.demonstrationLink}> </a>
        }
        return link;
    }

    render() {
        return(
            <div className="project-container">
                <p>
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