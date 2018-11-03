import React, { Component } from 'react';
import Home from './Home';
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
        const rend = <Home />;

        if (this.state.view === "Home") {
            rend = <Home />;
            return rend;
        }
        else {
            rend = "Try Again";
            return rend;
        }

        return (
            <div className="BodyBackground">
                <div className="header">Header</div>
                <div className="wrapper">
                    <div className="Body">{rend}</div>
                </div>
                <div className="Footer">Footer</div>
            </div>
        );
    }
}
