import React, { Component } from 'react';
import { NavDropdown, Nav, Navbar, NavItem, MenuItem } from 'react-bootstrap';
import './navi.css';


export default class Header extends Component {

//                                    <div><div className="home">
//    <div className="Absolute-Center"><a href="#" className="anchor">About Us</a>
//    </div></div>
//</div>
    
                    //<Navbar.Toggle />
                    //    <Navbar.Collapse>
                    //    </Navbar.Collapse>

    render() {

        return (
            <Navbar fluid id="navigation" className="navbar-expand-lg" style={{
                listStyle: "none",
                textDecoration: "none"
            }} defaultNavExpanded collapseOnSelect >
                <Navbar.Header>
                    <Navbar.Brand>
                        <img className="Logo" src="logo.png" />
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav  id="basic-nav-dropdownnav" fluid style={{
                    listStyle: "none",
                    textDecoration: "none",
                    left: "0px",
                    position: "relative",
                    width: "100%",
                    backgroundColor: "saddlebrown"
                    }} bsStyle="tabs" activeKey="1">
                    <NavItem id="basic-nav-dropdown" style={{
                        textDecoration: "none",
                        color: "black"
                    }} eventKey={1} >
                                <span className="corner-left" />
                        Home
                        </NavItem>
                    <NavItem id="basic-nav-dropdown" style={{
                        textDecoration: "none",
                        color: "black"
                    }} eventKey={2}>
                        Services
                        </NavItem>
                    <NavItem id="basic-nav-dropdownFreq" style={{
                        textDecoration: "none",
                        color: "black"
                    }} eventKey={3}>Frequently Asked Questions
                        </NavItem>
                    <NavDropdown style={{
                        textDecoration: "none",
                        color: "black"
                    }}
                        title="About Us" eventKey={4} id="basic-nav-dropdown" >
                            <MenuItem id="menuItem" eventKey={4.1}>Our Story</MenuItem >
                            <MenuItem id="menuItem" eventKey={4.2}>Our Care Specialists</MenuItem >
                            <MenuItem id="menuItem" eventKey={4.3}>Something Else</MenuItem >
                            </NavDropdown>
                    <NavItem id="basic-nav-dropdown" style={{
                        textDecoration: "none",
                        color: "black"
                    }} eventKey={5}>
                            Contact Us
                        </NavItem>
                    <span className="corner-right" />
                    </Nav>
            </Navbar>
            );
    }
}