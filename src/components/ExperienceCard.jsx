//Depenedencies
import React from "react";

//Bootstrap
import Card from "react-bootstrap/Card";

const ExperienceCard = props => (
  <Card style={{ width: "18rem" }}>
    <Card.Body>
      <Card.Title>{props.experienceTitle}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{props.experienceCompany}</Card.Subtitle>
      <Card.Text>{props.experienceDesc}</Card.Text>
    </Card.Body>
  </Card>
);

export default ExperienceCard;