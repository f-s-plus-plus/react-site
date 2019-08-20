import React from 'react';

class Project extends React.Component {

  //creates a link for project element (if there is no demonstration link, then no link is created for it)
  createLink = () => {
    if (this.props.demonstrationLink) {
      return <a className='demonstration' href={this.props.demonstrationLink} />
    }
    return null;
  };

  render() {
    return (<div className="project-container">
      <p className="project-title">
        <i className={this.props.language}/> {this.props.projectName}
      </p>
      <p>
        {this.props.description}
      </p>
      <div>
        <a className='github' href={this.props.link} />
        {this.createLink()}
      </div>
    </div>);
  }
}

export default Project;
