import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Router, HashRouter, Link } from 'react-router-dom';
import Rout from './route';
import Footer from './Footer';
import NewHead from './navigation.js';
import './index.css';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            view: "Home",
            value: ""
        };
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({ value: event.target.value });
    }

    //<div className="header"></div><Footer />

    
//                                    <div className="web-search">
//    <form method="get" id="searchForm" action="https://cowboy-care.netlify.com/#/">
//        <input type="search" onChange={this.handleChange.bind(this)} className="searchfield" placeholder="Search Here" value={this.state.value}
//            name="s" title="Search for:" />
//        <input type="submit" id="searchsubmit" value="Go" />
//    </form>
//</div>
    displayName = App.name

    render() {

        return (
            <div>
            <div className="BodyBackground">
                    <div className="wrapper">
                        <HashRouter>
                            <div className="margin">
                                <div className="site-info">
                                    <div id="navigation2">
                                        <Link className="navbar-brand" to="/"><img className="Logo" src="logo.png" /></Link>
                                        <Link className="navbar-brand" to="/contact" style={{right: "10px"}}><p style={{ backgroundColor: "white" }}>Cowboy Care LLC<br />1560 Johnston Street<br />Wheatland, WY 82201<br /><br />307-269-0655</p></Link>
                                    </div>
                                </div>
                                <NewHead />
                            <div className="Body">
                                    <Rout />
                            </div>
                        </div>
                        </HashRouter>
                    </div>
                </div>
            </div>
        );
    }
}
