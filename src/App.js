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
            view: "Home"
        };
    }

    //<div className="header"></div><Footer />
    displayName = App.name

    render() {

        return (
            <div>
            <div className="BodyBackground">
                    <div className="wrapper">
                        <HashRouter>
                            <div className="margin">
                                <div><Link className="navbar-brand" to="/"><img className="Logo" src="logo.png" /></Link></div>
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
