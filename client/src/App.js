import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from "./components/TopNavbar";
import Profile from "./components/Profile.js";
import Welcome from "./components/Welcome.js";
import Accordion from "./components/Accordion.js";
import Footer from './components/Footer';

//resume file
import resumeFile from './static/resume.pdf';

//bio
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
let contactInformation = { personal : { name : "fsaulean@gmail.com"},
                          school : { name : "filip.saulean@uvm.edu"},
                          phone : { name : "808-315-5313"}};
let database = { mysql : {name : "MySQL", link : "https://github.com/f-s-plus-plus/photography-website"},
                sqlite3 : {name : "SQLite3", link : ""},
                mongo : {name : "MongoDB", link : "https://github.com/f-s-plus-plus/cs-fair"}};

//main App
class App extends Component {

    render() {
        return (
            <div className="App">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"  />
                <TopNavbar />
                <div className="container">
                    <Welcome />
                    <a id="resume-container" className="anchor-custom">
                        <Profile bio={bioPass}/>
                    </a>
                    <Accordion title="Languages" description={languages} />
                    <Accordion title="Frameworks/Libraries" description={additional} />
                    <Accordion title="Database Experiences" description={database} />
                    <Accordion title="Contact Information" description={contactInformation} />
                </div>
                <div className="container">
                    <a href={resumeFile} download className="download-anchor">
                        Download Resume
                    </a>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;