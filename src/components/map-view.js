import React, { Component } from 'react';
import { throttle } from 'lodash';

export default class MapView extends Component {

    constructor(props) {
        super(props);
        this.state = { mapPositionSet: false };
    }

    addMarkers(pins) {

        Object.keys(pins).map((pin) => {

            new google.maps.Marker({
                position: new google.maps.LatLng({lat: pins[pin].lat, lng: pins[pin].lng}),
                map: this.map
            })
        });
    }

    componentDidMount() {

        this.map = new google.maps.Map(document.getElementById('map'), this.props.mapOptions);
        this.addMarkers(this.props.pins);
        this.map.addListener('rightclick', (e) => {
            this.props.onRightClick({
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                user: 'Test user',
                desc: 'Just a pin I added'
            });
        });

        const updateMapPrefs = () => {

            const mapCenter = this.map.getCenter();

            const zoom = this.map.getZoom();
            const center = {
                lat: mapCenter.lat(),
                lng: mapCenter.lng()
            };

            if (!zoom || !center) return;

            this.props.updateMapPrefs({ zoom, center });
        }

        this.map.addListener('center_changed', throttle(updateMapPrefs, 1000));
        this.map.addListener('zoom_changed', throttle(updateMapPrefs, 1000));
    }

    componentDidUpdate() {

        this.addMarkers(this.props.pins);

        if(!this.state.mapPositionSet && this.props.mapOptions.center && this.props.mapOptions.zoom) {
            this.map.panTo(new google.maps.LatLng({lat: this.props.mapOptions.center.lat, lng: this.props.mapOptions.center.lng }))
            this.map.setZoom(this.props.mapOptions.zoom);
            this.state.mapPositionSet = true;
        }
    }

    render() {

        return (
            <div className="col-md-8">
                <h3>The app will remember your last viewed location</h3>
                <div id="map"></div>
            </div>
        );
    }
}
