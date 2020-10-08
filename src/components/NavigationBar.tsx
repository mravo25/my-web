import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark" className="navigation-bar">
            <Navbar.Brand href="#bio" className="navigation-bar_name">Marek Mravík</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#bio">Bio</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default NavigationBar;
