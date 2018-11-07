import React, { Component } from 'react';

export default class ContactUs extends Component {

    render() {

        return (
            <form action="mailto:ContactCowboy.Care@gmail.com" method="post" enctype="text/plain" >
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