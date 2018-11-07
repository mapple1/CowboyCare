import React, { Component } from 'react';
import NewHead from './navigation.js';
import './index.css';


export default class Home extends Component {
    //<img className="horse" src="horse.jpg" />
    //<NewHead />
    render() {

        return (
            <div className="container">
                <img className="horse" src="horse.jpg" />
            </div>
            );
    }
}