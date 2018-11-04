import React, { Component } from 'react';
import './index.css';


export default class Header extends Component {

    render() {

        return (
            <div className="header">
                <div className="Logo" />
                    <div className="home">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Home</a>
                    </div>
                </div>
                <div className="home">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Services</a>
                    </div>
                </div>
                <div className="freq">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Frequently Asked Questions</a>
                    </div>
                </div>
                <div className="home">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">About Us</a>
                    </div>
                </div>
                <div className="home">
                    <div className="Absolute-Center">
                        <a href="#" className="anchor">Contact Us</a>
                    </div>
                </div>
            </div>
            );
    }
}