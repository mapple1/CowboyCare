import React, { Component } from 'react';
import * as utils from './form-submission-handler';

export default class ContactUs extends Component {

    render() {

        return (
            <div className="container" style={{ marginTop: "10%" }}>
                <form class="gform" id="gform" action="https://script.google.com/macros/s/AKfycbzKFmQj6wcYnNpRU-ehrnoA7ZLGrm5bJX65AhPLXnjPdw7vauzs/exec" method="post" enctype="text/plain" >
                Name:<br/>
                    <input id="name" type="text" name="name" /><br />
                        E-mail:<br />
                            <input id="email" type="text" name="email" /><br />
                                Comment:<br />
                                    <input id="message" type="text" name="message" size="50" /><br/><br/>
                                        <input type="submit" value="Send" />
                                            <input type="reset" value="Reset" />
                </form>
                </div>
            );
    }
}