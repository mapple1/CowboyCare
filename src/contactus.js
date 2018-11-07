import React, { Component } from 'react';

export default class ContactUs extends Component {

    render() {

        return (
            <form id="gform" action="https://script.google.com/macros/s/AKfycbzVyix1XCoaByGvqxz5DqcUtH_nvb__90okXCtWpA/exec" method="post" enctype="text/plain">
                Name:<br/>
                    <input type="text" name="name" /><br />
                        E-mail:<br />
                            <input type="text" name="email" /><br />
                                Comment:<br />
                                    <input type="text" name="message" size="50" /><br/><br/>
                                        <input type="submit" value="Send" />
                                            <input type="reset" value="Reset" />
            </form>
            );
    }
}