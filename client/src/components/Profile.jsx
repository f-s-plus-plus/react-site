import React from 'react';
import Accordion from "./Accordion.jsx";
import resumeFile from "../static/resume.pdf";

//bio
let bioPass = "Hello there, my name is Filip Saulean. I can unequivocally say that I am focused and dedicated to seeing my goals brought to fruition. In addition, I can assure you that I am a fast learner so if you need me to learn a new library or language, I will do so in an expedient manner. My personal site was built with React and node.js. PS: I am also fascinated with antiquity, Roman culture, and Hellenism.";

//for the accordions
let languages = {csharp : { name : "C#", link : "https://github.com/f-s-plus-plus/unity-game"},
    cPlusPlus : { name : "C++"},
    python : { name : "Python", link : "https://github.com/f-s-plus-plus/power-set"},
    java : { name : "Java", link : "https://github.com/f-s-plus-plus/immigration-forms-auto-filler"},
    javaScript : { name :"JavaScript", link : "https://github.com/f-s-plus-plus/web-scrapper"},
    php : { name : "PHP", link : "https://github.com/f-s-plus-plus/photography-website"},
    ruby : { name : "Ruby"}};
let additional = { django : { name : "Django", link : "https://github.com/f-s-plus-plus/django-project"},
    jquery : { name : "jQuery", link : "https://github.com/f-s-plus-plus/cs-fair"},
    node : { name : "Node.js", link : "https://github.com/f-s-plus-plus/web-scrapper"},
    react : { name : "React", link : "https://github.com/f-s-plus-plus/accordion-react"},
    rubyOnRails : { name : "Ruby on Rails"}};
let contactInformation = { personal : { name : "fsaulean@gmail.com"},
    school : { name : "filip.saulean@uvm.edu"},
    phone : { name : "808-315-5313"}};
let database = { mysql : {name : "MySQL", link : "https://github.com/f-s-plus-plus/photography-website"},
    sqlite3 : {name : "SQLite3"},
    mongo : {name : "MongoDB", link : "https://github.com/f-s-plus-plus/cs-fair"}};

//for the profile icon and description
class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            height: 0,
            check: false
        };
        this.profileContainer = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let node = this.profileContainer.current;
        let height = 0;

        while (node.offsetParent) {
            height += node.offsetTop - node.offsetHeight;
            node = node.offsetParent;
        }

        let check = true;
        if (window.pageYOffset < height + 100) {
            check = false;
        }
        this.setState({
            check: check
        });
    };

    render() {
        return(
            <div ref={this.profileContainer} className={ this.state.check ? "element-move-in container-profile" : "element-move-out container-profile"}>
                <div id="resume-container" className="anchor-custom">
                    <div className="profile-box">
                        <div className="profile-pic" />
                        <p className='underline-text'>
                            Who am I?
                        </p>
                        <p className="profile-text">
                            {bioPass}
                        </p>
                        <br />
                    </div>
                </div>
                <div className='accordion-container'>
                    <Accordion title="Languages" description={languages} />
                    <Accordion title="Frameworks" description={additional} />
                    <Accordion title="Database" description={database} />
                    <Accordion title="Contact Info" description={contactInformation} />
                </div>
                <br />
                <br />
                <br />
                <div className="download-container">
                    <a href={resumeFile} className='download-anchor' download>
                        <i className="fas fa-download" /> Download Resume
                    </a>
                </div>
            </div>
        );
    }
}

export default Profile;
