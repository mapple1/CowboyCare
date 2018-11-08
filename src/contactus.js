import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import './form-submission-handler';

export default class ContactUs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showThankYou: false,
            Message: ""
        };
    }

    keyPress = event => {
        event.preventDefault();
        //this.props.Mess.typingRequest();
        if (event.keyCode === 13) {
            const messageEnter = event.target.value;// + "\n"
            this.setState({ Message: messageEnter });
        }
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({ Message: event.target.value, [event.target.id]: event.target.value });
    }

    onClick() {

        setTimeout(function () {
            this.setState({ showThankYou: true });
        }.bind(this), 100);

        //this.setState({ showThankYou: true });
        //<input id="message" style={{ width: "75%", height: "auto" }} type="text" name="message" size="50" />
    }

    ResetForm() {
        this.setState({ Message: "" });
    }

    render() {

        const form = (<form onKeyUp={this.keyPress.bind(this)} class="gform" id="gform" action="https://script.google.com/macros/s/AKfycbzKFmQj6wcYnNpRU-ehrnoA7ZLGrm5bJX65AhPLXnjPdw7vauzs/exec" method="post" enctype="text/plain"
            style={{
                borderRadius: "15px", padding: "36px 0px 36px 36px", backgroundColor: "white",
                marginLeft: "5%", marginRight: "5%", fontFamily: "Tahoma, Geneva, sans-serif"
            }}>
            Name:<br />
            <input id="name" type="text" name="name" onKeyPress={e => {
                if (e.key === 'Enter') e.preventDefault();
            }} /><br />
            E-mail:<br />
            <input id="email" type="text" name="email" onKeyPress={e => {
                if (e.key === 'Enter') e.preventDefault();
            }} /><br />
            Comment:<br />
            <Textarea id="message" name="message" value={this.state.Message} className="text" onChange={this.handleChange.bind(this)} onKeyUp={this.keyPress.bind(this)} /><br /><br />
            <input type="submit" value="Send" onClick={this.onClick.bind(this)} />
            <input type="reset" value="Reset" onClick={this.ResetForm.bind(this)} />
        </form>);

        const thanks = (<h3 style={{backgroundColor: "white"}}>Thank you for submitting your request. A member of our staff will contact you.</h3>)

        return (
            <div className="container" style={{ marginTop: "10%" }}>
                {this.state.showThankYou ? thanks : form}
                </div>
            );
    }
}