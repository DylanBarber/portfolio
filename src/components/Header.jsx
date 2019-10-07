import React from 'react';

// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Dylan Barber</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">About Me</Nav.Link>
      <Nav.Link href="#features">Projects</Nav.Link>
      <Nav.Link href="#pricing">Experience</Nav.Link>
    </Nav>
  </Navbar>
)

export default Header;