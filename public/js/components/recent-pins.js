// Load modules

import React, { Component } from 'react';

// Load components

import RecentPinItem from './recent-pin-item';

// Create component

class RecentPins extends Component {
    render() {

        const pinNodes = this.props.pins.map(function (pin, key) {

            return (
                <RecentPinItem key={key} pin={pin}/>
            );
        });

        return (
            <div className="col-md-4">
                {pinNodes}
            </div>
        );
    }
}

export default RecentPins;
