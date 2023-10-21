import React  from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/Nav.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser, } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";
import { NotificationManager } from 'react-notifications';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
      NotificationManager.info('Successfully logged out');
    } catch (err) {
    }
  };

  const postIcon = (
    <NavLink 
      className={styles.NavbarLink}
      activeClassName={styles.Active}
      to="/posts/create"
    > <i className="fa-solid fa-square-plus"></i>
    Add new Meal
    </NavLink>
  )
  
  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavbarLink}
        activeClassName={styles.Active}
        to="/feed"
      ><i className="fas fa-stream"></i>Feed
      </NavLink>
      
      <NavLink
        className={styles.NavbarLink}
        activeClassName={styles.Active}
        to="/items"
        ><i className="fa-solid fa-carrot"></i>Ingredients
      </NavLink>

      <NavLink
        className={styles.NavbarLink}
        activeClassName={styles.Active}
        to="/recipes"
        ><i className="fa-solid fa-utensils"></i>Recipes
      </NavLink>

      <NavLink
        className={styles.NavbarLink}
        activeClassName={styles.Active}
        to="/liked"
      ><i className="fas fa-heart"></i>Liked
      </NavLink>

      <NavLink className={styles.NavbarLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>

      <NavLink
        className={styles.NavbarLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text={currentUser?.username} height={40} />
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavbarLink}
        activeClassName={styles.Active}
        to="/signin"
      ><i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>

      <NavLink
        to="/signup"
        className={styles.NavbarLink}
        activeClassName={styles.Active}
      ><i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );
  
  return (
    <Navbar 
      expanded={expanded}
      expand="md" 
      fixed="top" 
      className={styles.NavBar}
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="60" />
          </Navbar.Brand>

        </NavLink>
        {currentUser && postIcon}
        <Navbar.Toggle
          ref = {ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav" />
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
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
