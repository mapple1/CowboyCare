import React, { Component } from 'react';
import './index.css';

export default class App extends Component {
    displayName = App.name
    render() {
        return (
            <div className="BodyBackground">
                <div className="header">Header</div>
                <div className="wrapper">
                    <div className="Body">Body</div>
                </div>
                <div className="Footer">Footer</div>
            </div>
        );
    }
}
