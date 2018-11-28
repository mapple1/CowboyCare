import React, { Component } from 'react';
import './index.css';


export default class Home extends Component {
    //<img className="horse" src="horse.jpg" />
    //<NewHead />
    render() {

        return (
            <div className="container">
                <img className="horse" src="horse.jpg" />
                <p className="para" style={{
                    borderRadius: "0px 0px 15px 15px",
                    alignContent: "center", textAlign: "center", padding: "36px 18px 36px 18px",
                    marginLeft: "13%", marginRight: "5%", fontFamily: "Tahoma, Geneva, sans-serif", width: "80%"
                }}>
                    <h3 style={{
                        color: "#0066cc", fontFamily: "Georgia, serif" }}>Welcome to Cowboy Care</h3>
                    Cowboy Care is the only locally owned and managed home care agency in Platte County, Wyoming.
                    We serve the residents of Platte County and beyond and we are proud to call this area home.
                    Cowboy Care is not a franchise or part of a chain. The owners are local residents and our
                    caregivers are your neighbors who care about you. You can rely on Cowboy Care for responsive,
                    compassionate and thorough care for your current and future needs. Make us your first choice
                    and you will be glad you did every step of the way.<br />
                    <b>Our Mission:</b><br />
                    Improve the quality of life for those in our community we serve through the delivery of 
                    extraordinary service and compassionate care, while being recognized for building lasting 
                    client/care giver relationships. <br />
                    <b>Our Vision:</b><br />
                </p>
            </div>
            );
    }
}