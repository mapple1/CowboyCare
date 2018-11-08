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
                <Link className="navbar-brand" to="/"><img className="Logo" src="logo.png" /></Link>
                <button id="button-toggle" className="navbar-toggler" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={this.state.toggle}>
                    <span className="navbar-toggler-icon"></span><h5 style={{color: "white"}}>Menu</h5>
                </button>

                <div className="collapse navbar-collapse" data-pa id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" id="basic-nav-dropdownnav">
                        <li id="basic-nav-dropdown" className="nav-item active">
                            <Link className="nav-link" to="/"><h5 style={{ color: "white" }}>Home</h5></Link>
                        </li>
                        <li id="basic-nav-dropdown" className="nav-item active">
                            <Link className="nav-link" to="/services"><h5 style={{ color: "white" }}>Services</h5></Link>
                        </li>
                        <li id="basic-nav-dropdownFreq" className="nav-item active">
                            <a className="nav-link" href="/"><h5 style={{ color: "white" }}>Frequently Asked Questions</h5></a>
                        </li>
                        <li className="nav-item dropdown active" id="basic-nav-dropdown">
                            <a className="nav-link dropdown-toggle" href="/"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <h5 style={{ color: "white" }}>About Us</h5>
                             </a>
                            <div className="dropdown-menu" aria-labelledby="basic-nav-dropdown">
                                <a id="menuItem" className="dropdown-item" href="/"><h5 style={{color: "white"}}>Our Story</h5></a>
                                <a id="menuItem" className="dropdown-item" href="/"><h5 style={{color: "white"}}>Our Care Specialists</h5></a>
                                <a id="menuItem" className="dropdown-item" href="/"><h5 style={{ color: "white" }}>Something else</h5></a>
                            </div>
                        </li>
                        <li id="basic-nav-dropdown" className="nav-item active">
                            <Link className="nav-link" to="/contact"><h5 style={{ color: "white" }}>Contact Us</h5></Link>
                        </li><span className="corner-left" />
                <span className="corner-right" />
                    </ul>
                </div>
                
            </nav>
        )
    }
}

export default Navigation;