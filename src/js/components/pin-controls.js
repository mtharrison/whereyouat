import React, { Component } from 'react';

export default ({ removeAllPins }) => (

    <div className="col-md-4">
        <button onClick={removeAllPins}>Remove All Pins</button>
    </div>
);
