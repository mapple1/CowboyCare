import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NewHead from './navigation.js';
import Home from './Home.js';
import Services from './services.js';
import './index.css';

export default class rout extends Component {

    render() {
        const container = () => <div><NewHead /> {this.props.children}</div>;
        const home = () => <Home />;
        const services = () => <Services />;
        const NotFound = () => <h1> You just got 404'd! </h1>;
        //<NewHead />
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={home} />
                    <Route exact path='/services' component={services} />
                    <Route exact path='*' component={NotFound} />
                </Switch>
            </div>
                );


    }

}