import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Route path="/" exact component={AboutMe} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/projects" component={Projects} />
      <Route path="/experience" component={Experience} />
      <Footer />
    </Router>
  );
}

export default App;
