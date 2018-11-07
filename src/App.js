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

    //<div className="header"></div><div className="margin" />
    displayName = App.name

    render() {

        return (
            <div className="BodyBackground">
                <NewHead />
                <div className="wrapper">
                        
                        <div className="Body">
                            <Home />
                        </div>
                    </div>

            <Footer />
            </div>
        );
    }
}
