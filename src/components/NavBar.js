import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./assets/logo.png";
import styles from "../styles/Nav.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
const NavBar = () => {
  const currentUser = useCurrentUser();

  const postIcon = (
    <NavLink 
      className={styles.NavbarLink}
      activeClassName={styles.Active}
      to="/posts/create"
    >
    <i class="fa-solid fa-square-plus"></i>
    Add post
    </NavLink>
  )

  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/feed"
      >
        <i className="fas fa-stream"></i>Feed
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/liked"
      >
        <i className="fas fa-heart"></i>Liked
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
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
        {currentUser && postIcon}
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