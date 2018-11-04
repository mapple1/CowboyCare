import React, { Component } from 'react';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import './index.css';


export default class Header extends Component {

    render() {

        return (
            <div className="header">
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                            <div className="Logo" />
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                    <div className="home">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Home</a>
                    </div>
                            </div>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                <div className="home">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Services</a>
                    </div>
                            </div>
                        </NavItem>
                            <NavItem eventKey={3} href="#">
                <div className="freq">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Frequently Asked Questions</a>
                    </div>
                            </div>
                        </NavItem>
                        <div className="home">
                            <div className="Absolute-Center">
                        <NavDropDown eventKey={4} title="About Us" href="#">
                            <menuitem eventKey={4.1}>Our Story</menuitem>
                            <menuitem eventKey={4.2}>Our Care Specialists</menuitem>
                            <menuitem eventKey={4.3}>Something Else</menuitem>
                        </NavDropDown>
                        </div>
                        </div>
                            <NavItem eventKey={3} href="#">
                <div className="home">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Contact Us</a>
                    </div>
                                </div>
                        </NavItem>
                    </Nav>
            </Navbar>
                        </div>
            );
    }
}