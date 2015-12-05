import React, { Component } from 'react';
import { throttle } from 'lodash';

export default class MapView extends Component {

    constructor(props) {

        super(props);
        this.state = { 
            markers: {}
        };
    }

    addMarkers() {

        const pins = this.props.pins;
        const markers = this.state.markers;

        // Remove unwanted markers

        Object.keys(markers).map((marker) => {

            if (!pins[marker]) {
                markers[marker].setMap(null);
                delete markers[marker];
            }
        });
        
        Object.keys(pins).map((pin) => {

            if (!markers[pin]) {
                markers[pin] = new google.maps.Marker({
                    position: new google.maps.LatLng({lat: pins[pin].lat, lng: pins[pin].lng}),
                    map: this.map
                });
            }
        });
    }

    componentDidMount() {

        this.map = new google.maps.Map(document.getElementById('map'), this.props.mapOptions);
        this.addMarkers();
        this.map.addListener('rightclick', (e) => {
            this.props.onRightClick({
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
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
                <div id="map"></div>
            </div>
        );
    }
}
