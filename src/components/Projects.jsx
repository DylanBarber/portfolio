//Depenedencies
import React from 'react'

//Bootstrap
import Card from 'react-bootstrap/Card';

const Projects = () => (
  <div className='container'>
    <div className='content projectsContent'>
      <h1 className="projectsHeading">My Projects</h1>
      <div className='projectsCards'>
        <a href="https://dylanbarber.github.io/DiceBlackjack/">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./lib/img/blackjack.png" />
            <Card.Body>
              <Card.Title>Dice Blackjack</Card.Title>
              <Card.Text>
                Project Made with HTML5 CSS3 and vanilla JS (Hosted on GH Pages)
    </Card.Text>
            </Card.Body>
          </Card>
        </a>

        <a href="https://dylans-weather-app.herokuapp.com/">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./lib/img/weatherApp.png" />
            <Card.Body>
              <Card.Title>Dice Blackjack</Card.Title>
              <Card.Text>
              Weather web app made with express JS back end and react JS front end. Uses MapQuest geocoding API for location and DarkSky API for weather stats (Hosted on Heroku)
    </Card.Text>
            </Card.Body>
          </Card>
        </a>

        <a href="https://spongebob-mock.netlify.com/">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./lib/img/spongebob.png" />
            <Card.Body>
              <Card.Title>SpOnGeBoB mOcK gEnErAtOr</Card.Title>
              <Card.Text>
              Will turn any normal text into "tHiS tYpE oF tExT". Strictly for meme usage. Uses React JS and canvas to draw image for download (Hosted on Netlify)
    </Card.Text>
            </Card.Body>
          </Card>
        </a>

        <a href="https://github.com/DylanBarber/dbElectronics">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./lib/img/dbelectronics.png" />
            <Card.Body>
              <Card.Title>DB Electronics</Card.Title>
              <Card.Text>
              Full scale E-commerce site. Utilizes React JS, Node JS, Express, mySQL, Chai JS, and Mocha JS (Currently Not Deployed)
    </Card.Text>
            </Card.Body>
          </Card>
        </a>
        
      </div>
    </div>
  </div>


)

export default Projects;