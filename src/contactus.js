import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import './form-submission-handler';

export default class ContactUs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showThankYou: false,
            Message: "",
            name: "",
            email: ""
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

    validateForm() {
        return this.state.name.length > 0 && this.state.email.length > 0;
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({ Message: event.target.value, [event.target.id]: event.target.value });
    }
    handleName = event => {
        event.preventDefault();
        this.setState({ name: event.target.value, [event.target.id]: event.target.value });
    }
    handleEmail = event => {
        event.preventDefault();
        this.setState({ email: event.target.value, [event.target.id]: event.target.value });
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

        const form = (
            <div><p id="address" style={{ color: "white", fontWeight: "bold", display: this.state.show }}>Cowboy Care LLC<br/> 1560 Johnston Street <br/>Wheatland, WY 82201<br/> 307-269-0655</p>
            <form onKeyUp={this.keyPress.bind(this)} class="gform" id="gform" action="https://script.google.com/macros/s/AKfycbzKFmQj6wcYnNpRU-ehrnoA7ZLGrm5bJX65AhPLXnjPdw7vauzs/exec" method="post" enctype="text/plain"
            style={{
                borderRadius: "15px", padding: "3%",
                marginLeft: "13%", marginRight: "5%", fontFamily: "Tahoma, Geneva, sans-serif"
            }}>
            Name:<br />
            <input id="name" value={this.state.name} onChange={this.handleName.bind(this)} required type="text" name="name" onKeyPress={e => {
                if (e.key === 'Enter') e.preventDefault();
            }} /><br />
            E-mail:<br />
            <input id="email" value={this.state.email} onChange={this.handleEmail.bind(this)} required type="text" name="email" onKeyPress={e => {
                if (e.key === 'Enter') e.preventDefault();
            }} /><br />
            Questions:<br />
            <Textarea id="message" required name="message" value={this.state.Message} className="text" onChange={this.handleChange.bind(this)} onKeyUp={this.keyPress.bind(this)} /><br /><br />
            <input type="submit" className="button-toggle" disabled={!this.validateForm()} value="Send" onClick={this.onClick.bind(this)} />
            <input type="reset" className="button-toggle" value="Clear" onClick={this.ResetForm.bind(this)} />
                </form></div>);

        const thanks = (<h3 style={{backgroundColor: "white"}}>Thank you for submitting your request. A member of our staff will contact you.</h3>)

        return (
            <div className="container">
                <img className="horse" src="wyoheart.png" />
                {this.state.showThankYou ? thanks : form}
                </div>
            );
    }
}