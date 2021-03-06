import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NewHead from './navigation.js';
import Home from './Home.js';
import Services from './services.js';
import ReactContactForm from './contactus';
import Aboutus from './aboutus';
import Freq from './faq';
import './index.css';

export default class rout extends Component {
    //to="swimstar996@yahoo.com" 
    render() {
        const container = () => <div><NewHead /> {this.props.children}</div>;
        const home = () => <Home />;
        const services = () => <Services />;
        const contact = () => <ReactContactForm />
        const about = () => <Aboutus />
        const freq = () => <Freq />
        const NotFound = () => <div className="container"><h1 className="notfound" style={{ marginTop: "10%" }}> You just got 404'd! </h1></div>;
        //<NewHead /><Route exact path='/aboutus' component={about} />
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={home} />
                    <Route exact path='/services' component={services} />
                    <Route exact path='/contact' component={contact} />
                    
                    <Route exact path='/frequentquestions' component={freq} />
                    <Route exact path='*' component={NotFound} />
                </Switch>
            </div>
                );


    }

}