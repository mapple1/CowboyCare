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
                    marginLeft: "5%", marginRight: "5%", fontFamily: "Tahoma, Geneva, sans-serif", width: "80%"
                }}>
                    <h3 style={{
                        color: "#0066cc", fontFamily: "Georgia, serif" }}>Welcome to Cowboy Care</h3>
                    Cowboy Care is the only locally owned and managed home care agency in Platte County, Wyoming.
                    We serve the residents of Platte County and beyond and we are proud to call this area home.
                    Cowboy Care is not a franchise or part of a chain. The owners are local residents and our
                    caregivers are your neighbors who care about you. You can rely on Cowboy DCare for responsive,
                    compassionate and thorough care for your current and future needs. Make us your first choice
                    and you will be glad you did every step of the way.<br />
                    <b>Our Mission:</b><br />
                    Improve the quality of life for those in our community we serve through the delivery of 
                    extraordinary service and compassionate care, while being recognized for building lasting 
                    client/care giver relationships. <br />
                    <b>Our Vision:</b><br />
                    <h3 style={{
                        color: "#0066cc", fontFamily: "Georgia, serif"
                    }}>Why Choose Cowboy Care?</h3>
                    We know you have a choice when it comes to who will take care of you or a loved one.
                    You can rest assured you are making the best choice by choosing Cowboy Care because:<br />
                    <ul style={{
                        textAlign: "left"
                    }}>
                        <li><b>We require our aides to be certified:</b> Each one of our compassionate and professional
                            caregivers is a licensed CNA or is in the process of certification, which stands for certified 
                            nursing assistant. This means each aide received state-approved training and is now or will 
                            be licensed. He or she is dedicated to providing the highest quality of care and sought the 
                            education to ensure just that.</li>
                        <li><b>Round-the-clock care:</b> We can provide care 24 hours a day 7 days a week, including holidays
                            and weekends.</li>
                        <li><b>Flexible scheduling and low minimums:</b> Most agencies require large amounts of time be
                            scheduled. Cowboy Care has a two-hour minimum visit time so that you aren’t stuck paying for
                            more than what you really need and want.</li>
                        <li><b>We’re local:</b> Cowboy Care is locally owned and operated. We are not part of a chain or
                            a franchise.</li>
                        <li><b>We listen to you:</b> We listen to you with an open heart and mind then make recommendations
                            based on feedback from you and your family.</li>
                        <li><b>We’re here for you:</b> We want to serve you and your family. We share your cares and concerns
                            and we will make every effort to meet your needs while working within your schedule and budget.</li>
                    </ul><br/>
                    <b>The differences between home health services and private duty services:</b><br />
                    <table style={{ width: "100%" }}>
                        <tr>
                            <th>Cowboy Care Home Care at a glance</th>
                            <th>Home Health-Skilled Care</th>
                            <th>Cowboy Home Care</th>
                        </tr>
                        <tr>
                            <td>Client required to be homebound</td>
                            <td>Yes</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>Visit time and length client driven</td>
                            <td>No</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Agency will bill medical insurance</td>
                            <td>Yes</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>Agency will bill long term policy</td>
                            <td>No</td>
                            <td>Yes (if applicable)</td>
                        </tr>
                        <tr>
                            <td>Agency will bill client privately</td>
                            <td>Yes(if no insurance)</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Must have Doctor’s orders for care</td>
                            <td>Yes</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>Require skills of RN or physical Therapy</td>
                            <td>Yes</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>Personal care services and assistance with activities of daily living not
                                related to medical treatment of client’s illness or injury</td>
                            <td>NO</td>
                            <td>YES</td>
                        </tr>
                    </table>
                </p>
            </div>
            );
    }
}