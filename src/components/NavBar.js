import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./assets/logo.png";
import styles from "../styles/Nav.module.css"; 

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top" className={styles.NavBar}>
      <Container>
        <Navbar.Brand>
            <img src={logo} alt='logo' height="60"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link>
            <i className="fa-solid fa-house-user"></i>
            Home</Nav.Link>
            <Nav.Link><i className="fa-solid fa-users"></i>
            About Us
            </Nav.Link>
            <Nav.Link><i className="fa-solid fa-right-to-bracket"></i>
            Sign In
            </Nav.Link>
            <Nav.Link><i className="fa-solid fa-user-plus"></i>
            Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
