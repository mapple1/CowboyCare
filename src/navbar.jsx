import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

export default class NewHead extends React.Component {
    render() {
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#"> Test </a>
                    </Navbar.Brand>
                </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">Home</NavItem>
                        <NavItem eventKey={2} href="#">Home</NavItem>
                        <NavDropdown eventKey={3} title="Services" id="basic-dropdown">
                            <MenuItem eventKey={3.1}>Services 1 </MenuItem>
                            <MenuItem eventKey={3.2}>Services 2</MenuItem>
                        </NavDropdown>
                    </Nav>
            </Navbar>
        );
    }
}