import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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

        return (
            <div>
                <Route path='/' Component={container}>
                    <Route exact path='/' Component={home} />
                    <Route path='/services' Component={services} />
                    <Route path='*' Component={NotFound} />
                </Route>
                </div>
                );


    }

}