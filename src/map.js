import React, { Component } from 'react';

export default class Mapping extends Component {


    componentWillMount() {
        var scr = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&callback=initMap";
        this.loadScript(scr).bind(this);
    }


    loadScript(src) {
        var tag = document.createElement('script');
        tag.async = true;
        tag.defer = true;
        tag.src = src;
        document.getElementsByTagName('body').appendChild(tag);
    }

    initMap() {
    // Create the map.
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: { lat: 44.842895, lng: -93.140324 },
        mapTypeId: 'roadmap'
    });

    // Adds the circle for the radius to the map.
    // Plug in your latitude and longitude into lat: & lng: below
    //Radius is in meters
    //Click run after you plug in your coordinates and radius
    var cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: { lat: 44.842895, lng: -93.140324 },
        radius: 100
    });
    }


    render() {
        return (<div id='map' />);
    }
}