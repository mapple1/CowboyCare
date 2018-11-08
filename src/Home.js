import React, { Component } from 'react';
import './index.css';


export default class Home extends Component {
    //<img className="horse" src="horse.jpg" />
    //<NewHead />
    render() {

        return (
            <div className="container">
                <img className="horse" src="horse.jpg" />
                <p style={{
                    alignContent: "center", textAlign: "center", padding:"padding: 36px 0px 36px 36px", backgroundColor: "white", marginLeft: "10%", marginRight: "10%" }}>
                    <h3 style={{
                        color: "#0066cc", fontFamily: "Georgia, serif" }}>Customized Care to Fit Your Needs</h3>
                    visit <a style={{ textDecoration: "none", color: "saddlebrown" }} href="https://cowboy-care.netlify.com/#/services"> here.</a>
                    <br />This is however just a test of what can be done for this site.
                    <br />If you have questions about how things look here please contact me.
                    <br />Otherwise this site was built for nothing.
                    <br />Trying to cause scroll with fixed footer
                    <br />Trying to cause scroll with fixed footer
                    <br />Trying to cause scroll with fixed footer
                    <br />Trying to cause scroll with fixed footer
                    <br />Trying to cause scroll with fixed footer
                    <br />Trying to cause scroll with fixed footer
                    <br />Trying to cause scroll with fixed footer
                    <br />Trying to cause scroll with fixed footer
                    <br />Trying to cause scroll with fixed footer
                    <br />Trying to cause scroll with fixed footer
                    <br />Trying to cause scroll with fixed footer
                </p>
            </div>
            );
    }
}