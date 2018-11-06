import React, { Component } from 'react';
import { NavDropdown, Nav, Navbar, NavItem, MenuItem } from 'react-bootstrap';
import * as ReactBoot from 'react-bootstrap';
import './index.css';


export default class Header extends Component {

//                                    <div><div className="home">
//    <div className="Absolute-Center"><a href="#" className="anchor">About Us</a>
//    </div></div>
//</div>

    render() {

        return (
            <Navbar defaultNavExpanded fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                            <div className="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav justified>
                        <NavItem eventKey={1} >
                            <div className="home left">
                                <span className="corner-left" />
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
                        <NavItem style={{
                            marginBlockStart: "0", marginBlockEnd: "0"
                        }} eventKey={3}>
                <div className="freq">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Frequently Asked Questions</a>
                    </div>
                            </div>
                        </NavItem>
                        <NavDropdown
                            title="About Us" eventKey={4} id="basic-nav-dropdown" >
                            <MenuItem id="menuItem" eventKey={4.1}><a href="#" className="anchor1">Our Story</a></MenuItem >
                            <MenuItem id="menuItem" eventKey={4.2}><a href="#" className="anchor1">Our Care Specialists</a></MenuItem >
                            <MenuItem id="menuItem" eventKey={4.3}><a href="#" className="anchor1">Something Else</a></MenuItem >
                            </NavDropdown>
                        <NavItem eventKey={5}>
                <div className="home">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Contact Us</a>
                    </div>
                                </div>
                        </NavItem>
                        <div className="filler right">
                            <span className="corner-right" />
                            </div>
                        </Nav>
                        </Navbar.Collapse>
            </Navbar>
            );
    }
}