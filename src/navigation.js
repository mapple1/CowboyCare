import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Navigation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toggle: false
        };
    }

    onHover() {
        this.setState({ toggle: true });
    }

    onLeave() {
        this.setState({ toggle: false });
    }

                                //<div className="dropdown-divider"></div>
//    <form className="form-inline my-2 my-lg-0">
//    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//</form>
    render() {
        return (
            <nav id="navigation" className="navbar navbar-expand-xl navbar-light bg-light">
                
                <button id="button-toggle" style={{ color: "white", fontWeight: "bold" }} className="navbar-toggler" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={this.state.toggle}>
                    <span className="navbar-toggler-icon"></span>Menu
                </button>

                <div className="collapse navbar-collapse" data-pa id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" id="basic-nav-dropdownnav">
                        <li id="basic-nav-dropdown" className="nav-item active">
                            <Link className="nav-link" style={{ color: "white", fontWeight: "bold"  }} to="/">Home</Link>
                        </li>
                        <li id="basic-nav-dropdown" className="nav-item active">
                            <Link className="nav-link" style={{ color: "white", fontWeight: "bold"  }} to="/services">Services</Link>
                        </li>
                        <li id="basic-nav-dropdownFreq" className="nav-item active">
                            <Link className="nav-link" style={{ color: "white", fontWeight: "bold"  }} to="/">Frequently Asked Questions</Link>
                        </li>
                        <li className="nav-item dropdown active" id="basic-nav-dropdown">
                            <Link className="nav-link dropdown-toggle" style={{ color: "white", fontWeight: "bold"  }} to="/aboutus"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About Us
                             </Link>
                            <div className="dropdown-menu" aria-labelledby="basic-nav-dropdown">
                                <Link id="menuItem" className="dropdown-item" style={{ color: "white", fontWeight: "bold" }} to="/aboutus">Our Stories</Link>
                                <Link id="menuItem" className="dropdown-item" style={{ color: "white", fontWeight: "bold" }} to="/">Our Care Specialists</Link>
                            </div>
                        </li>
                        <li id="basic-nav-dropdown" className="nav-item active">
                            <Link className="nav-link" style={{ color: "white", fontWeight: "bold"  }} to="/contact">Contact Us</Link>
                        </li><span className="corner-left" />
                <span className="corner-right" />
                    </ul>
                </div>
                
            </nav>
        )
    }
}

export default Navigation;