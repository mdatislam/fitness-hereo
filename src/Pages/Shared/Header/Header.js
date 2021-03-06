import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user]= useAuthState(auth)
  const handleSignOut=()=>{
    signOut(auth)
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
        <Container>
          <Navbar.Brand  as={Link} to='/'>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id="Programs" as={Link}to="Home#Programs">Programs</Nav.Link>
              <Nav.Link href="#Trainer">Trainer</Nav.Link>
              <Nav.Link  as={Link} to='/Blog'>Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link  as={Link} to='/About'>About</Nav.Link>
              {
                user? 
                <button onClick={handleSignOut} className="btn btn-warning">Sign-Out</button>
                :
                <Nav.Link eventKey={2} as={Link} to='/Login'>
                Login
              </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
