import React, { Component } from 'react';
import { NavDropdown, Nav, Navbar, NavItem, MenuItem } from 'react-bootstrap';
import './index.css';


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
            <Navbar fixedTop style={{
                listStyle: "none"
            }} defaultNavExpanded fluid collapseOnSelect >
                <Navbar.Header>
                    <Navbar.Brand>
                            <div className="Logo" />
                    </Navbar.Brand>
                    </Navbar.Header>
                    <Nav justified bsStyle="tabs" activeKey="1">
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
                        <NavItem eventKey={3}>
                <div className="freq">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Frequently Asked Questions</a>
                    </div>
                            </div>
                        </NavItem>
                        <NavDropdown 
                            title="About Us" eventKey={4} id="basic-nav-dropdown" >
                            <MenuItem className="menuItem Absolute-Center" id="menuItem" eventKey={4.1}><a href="#" className="anchor1">Our Story</a></MenuItem >
                            <MenuItem className="menuItem Absolute-Center" id="menuItem" eventKey={4.2}><a href="#" className="anchor1">Our Care Specialists</a></MenuItem >
                            <MenuItem className="menuItem" id="menuItem" eventKey={4.3}><a href="#" className="anchor1">Something Else</a></MenuItem >
                            </NavDropdown>
                        <NavItem eventKey={5}>
                        <div className="home right">
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