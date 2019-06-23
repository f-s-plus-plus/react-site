import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";
import Welcome from "./components/Welcome.jsx";

import Footer from './components/Footer';
import ProjectsContainer from './components/ProjectsContainer';

//main App
class App extends Component {

    render() {
        return (
            <div className="App">
                <Navbar />
                <Welcome />
                <Profile />
                <br />
                <ProjectsContainer />
                <Footer/>
            </div>
        );
    }
}

export default App;
