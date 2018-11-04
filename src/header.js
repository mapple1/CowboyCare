import React, { Component } from 'react';
import './index.css';


export default class Header extends Component {

    render() {

        return (
            <div className="header">
                <div className="Logo" /> <div className="home"><a className="anchor">Home</a></div>
            </div>
            );
    }
}