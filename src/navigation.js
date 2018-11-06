import React from 'react';
import './index.css';
import './navi.css';

class Navigation extends React.Component {

                                //<div className="dropdown-divider"></div>
//    <form className="form-inline my-2 my-lg-0">
//    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//</form>
    render() {
        return (
            <nav id="navigation" className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/"><img className="Logo" src="logo.png" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">Menu</span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" id="basic-nav-dropdownnav">
                        <li id="basic-nav-dropdown" className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li id="basic-nav-dropdown" className="nav-item">
                            <a className="nav-link" href="/">Services</a>
                        </li>
                        <li id="basic-nav-dropdownFreq" className="nav-item">
                            <a className="nav-link" href="/">Frequently Asked Questions</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="basic-nav-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About Us
                             </a>
                            <div className="dropdown-menu" aria-labelledby="basic-nav-dropdown">
                                <a id="menuItem" className="dropdown-item" href="/">Our Story</a>
                                <a id="menuItem" className="dropdown-item" href="/">Our Care Specialists</a>
                                <a id="menuItem" className="dropdown-item" href="/">Something else</a>
                            </div>
                        </li>
                        <li id="basic-nav-dropdown" className="nav-item">
                            <a className="nav-link" href="/">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <span className="corner-left" />
                <span className="corner-right" />
            </nav>
        )
    }
}

export default Navigation;