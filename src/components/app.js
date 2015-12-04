import React, { Component } from 'react';
import MapView from './map-view';
import RecentPins from './recent-pins';

export default ({ pins, addPin, mapOptions, updateMapPrefs }) => (

    <div className="row">
        <MapView pins={pins} mapOptions={mapOptions} updateMapPrefs={updateMapPrefs} onRightClick={addPin} />
        <RecentPins pins={pins} />
    </div>
);
