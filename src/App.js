import React, { Component } from 'react';
import Home from './Home';
import Head from './header';
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
            <div>
                <div className="BodyBackground"><Head />
                    <div className="wrapper">
                        <div className="margin"/>
                        <div className="Body"><Home /></div>
                </div>
                <div className="Footer">Footer</div>
                </div>
                </div>
        );
    }
}
