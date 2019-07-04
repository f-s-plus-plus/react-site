import React, { Component } from 'react';

import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ProjectsContainer from './components/ProjectsContainer';
import Welcome from "./components/Welcome";

import './App.css';

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
