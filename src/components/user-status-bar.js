import React, { Component } from 'react';

export default class UserStatusBar extends Component {

    render() {

        const { authData, loginAttempt, logoutAttempt } = this.props;

        if (authData) {
            return (
                <div className="col-md-12">
                    <h3>Hello there {authData.google.displayName}</h3>
                    <button onClick={logoutAttempt}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="col-md-12">
                    <button onClick={loginAttempt}>Login with Google</button>
                </div>
            );
        }
        
        return <div></div>;
    }
};
