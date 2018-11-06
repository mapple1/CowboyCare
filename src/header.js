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
            <Navbar fluid className="navbar-expand-lg" style={{
                listStyle: "none",
                textDecoration: "none"
            }} defaultNavExpanded collapseOnSelect >
                <Navbar.Header>
                    <Navbar.Brand>
                        <img className="Logo" src="logo.png" />
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav fluid style={{
                    listStyle: "none",
                    border: "none",
                    borderBottom: "none",
                    textDecoration: "none",
                    left: "0px",
                    position: "relative",
                    width: "100%"
                    }} bsStyle="tabs" activeKey="1">
                    <NavItem style={{
                        textDecoration: "none",
                        color: "black"
                    }} eventKey={1} >
                            <div className="left">
                                <span className="corner-left" />
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Home</a>
                    </div>
                            </div>
                        </NavItem>
                    <NavItem style={{
                        textDecoration: "none",
                        color: "black"
                    }} eventKey={2}>
                <div className="home">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Services</a>
                    </div>
                            </div>
                        </NavItem>
                    <NavItem style={{
                        textDecoration: "none",
                        color: "black"
                    }} eventKey={3}>
                <div className="freq">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Frequently Asked Questions</a>
                    </div>
                            </div>
                        </NavItem>
                    <NavDropdown style={{
                        textDecoration: "none",
                        color: "black"
                    }}
                        title="About Us" eventKey={4} id="basic-nav-dropdown" >
                            <MenuItem id="menuItem" eventKey={4.1}><a href="#" className="anchor1">Our Story</a></MenuItem >
                            <MenuItem id="menuItem" eventKey={4.2}><a href="#" className="anchor1">Our Care Specialists</a></MenuItem >
                            <MenuItem id="menuItem" eventKey={4.3}><a href="#" className="anchor1">Something Else</a></MenuItem >
                            </NavDropdown>
                    <NavItem style={{
                        textDecoration: "none",
                        color: "black"
                    }} eventKey={5}>
                        <div className="right">
                            <span className="corner-right" />
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Contact Us</a>
                    </div>
                                </div>
                        </NavItem>
                    </Nav>
            </Navbar>
            );
    }
}