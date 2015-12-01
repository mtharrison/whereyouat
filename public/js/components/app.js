// Load modules

import React, { Component } from 'react';

// Load components

import MapView from './map-view';
import RecentPins from './recent-pins';

// Create component

class App extends Component {
    render() {

        return (
            <div className="row">
                <MapView pins={this.props.state.pins} />
                <RecentPins pins={this.props.state.pins} />
            </div>
        );
    }
}

export default App;
