import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";
import Welcome from "./components/Welcome.jsx";
import Accordion from "./components/Accordion.jsx";
import Footer from './components/Footer';
import Project from './components/Project';

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
                sqlite3 : {name : "SQLite3"},
                mongo : {name : "MongoDB", link : "https://github.com/f-s-plus-plus/cs-fair"}};

//for the descriptions of each project
let notepadDescription = "A note taking application that has latex enabled and utilizes MongoDB and Node.js.";
let immigrationDescription = "A JavaFX application that makes filling out immigration forms (e.g. I-485 and I-90) relatively easy.";
let boggleDescription = "An implementation of the game Boggle in Java.";
let photographyDescription = "A blog templates that let the blogger to upload and share photos.";

//main App
class App extends Component {

    render() {
        return (
            <div className="App">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
                      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
                      crossOrigin="anonymous" />
                <Navbar />
                <Welcome />
                <div className="container-main">
                    <a id="resume-container" className="anchor-custom">
                        <Profile bio={bioPass}/>
                    </a>
                    <div className='accordion-container'>
                        <Accordion title="Languages" description={languages} />
                        <Accordion title="Frameworks/Libraries" description={additional} />
                        <Accordion title="Database Experiences" description={database} />
                        <Accordion title="Contact Information" description={contactInformation} />
                    </div>
                    <br />
                    <a href={resumeFile} className='download-anchor' download>
                        <i className="fas fa-download" /> Download Resume
                    </a>
                    <br />
                </div>
                <div className="container-main flex-container padding" id='projects'>
                    <p className="underline-text width-100"> Projects </p>
                    <p className="width-100-true" style={{marginBottom: "3rem"}}> Here is a quick overview of the projects that I have worked: </p>
                    <Project description={notepadDescription} language='fab fa-js-square' demonstrationLink="https://mithridatium.io" projectName="Notepad Application" link="https://github.com/f-s-plus-plus/notepad"/>
                    <Project description={immigrationDescription} language='fab fa-java' projectName="Immigrations Form Auto-Filler" link="https://github.com/f-s-plus-plus/immigration-forms-auto-filler"/>
                    <Project description={photographyDescription} language='fab fa-php' projectName="Photography Site" link="https://github.com/f-s-plus-plus/photography-website"/>
                    <Project description={boggleDescription} language='fab fa-java' projectName="Boggle" link="https://github.com/f-s-plus-plus/boggle"/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
