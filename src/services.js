import React, { Component } from 'react';
import Map from './map';
import './index.css';

export default class Services extends Component {


    render() {

        return (
            <div className="container">
                <img className="horse" src="backgroundimg2.jpg" />
                <Map />
            </div>
            );
    }

}