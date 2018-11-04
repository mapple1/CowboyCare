import React, { Component } from 'react';
import { NavDropdown, Nav, Navbar, NavItem } from 'react-bootstrap';
import './index.css';


export default class Header extends Component {

    render() {

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                            <div className="Logo" />
                        </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Home
                        </NavItem>
                        <NavItem eventKey={2} href="#">Services
                        </NavItem>
                            <NavItem eventKey={3} href="#">Frequently Asked Questions
                        </NavItem>
                            <NavDropdown eventKey={4} title="About Us">
                            <menuitem eventKey={4.1}>Our Story</menuitem>
                            <menuitem eventKey={4.2}>Our Care Specialists</menuitem>
                            <menuitem eventKey={4.3}>Something Else</menuitem>
                        </NavDropdown>
                        <NavItem eventKey={5} href="#">Contact Us
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            );
    }
}