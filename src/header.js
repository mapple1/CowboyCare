import React, { Component } from 'react';
import { NavDropdown, Nav, Navbar, NavItem, MenuItem } from 'react-bootstrap';
import './index.css';


export default class Header extends Component {

    render() {

        return (
            <div className="header">
                <Navbar justified bsStyle="tabs" style={{ display: "flex", flexDirection: "row", padding: "0", listStyle: "none", margin: "none", marginBlockStart: "0", marginBlockEnd: "0",  height: "100px", border: "none" }} staticTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                            <div className="Logo" />
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav justified style={{ display: "flex", flexDirection: "row", listStyle: "none", padding: "0", height: "100px", margin: "none", marginBlockStart: "0", marginBlockEnd: "0",  border: "none" }} bsStyle="tabs" activeKey="1">
                        <NavItem style={{
                            marginBlockStart: "0", marginBlockEnd: "0"
                        }} eventKey = { 1} >
                    <div className="home">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Home</a>
                    </div>
                            </div>
                        </NavItem>
                        <NavItem style={{
                            marginBlockStart: "0", marginBlockEnd: "0"
                        }} eventKey={2}>
                <div className="home">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Services</a>
                    </div>
                            </div>
                        </NavItem>
                        <NavItem style={{
                            marginBlockStart: "0", marginBlockEnd: "0"
                        }} eventKey={3}>
                <div className="freq">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Frequently Asked Questions</a>
                    </div>
                            </div>
                        </NavItem>
                        <div className="home">
                            <div className="Absolute-Center">
                                <NavItem style={{
                                    marginBlockStart: "0", marginBlockEnd: "0"
                                }} eventKey={4} className="dropdown" title="About Us" id="nav-dropdown">
                                    <div className="home Absolute-Center menuItem" eventKey={4.1}><a href="#" className="anchor">Our Story</a></div>
                                    <div className="home Absolute-Center menuItem" eventKey={4.2}><a href="#" className="anchor">Our Care Specialists</a></div>
                                    <div className="home Absolute-Center menuItem" eventKey={4.3}><a href="#" className="anchor">Something Else</a></div>
                                </NavItem>
                            </div>
                        </div>
                        <NavItem style={{
                            marginBlockStart: "0", marginBlockEnd: "0"
                        }} eventKey={5}>
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