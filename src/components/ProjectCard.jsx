//Depenedencies
import React from 'react';

//Bootstrap
import Card from 'react-bootstrap/Card';

const ProjectCard = props => (
  <a href={props.projectLink}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.projectPic} />
      <Card.Body>
        <Card.Title>{props.projectTitle}</Card.Title>
        <Card.Text>{props.projectDesc}</Card.Text>
      </Card.Body>
    </Card>
  </a>
);

export default ProjectCard;