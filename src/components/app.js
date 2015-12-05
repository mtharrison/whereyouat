import React, { Component } from 'react';
import MapView from './map-view';
import RecentPins from './recent-pins';
import PinControls from './pin-controls';
import UserStatusBar from './user-status-bar';

export default ({ 
    pins,
    auth,
    mapOptions,
    updateMapPrefs,
    addPin,
    removeAllPins,
    loginAttempt,
    logoutAttempt
}) => (

    <div className="row">
        <UserStatusBar 
            loginAttempt={loginAttempt}
            logoutAttempt={logoutAttempt}
            authData={auth.data}
        />
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
