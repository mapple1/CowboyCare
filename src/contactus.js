import React, { Component } from 'react';

export default class ContactUs extends Component {

    render() {

        return (
            <form action="https://script.google.com/macros/s/AKfycbzVyix1XCoaByGvqxz5DqcUtH_nvb__90okXCtWpA/exec" method="post" enctype="text/plain">
                Name:<br/>
                    <input type="text" name="name" /><br />
                        E-mail:<br />
                            <input type="text" name="mail" /><br />
                                Comment:<br />
                                    <input type="text" name="comment" size="50" /><br/><br/>
                                        <input type="submit" value="Send" />
                                            <input type="reset" value="Reset" />
            </form>
            );
    }
}