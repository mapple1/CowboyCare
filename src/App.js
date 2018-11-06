import React, { Component } from 'react';
import Home from './Home';
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

    displayName = App.name

    render() {

        return (
            <div className="BodyBackground">
                <div><div className="header"><NewHead /></div>
                    <div className="wrapper">
                        <div className="margin"/>
                        <div className="Body"><Home /></div>
                    </div>
            </div>

            <Footer />
            </div>
        );
    }
}
