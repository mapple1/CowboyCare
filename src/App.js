import React, { Component } from 'react';
import Home from './Home';
import { HashRouter, Router } from 'react-router-dom';
import routing from './route.js';
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

    //<div className="header"></div>
    displayName = App.name

    render() {

        return (
            <div>
                <Router history={HashRouter}>
            <div className="BodyBackground">
                    <div className="wrapper">
                        <div className="margin"><NewHead />
                            <div className="Body">
                                <routing />
                            </div>
                        </div>
                    </div>
                </div>
                    <Footer />
                </Router>
            </div>
        );
    }
}
