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
                    fontFamily: "Tahoma, Geneva, sans-serif", width: "80%"
                }}>
                    <h3 style={{
                        color: "#0066cc", fontFamily: "Georgia, serif" }}>Customized Care to Fit Your Needs</h3>
                    At Cowboy Care, our goal is to provide our valued clients with a wonderful alternative to an
                    assisted living environment, and we accomplish our goal by offering you customized home 
                    care services. We're committed to quality, because we care. Our caregivers are carefully
                    selected so that you receive excellent care in your home. Extensive national background 
                    checks are performed on new employees. We often participate in continuing education 
                    programs. You can rest assured that only qualified professionals will be serving your needs 
                    at home. A few of the services we provide to seniors include:<br />
                    <ul style={{
                        textAlign: "left"
                    }}>
                        <li>24-hour care</li>
                        <li>Flexible hourly care</li>
                        <li>Care management</li>
                        <li>Recovery assistance (illness, surgical, orthopedic)</li>
                        <li>Personal assistance (hygiene and dressing)</li>
                        <li>Errands and transportation</li>
                        <li>Meal planning and preparation</li>
                        <li>Light housekeeping</li>
                        <li>Companionship</li>
                        <li>Respite for caregivers</li>
                    </ul>
                    With the compassionate home care services available to you through Cowboy Care, you can 
                    easily enjoy a comfortable life inside your home. We'll give you the support you need for all
                    your daily activities, so call us today to learn more about our customizable care plans. 
                </p>
            </div>
            );
    }
}