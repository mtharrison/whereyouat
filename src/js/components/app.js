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
    logoutAttempt,
    recentPinClicked,
    logs
}) => (

    <div>
        <div className="row">
            <div className="col-md-12">
                <div className="page-header" id="header">
                    <h1>whereyouat <small>share your memorable locations</small></h1>
                    <UserStatusBar 
                        loginAttempt={loginAttempt}
                        logoutAttempt={logoutAttempt}
                        authData={auth.data}
                    />
                </div>
            </div>
        </div>

        <div className="row">
            <MapView 
                pins={pins} 
                center={mapOptions.center} 
                zoom={mapOptions.zoom} 
                updateMapPrefs={updateMapPrefs} 
                onRightClick={addPin} 
            />
            <RecentPins 
                pins={pins} 
                recentPinClicked={recentPinClicked}
            />
            <PinControls 
                removeAllPins={removeAllPins}
            />
        </div>
    </div>
);
