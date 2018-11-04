import React, { Component } from 'react';
import { NavDropdown, Nav, Navbar, NavItem, MenuItem } from 'react-bootstrap';
import './index.css';


export default class Header extends Component {

    render() {

        return (
            <div className="header">
                <Navbar bsStyle="tabs" style={{ display: "flex", flexDirection: "row", listStyle: "none", height: "100px" }} staticTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                            <div className="Logo" />
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav style={{ display: "flex", flexDirection: "row", listStyle: "none" }} bsStyle="tabs" activeKey="1">
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
                                <NavDropdown eventKey={4} className="anchor" title="About Us">
                                    <MenuItem eventKey={4.1}>Our Story</MenuItem>
                                    <MenuItem eventKey={4.2}>Our Care Specialists</MenuItem>
                                    <MenuItem eventKey={4.3}>Something Else</MenuItem>
                                </NavDropdown>
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