import React, { Component } from 'react';
import * as utils from './form-submission-handler';

export default class ContactUs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showThankYou: false
        };
    }


    onClick() {
        setTimeout(function () {
            this.setState({ showThankYou: true });
        }, 100);
    }

    render() {

        const form = (<form class="gform" id="gform" action="https://script.google.com/macros/s/AKfycbzKFmQj6wcYnNpRU-ehrnoA7ZLGrm5bJX65AhPLXnjPdw7vauzs/exec" method="post" enctype="text/plain" >
            Name:<br />
            <input id="name" type="text" name="name" /><br />
            E-mail:<br />
            <input id="email" type="text" name="email" /><br />
            Comment:<br />
            <input id="message" type="text" name="message" size="50" /><br /><br />
            <input type="submit" value="Send" onClick={this.onClick.bind(this)}/>
            <input type="reset" value="Reset" />
        </form>);

        const thanks = (<h3 style={{backgroundColor: "white"}}>Thank you for submitting your request. A member of out staff will contact you.</h3>)

        return (
            <div className="container" style={{ marginTop: "10%" }}>
                {this.state.showThankYou ? thanks : form}
                </div>
            );
    }
}