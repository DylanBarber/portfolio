//Depenedencies
import React from "react";

//Bootstrap 
import Button from 'react-bootstrap/Button'; 

const AboutMe = () => (
  <div className="container">
    <div className="content">
      <img alt="Dylan Barber - Full Stack Developer" className="aboutMePicture" src="./lib/img/dylanBarberPic.png" /> 
      <h1>Dylan Barber</h1>
      <p className="aboutMeText">I am a Full Stack Software Developer in Detroit, Michigan. I have experience in Javascript, Node JS, React JS, Electron JS, test driven development using Chai and Mocha JS, and many more technologies.
      Below you can download my resume which outlines my 3 years experience in the IT field ranging from the beginning at help desk, to network
      engineering, and ending up currently in software engineering. I have been almost entirely self taught through my career and have an optimistic progressive
      attitude at self development that helps me learn new technology concepts everyday to better my work. I currently work at Road to Hire in Detroit, MI where
      I utilize my knowledge in JS and various frameworks to create web apps and API's to support their data.
      </p>
      <Button className='downloadBtn' href='./files/DylanBarberResume.docx' variant="dark" download>Download Resume</Button>
    </div>
  </div>
)

export default AboutMe; 