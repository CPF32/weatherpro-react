import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="dark" variant="dark" expand="xl">
    <Navbar.Brand>
      WeatherPro
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ display: user ? 'initial' : 'none' }}/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2"></span>}
        { user ? authenticatedOptions : null}

      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
