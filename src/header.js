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
            <Navbar defaultNavExpanded fluid style={{
                fluid: "true",
                right: "15%",
                height: "25%",
                width: "80%",
                position: "absolute",
                alignContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
                flexDirection: "row",
                padding: "0",
                listStyle: "none",
                margin: "none",
                marginBlockStart: "0",
                marginBlockEnd: "0",
                border: "none"
            }} collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                            <div className="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav justified style={{ display: "flex", flexDirection: "row", listStyle: "none", padding: "0", margin: "none", marginBlockStart: "0", marginBlockEnd: "0",  border: "none" }} bsStyle="tabs" activeKey="1">
                        <NavItem style={{
                            marginBlockStart: "0", marginBlockEnd: "0"
                        }} eventKey={1} >
                            <div className="home left">
                                <span className="corner-left" />
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
                        <NavDropdown className="dropdown Absolute-Center" style={{
                            listStyle: "none",
                            textDecoration: "none",
                            color: "black",
                            textAlign: "center",
                            verticalAlign: "middle",
                            alignContent: "center",
                            width: "100px"
                        }}
                            title = "About Us" eventKey={ 4} id="basic-nav-dropdown" >
                            <MenuItem className="menuItem" eventKey={4.1}><div className="Absolute-Center"><a href="#" className="anchor">Our Story</a></div></MenuItem >
                            <MenuItem className="menuItem" eventKey={4.2}><div className="Absolute-Center"><a href="#" className="anchor">Our Care Specialists</a></div></MenuItem >
                            <MenuItem className="menuItem" eventKey={4.3}><div className="Absolute-Center"><a href="#" className="anchor">Something Else</a></div></MenuItem >
                            </NavDropdown>
                        <NavItem style={{
                            marginBlockStart: "0", marginBlockEnd: "0"
                        }} eventKey={5}>
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