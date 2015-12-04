import React, { Component } from 'react';

export default ({ pin }) => (
    
    <div className="recent-pin-item">
        <ul>
            <li><strong>Usr:-</strong> {pin.user}</li>
            <li><strong>Lat:-</strong> {pin.lat}</li>
            <li><strong>Lng:-</strong> {pin.lng}</li>
            <li><strong>Dsc:-</strong> {pin.desc}</li>
        </ul>
    </div>
);
