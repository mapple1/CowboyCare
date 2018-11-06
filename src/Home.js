import React, { Component } from 'react';
import Navbar from './navbar';
import './index.css';


export default class Home extends Component {

    render() {

        return (
            <div>
                <img className="horse" src="horse.jpg" />
                <Navbar />
            </div>
            );
    }
}