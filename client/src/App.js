import React, {Component} from 'react';

import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ProjectsContainer from './components/ProjectsContainer';

import './App.css';

//main App
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({
      page: page
    })
  }

  render() {
    const components = [
      <Profile/>,
      <ProjectsContainer/>
    ];
    return (<div className="App">
      <Navbar changePage={this.changePage}/>
      {components[this.state.page]}
      <Footer/>
    </div>);
  }
}

export default App;
