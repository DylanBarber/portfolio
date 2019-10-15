//Depenedencies
import React from "react";

//Components
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <div className='container'>
    <div className='content projectsContent'>
      <h1 className="projectsHeading">My Projects</h1>
      <div className='projectsCards'>
        <div className='projectsCardsRow'>
          <ProjectCard
            projectLink="https://github.com/DylanBarber/dbElectronics"
            projectPic="./lib/img/dbelectronics.png"
            projectTitle="DB Electronics"
            projectDesc="Full scale E-commerce site. Utilizes React JS, Node JS, Express, mySQL, Chai JS, and Mocha JS (Currently Not Deployed)"
          />
          <ProjectCard
            projectLink="https://dylans-weather-app.herokuapp.com/"
            projectPic="./lib/img/weatherApp.png"
            projectTitle="Weather App"
            projectDesc="Weather web app made with express JS back end and react JS front end. Uses MapQuest geocoding API for location and DarkSky API for weather stats (Hosted on Heroku)"
          />
        </div>
        <div className='projectsCardsRow'>
          <ProjectCard
            projectLink="https://spongebob-mock.netlify.com/"
            projectPic="./lib/img/spongebob.png"
            projectTitle="SpOnGeBoB mOcK gEnErAtOr"
            projectDesc={"Will turn any normal text into \"tHiS tYpE oF tExT\". Strictly for meme usage. Uses React JS and canvas to draw image for download (Hosted on Netlify)"}
          />
          <ProjectCard
            projectLink="https://dylanbarber.github.io/DiceBlackjack/"
            projectPic="./lib/img/blackjack.png"
            projectTitle="Dice Blackjack"
            projectDesc="Project Made with HTML5 CSS3 and vanilla JS (Hosted on GH Pages)"
          />
        </div>
        <div className='projectsCardsRow'>
          <ProjectCard
            projectLink="https://randomcolorgenerator.netlify.com/"
            projectPic="./lib/img/color.jpg"
            projectTitle="Random Color Generator"
            projectDesc="Made with vanilla JavaScript, CSS3, and HTML5. This app will generate random colors for graphic desingers"
          />
        </div>
      </div>
    </div>
  </div>


);

export default Projects;