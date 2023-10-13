import React, {useContext} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./assets/logo.png";
import styles from "../styles/Nav.module.css";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext)
  const loggedInIcon = <>{}currentUser?.username</>
  const loggedOutIcon = (
  <>
    <NavLink 
      className={styles.NavbarLink}
      activeClassName={styles.Active}
      to="/signin">
    <i className="fa-solid fa-right-to-bracket"></i>
    Sign In
    </NavLink>
    <NavLink 
      className={styles.NavbarLink}
      activeClassName={styles.Active}
      to="/signup">
    <i className="fa-solid fa-user-plus"></i>
    Sign Up
    </NavLink>
  </>
  );
  
  return (
    <Navbar expand="md" fixed="top" className={styles.NavBar}>
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="60" />
          </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink 
                exact
                className={styles.NavbarLink}
                activeClassName={styles.Active}
                to="/">
              <i className="fa-solid fa-house-user"></i>
              Home
            </NavLink>
            <NavLink 
                className={styles.NavbarLink}
                activeClassName={styles.Active}
                to="/aboutus">
              <i className="fa-solid fa-users"></i>
              About Us
            </NavLink>
            {currentUser ? loggedInIcon : loggedOutIcon}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
