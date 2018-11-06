import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from "./components/NavbarCustom";
import ProfileCustom from "./components/ProfileCustom.js";
import WelcomeCustom from "./components/WelcomeCustom.js";
import AccordionCustom from "./components/AccordionCustom.js";

import resumeFile from './static/resume.docx';

let bioPass = "Hello there, my name is Filip Saulean. I can unequivocally say that I am focused and dedicated to seeing my goals brought to fruition. In addition, I can assure you that I am a fast learner so if you need me to learn a new library or language, I will do so in an expedient manner. My personal site was built with React and node.js. PS: I am also fascinated with antiquity, Roman culture, and Hellenism.";
let languages = ["Python", "https://github.com/f-s-plus-plus/power-set", "Java", "https://github.com/f-s-plus-plus/immigration-forms-auto-filler","JavaScript", "","C#", "https://github.com/f-s-plus-plus/unity-game"];
let additional = ["Django", "https://github.com/f-s-plus-plus/django-project", "Node.js" , "","React" , "https://github.com/f-s-plus-plus/accordion-react","jQuery" , ""];
let contactInformation = ["fsaulean@gmail.com", "", "fsaulean@uvm.edu", "", "808-315-5313",""];
let database = ["MySQL", "", "SQLite3", "","MongoDB",""];


class App extends Component {

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"  />
        <NavbarCustom />
        <div className="container">
            <WelcomeCustom />
            <a name="resume-container" className="anchor-custom">
            <ProfileCustom bio={bioPass}/>
            </a>
            <br />
            <br />
            <br />
              <AccordionCustom title="Languages" description={languages} />
              <AccordionCustom title="Frameworks/Libraries" description={additional} />
              <AccordionCustom title="Database Experiences" description={database} />
              <AccordionCustom title="Contact Information" description={contactInformation} />
          </div>
          <br />
          <div className="container">
            <a href={resumeFile} download className="download-anchor"> Download Resume </a>
          </div>
          <br />
          <br />

        <div className="bottom-bar">
        <div className="p1"> Filip Saulean </div>
        <div className="vertical-bar"/>
        <a href="https://reactjs.org/" className="react-link">  <i className="fab fa-react react-brand">
        </i> Powered by React </a>
        </div>
      </div>
    );
  }
}

export default App;
