import React, { Component } from 'react';
import MapView from './map-view';
import RecentPins from './recent-pins';
import PinControls from './pin-controls';

export default ({ 
    pins,
    mapOptions,
    updateMapPrefs,
    addPin,
    removeAllPins
}) => (

    <div className="row">
        <MapView 
            pins={pins} 
            center={mapOptions.center} 
            zoom={mapOptions.zoom} 
            updateMapPrefs={updateMapPrefs} 
            onRightClick={addPin} 
        />
        <RecentPins pins={pins} />
        <PinControls 
            removeAllPins={removeAllPins}
        />
    </div>
);
