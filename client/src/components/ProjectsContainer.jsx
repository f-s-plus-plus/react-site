import React from 'react';

import Project from './Project';

class ProjectsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isJava: true,
      isJavaScript: true,
      isPHP: true,
      check: false,
      height: 0
    };
    this.load = React.createRef();
  };

  activate = e => {
    switch (e.target.id) {
      case('javascript'):
        this.setState({isJavaScript: true, isJava: false, isPHP: false});
        break;
      case('java'):
        this.setState({isJavaScript: false, isJava: true, isPHP: false});
        break;
      case('php'):
        this.setState({isJavaScript: false, isJava: false, isPHP: true});
        break;
      default:
        this.setState({isJavaScript: true, isJava: true, isPHP: true});
        break;
    }
  };

  render() {
    //for the descriptions of each project
    const notepadDescription = "A note taking application that has latex enabled and utilizes MongoDB and Node.js.";
    const immigrationDescription = "A JavaFX application that makes filling out immigration forms (e.g. I-485 and I-90) relatively easy.";
    const boggleDescription = "An implementation of the game Boggle in Java.";
    const photographyDescription = "A blog templates that let the blogger to upload and share photos.";
    const scraperDescription = "A Node.js application that scraps stories concerning Donald Trump from the New York Times and displays links to them on a website.";

    return (<div ref={this.load} className="container-main" id="projects">
      <div className="element-move-in flex-container padding">
        <p className="underline-text width-100">
          Projects
        </p>
        <p className="width-100-true" style={{
            marginBottom: "3rem"
          }}>
          Here is a quick overview of the projects that I have worked on
        </p>
        <div className="tags-container">
          <button className={this.state.isJavaScript && this.state.isJava && this.state.isPHP
              ? 'active-tag'
              : null} onClick={this.activate} id='all'>
            All
          </button>
          <button className={this.state.isJavaScript && !this.state.isJava && !this.state.isPHP
              ? 'active-tag'
              : null} onClick={this.activate} id="javascript">
            JavaScript
          </button>
          <button className={!this.state.isJavaScript && this.state.isJava && !this.state.isPHP
              ? 'active-tag'
              : null} onClick={this.activate} id="java">
            Java
          </button>
          <button className={!this.state.isJavaScript && !this.state.isJava && this.state.isPHP
              ? 'active-tag'
              : null} onClick={this.activate} id="php">
            PHP
          </button>
        </div>
        {
          this.state.isJava
            ? <Project description={boggleDescription} language='fab fa-java' projectName="Boggle" link="https://github.com/f-s-plus-plus/boggle"/>
            : null
        }
        {
          this.state.isJava
            ? <Project description={immigrationDescription} language='fab fa-java' projectName="Immigrations Form Auto-Filler" link="https://github.com/f-s-plus-plus/immigration-forms-auto-filler"/>
            : null
        }
        {
          this.state.isJavaScript
            ? <Project description={notepadDescription} language='fab fa-js-square' demonstrationLink="https://mithridatium.io" projectName="Notepad Application" link="https://github.com/f-s-plus-plus/notepad"/>
            : null
        }
        {
          this.state.isJavaScript
            ? <Project description={scraperDescription} language='fab fa-js-square' projectName="Trumps News Scapper (Hackathon)" link="https://github.com/f-s-plus-plus/trump_news_story_scraper"/>
            : null
        }
        {
          this.state.isPHP
            ? <Project description={photographyDescription} language='fab fa-php' projectName="Photography Site" link="https://github.com/f-s-plus-plus/photography-website"/>
            : null
        }
      </div>
    </div>);
  }
}

export default ProjectsContainer;
