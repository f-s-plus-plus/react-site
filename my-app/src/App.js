import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from "./components/NavbarCustom";
import ProfileCustom from "./components/ProfileCustom.js";
import WelcomeCustom from "./components/WelcomeCustom.js";
import AccordionCustom from "./components/AccordionCustom.js";

//resume file
import resumeFile from './static/resume.pdf';

let bioPass = "Hello there, my name is Filip Saulean. I can unequivocally say that I am focused and dedicated to seeing my goals brought to fruition. In addition, I can assure you that I am a fast learner so if you need me to learn a new library or language, I will do so in an expedient manner. My personal site was built with React and node.js. PS: I am also fascinated with antiquity, Roman culture, and Hellenism.";

//for the accordions
let languages = { python : { name : "Python", link : "https://github.com/f-s-plus-plus/power-set"},
                  java : { name : "Java", link : "https://github.com/f-s-plus-plus/immigration-forms-auto-filler"},
                  javascript : { name :"JavaScript", link : "https://github.com/f-s-plus-plus/web-scrapper"},
                  csharp : { name : "C#", link : "https://github.com/f-s-plus-plus/unity-game"},
                  php : { name : "PHP", link : "https://github.com/f-s-plus-plus/photography-website"}};
let additional = { django : { name : "Django", link : "https://github.com/f-s-plus-plus/django-project"},
                  node : { name : "Node.js", link : "https://github.com/f-s-plus-plus/web-scrapper"},
                  react : { name : "React", link : "https://github.com/f-s-plus-plus/accordion-react"},
                  jquery : { name : "jQuery", link : "https://github.com/f-s-plus-plus/cs-fair"}};
let contactInformation = { personal : { name : "fsaulean@gmail.com", link : ""},
                          school : { name : "fsaulean@uvm.edu", link : ""},
                          phone : { name : "808-315-5313", link : ""}};
let database = { mysql : {name : "MySQL", link : "https://github.com/f-s-plus-plus/photography-website"},
                sqlite3 : {name : "SQLite3", link : ""},
                mongo : {name : "MongoDB", link : "https://github.com/f-s-plus-plus/cs-fair"}};

//main App
class App extends Component {

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"  />
        <NavbarCustom />
        <div className="container">
          <WelcomeCustom />
          <a id="resume-container" className="anchor-custom">
          <ProfileCustom bio={bioPass}/>
          </a>
          <AccordionCustom title="Languages" description={languages} />
          <AccordionCustom title="Frameworks/Libraries" description={additional} />
          <AccordionCustom title="Database Experiences" description={database} />
          <AccordionCustom title="Contact Information" description={contactInformation} />
        </div>
        <div className="container">
          <a href={resumeFile} download className="download-anchor"> Download Resume </a>
        </div>
        <div className="bottom-bar">
          <div className="p1"> Filip Saulean </div>
          <div className="vertical-bar"/>
          <a href="https://reactjs.org/" className="react-link">
            <i className="fab fa-react react-brand"> </i> Powered by React
          </a>
        </div>
      </div>
    );
  }
}

export default App;
