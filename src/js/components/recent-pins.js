import React, { Component } from 'react';
import RecentPinItem from './recent-pin-item';

export default ({ pins, recentPinClicked }) => (

    <div className="col-md-4 recent-pins">
        <h3>Most recent pins</h3>
        {Object.keys(pins).reverse().slice(0,5).map(i => (
            <RecentPinItem recentPinClicked={recentPinClicked} key={i} pin={pins[i]}/> 
        ))}
    </div>
);
