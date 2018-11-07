import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Router, HashRouter } from 'react-router-dom';
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

    //<div className="header"></div><NewHead />
    displayName = App.name

    render() {

        return (
            <div>
            <div className="BodyBackground">
                    <div className="wrapper">
                        <div className="margin">
                            <div className="Body">
                                <HashRouter>
                                    <Rout />
                                </HashRouter>
                            </div>
                        </div>
                    </div>
                </div>
                    <Footer />
            </div>
        );
    }
}
