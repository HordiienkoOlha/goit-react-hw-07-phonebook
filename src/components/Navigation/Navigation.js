import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { ImAddressBook } from 'react-icons/im';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link
              // size="lg" type="text"
              // exact="true"
              to="/"
            >
              <ImAddressBook />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand className="ms-5">
              <NavLink
                // size="lg" type="text"
                exact="true"
                to="/"
                className={({ isActive }) =>
                  isActive ? styles['active-link'] : styles.link
                }
              >
                User
              </NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
              <NavLink
                // size="lg" type="text"
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? styles['active-link'] : styles.link
                }
              >
                Contacts
              </NavLink>
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
