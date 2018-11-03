import React, { Component } from 'react';
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
        const render;

        if (this.state.view === "Home") {
            render = <Home />;
        }
        else {
            render = "Try Again";
        }

        return (
            <div className="BodyBackground">
                <div className="header">Header</div>
                <div className="wrapper">
                    <div className="Body">{render}</div>
                </div>
                <div className="Footer">Footer</div>
            </div>
        );
    }
}
