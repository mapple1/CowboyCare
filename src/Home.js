import React, { Component } from 'react';
import './index.css';


export default class Home extends Component {
    //<img className="horse" src="horse.jpg" />
    //<NewHead />
    render() {

        return (
            <div className="container">
                <img className="horse" src="horse.jpg" />
                <p style={{ backgroundColor: "white", marginLeft: "10%", marginRight: "10%" }}>
                    Welcome to Cowboy Care of Wyoming! To inquire about our services please
                    visit <a style={{ textDecoration: "none", color: "black" }} href="https://cowboy-care.netlify.com/#/services"> here</a>
                </p>
            </div>
            );
    }
}