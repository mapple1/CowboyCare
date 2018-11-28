import React, { Component } from 'react';
import './index.css';

export default class About extends Component {


    render() {

        return (
            <div className="container">
                <table>
                    <tr>
                        <td>
                    <p className="para" style={{
                    borderRadius: "0px 0px 15px 15px",
                    alignContent: "center", textAlign: "center", padding: "36px 18px 36px 18px",
                    marginLeft: "13%", marginRight: "5%", fontFamily: "Tahoma, Geneva, sans-serif", width: "80%"
                    }}>
                    <h3 style={{
                        color: "#0066cc", fontFamily: "Georgia, serif"
                    }}>Michelle</h3>
                    My name is Michelle Baker, RN. I am firmly
                    rooted in the amazing town of Wheatland
                    Wyoming. In 2016, Cowboy Care was founded
                    with the Cowboy Code of Ethics in mind for the
                    sole purpose of providing care for those in need
                    of extra assistance in the home with their
                    activities of daily living. We are here to help
                    keep our family members in their homes for as
                    long as possible allowing them to be as
                    independent as they can be. The goal is to
                    provide the best care right here in Platte
                    County, Wyoming with a deep concern for our
                    community as well as the surrounding areas.
                    </p>
                        </td>
                        <td>
                            <p className="para" style={{
                                borderRadius: "0px 0px 15px 15px",
                                alignContent: "center", textAlign: "center", padding: "36px 18px 36px 18px",
                                marginLeft: "13%", marginRight: "5%", fontFamily: "Tahoma, Geneva, sans-serif", width: "80%"
                            }}>
                                <h3 style={{
                                    color: "#0066cc", fontFamily: "Georgia, serif"
                                }}>Kris</h3>
                                My name is Kris Loeffelbein, BSN, RN. In 2005,
                                my husband and I chose Wheatland, Wyoming
                                as our retirement home because of the obvious
                                amazing landscape, but more importantly the
                                amazing old fashioned cowboy culture. I am
                                proud to have crossed paths with Michelle. We
                                both have a deep desire to serve our
                                community and have identified a void in home
                                services for our community members. As a rural
                                community we have limited access to
                                resources. That is why we have partnered
                                together to form a strong partnership in
                                Cowboy Care to serve our community and
                                provide excellent care with the utmost integrity.
                    </p>
                        </td>
                        </tr>
                    </table>
            </div>
        );
    }

}