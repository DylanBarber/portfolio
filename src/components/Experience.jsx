//Components
import ExperienceCard from './ExperienceCard';

//Depenedencies
import React from 'react'

const Experience = () => (
  <div className='container'>
    <div className='content experienceContent'>
      <h1 className="experienceHeading">My Experience</h1>
      <div className='experienceCards'>
        <div className='experienceCardsRow'>
          <ExperienceCard
            experienceTitle="Full Stack Developer"
            experienceCompany="Road to Hire"
            experienceDesc="Utilizing HTML, SCSS, Bootstrap, and React JS to build front end web apps. 
            Using Node JS and Express to build API’s. Creating and manipulating databases with MySQL. 
            Practicing Test Driven Development with Mocha JS and Chai JS."
          />
          <ExperienceCard
            experienceTitle="Junior Network Engineer"
            experienceCompany="Thyssenkrupp System Engineering"
            experienceDesc="Executed software distribution through SCCM and Lansweeper.
            Utilized Group Policy to achieve security and ease of access for users. 
            Created and managed 3D printing services. Configured DHCP. Created PowerShell scripts to automate workflow. 
            Troubleshot and wired patch rooms. Used Hyper-V and VMware to manage servers and test environments."
          />
        </div>
        <div className='experienceCardsRow'>
          <ExperienceCard
            experienceTitle="Junior Network Engineer"
            experienceCompany="blueRock Technologies"
            experienceDesc="Managed domain controllers. Diagnosed and repaired server software and hardware (Windows Server Environments (2003-2012). 
            Managed satellite IT operations at ViSalus Inc. in Detroit, MI. Heavily documented IT processes for training and peer reference. Configured Office 365 environments."
          />
          <ExperienceCard
            experienceTitle="Service Desk Technician"
            experienceCompany="Data System Services LLC"
            experienceDesc="Recorded live phone calls into a conglomerate IT ticketing system. Reported on server statistics. Organized complex software development requests in a dedicated and precise manner. 
            Coordinated efforts to refurbish, repair, and report on IT-related company assets."
          />
        </div>
      </div>
    </div>
  </div>
)

export default Experience;