import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand  as={Link} to='/'>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Packages">Packages</Nav.Link>
              <Nav.Link href="#Trainer">Trainer</Nav.Link>
              <Nav.Link  as={Link} to='/Blog'>Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link  as={Link} to='/About'>About</Nav.Link>
              <Nav.Link eventKey={2} as={Link} to='/Login'>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
