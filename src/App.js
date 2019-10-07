import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

//Components
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <Router>
      <div className="App">
        {<Header />}

        {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
    </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
      </div>
      <Route path="/" exact component={AboutMe} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/projects" component={Projects} /> 
      <Route path="/experience" component={Experience} />

    </Router>
  );
}

export default App;
