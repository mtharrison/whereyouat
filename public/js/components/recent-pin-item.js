// Load modules

import React, { Component } from 'react';

// Create component

class RecentPinItem extends Component {
    render() {

        return (
            <div className="recent-pin-item">
                <dl>
                    <dt>User</dt>
                    <dd>{this.props.pin.user}</dd>
                    <dt>Lat</dt>
                    <dd>{this.props.pin.lat}</dd>
                    <dt>Lng</dt>
                    <dd>{this.props.pin.lng}</dd>
                    <dt>Desc</dt>
                    <dd>{this.props.pin.desc}</dd>
                </dl>
            </div>
        );
    }
}

export default RecentPinItem;
