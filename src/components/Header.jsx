import React from "react";
import { NavLink } from "react-router-dom";

// Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <NavLink to="/"><Navbar.Brand href="#home">Dylan Barber</Navbar.Brand></NavLink>
    <Nav className="mr-auto">
      <Nav.Link><NavLink activeClassName="active" to="/aboutme">About Me</NavLink></Nav.Link>
      <Nav.Link><NavLink activeClassName="active" to="/projects">Projects</NavLink></Nav.Link>
      <Nav.Link><NavLink activeClassName="active" to="/experience">Experience</NavLink></Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;