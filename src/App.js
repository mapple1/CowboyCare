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

    //<div className="header"></div>
    displayName = App.name

    render() {

        return (
            <div className="BodyBackground">
                <div>
                    <a className="header" href="/"><img className="Logo" src="logo.png" /></a>
                    <div className="wrapper">
                        
                        <div className="margin" /><NewHead />
                        <div className="Body">
                            <Home />
                        </div>
                    </div>
            </div>

            <Footer />
            </div>
        );
    }
}
