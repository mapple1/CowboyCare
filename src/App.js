import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Router } from 'react-router-dom';
import rout from './route.js';
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
                                <BrowserRouter>
                                    <rout />
                                </BrowserRouter>
                            </div>
                        </div>
                    </div>
                </div>
                    <Footer />
            </div>
        );
    }
}
