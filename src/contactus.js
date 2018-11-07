import React, { Component } from 'react';

export default class ContactUs extends Component {


//    <form action="https://formspree.io/your@email.com" method="POST">
//    <input type="text" name="name">
//        <input type="email" name="_replyto">
//            <input type="submit" value="Send">
//</form>
    render() {

        return (
            <form action="https://formspree.io/ContactCowboy.Care@gmail.com" method="post" enctype="text/plain">
                Name:<br/>
                    <input type="text" name="name" /><br />
                        E-mail:<br />
                            <input type="email" name="_replyto" /><br />
                                Comment:<br />
                                    <input type="text" name="message" size="50" /><br/><br/>
                                        <input type="submit" value="Send" />
                                            <input type="reset" value="Reset" />
            </form>
            );
    }
}