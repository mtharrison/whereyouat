import React, { Component } from 'react';

export default ({ pin, recentPinClicked }) => (
    
    <div className="recent-pin-item" onClick={() => recentPinClicked(pin)}>
        <ul>
            <li><strong>Usr:-</strong> {pin.user}</li>
            <li><strong>Lat:-</strong> {pin.lat.toFixed(4)}, <strong>Lng:-</strong> {pin.lng.toFixed(4)}</li>
            <li><strong>Dsc:-</strong> {pin.desc}</li>
        </ul>
    </div>
);
