import React, { Component } from 'react';
import { throttle } from 'lodash';

export default class MapView extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            mapPositionSet: false,
            markers: []
        };
    }

    addMarkers() {

        // Remove all markers

        this.state.markers.map(m => m.setMap(null));
        this.state.markers = [];

        // Add markers from pins

        const pins = this.props.pins;
        Object.keys(pins).map((pin) => {

            this.state.markers.push(new google.maps.Marker({
                position: new google.maps.LatLng({lat: pins[pin].lat, lng: pins[pin].lng}),
                map: this.map
            }));
        });
    }

    componentDidMount() {

        this.map = new google.maps.Map(document.getElementById('map'), this.props.mapOptions);
        this.addMarkers();
        this.map.addListener('rightclick', (e) => {
            this.props.onRightClick({
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                user: 'Test user',
                desc: 'Just a pin I added'
            });
        });

        const updateMapPrefs = () => {

            const zoom = this.map.getZoom();
            const center = {
                lat: this.map.getCenter().lat(),
                lng: this.map.getCenter().lng()
            };

            if (!zoom || !center) return;

            this.props.updateMapPrefs({ zoom, center });
        }

        const throttledCall = throttle(updateMapPrefs.bind(this), 1000);

        this.map.addListener('center_changed', throttledCall);
        this.map.addListener('zoom_changed', throttledCall);
    }

    componentDidUpdate(prevProps) {

        console.log('component updating')

        const { center, zoom } = this.props;

        if (center && center !== prevProps.center) {
            this.map.panTo(new google.maps.LatLng({lat: center.lat, lng: center.lng }));
        }
        if (zoom && zoom !== prevProps.zoom) {
            this.map.setZoom(zoom);
        }
        this.addMarkers();
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
