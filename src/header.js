import React, { Component } from 'react';
import { NavDropdown, Nav, Navbar, NavItem, MenuItem } from 'react-bootstrap';
import './index.css';


export default class Header extends Component {

    render() {

        return (
            <div className="header">
                <Navbar justified bsStyle="tabs" style={{ display: "flex", flexDirection: "row", padding: "0", listStyle: "none", height: "100px", border: "none" }} staticTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                            <div className="Logo" />
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav justified style={{ display: "flex", flexDirection: "row", listStyle: "none", padding: "0", height: "100px", margin: "none", border: "none" }} bsStyle="tabs" activeKey="1">
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
                                <NavDropdown eventKey={4} className="anchor" title="About Us">
                                    <MenuItem eventKey={4.1}>Our Story</MenuItem>
                                    <MenuItem eventKey={4.2}>Our Care Specialists</MenuItem>
                                    <MenuItem eventKey={4.3}>Something Else</MenuItem>
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
            </Navbar>
                        </div>
            );
    }
}