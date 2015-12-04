import React, { Component } from 'react';
import RecentPinItem from './recent-pin-item';

export default ({ pins }) => (

    <div className="col-md-4">
        <h3>Most recent pins</h3>
        {Object.keys(pins).map((i) => <RecentPinItem key={i} pin={pins[i]}/> )}
    </div>
);
