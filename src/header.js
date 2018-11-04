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
                        <NavItem eventKey={1}>
                    <div className="home">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Home</a>
                    </div>
                            </div>
                        </NavItem>
                        <NavItem eventKey={2}>
                <div className="home">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Services</a>
                    </div>
                            </div>
                        </NavItem>
                            <NavItem eventKey={3}>
                <div className="freq">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Frequently Asked Questions</a>
                    </div>
                            </div>
                        </NavItem>
                        <div className="home">
                            <div className="Absolute-Center">
                            <NavDropdown eventKey={4} title="About Us">
                            <menuitem eventKey={4.1}>Our Story</menuitem>
                            <menuitem eventKey={4.2}>Our Care Specialists</menuitem>
                            <menuitem eventKey={4.3}>Something Else</menuitem>
                                </NavDropdown>
                        </div>
                        </div>
                            <NavItem eventKey={5}>
                <div className="home">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Contact Us</a>
                    </div>
                                </div>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            );
    }
}