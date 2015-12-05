import React, { Component } from 'react';

export default class UserStatusBar extends Component {

    render() {

        const { authData, loginAttempt, logoutAttempt } = this.props;

        if (authData) {
            return (
                <div className="user-status-bar">
                <button className="btn btn-primary" onClick={logoutAttempt}>Logged in as {authData.google.displayName}. Logout?</button>
                </div>
            );
        } else {
            return (
                <div className="user-status-bar">
                    <button className="btn btn-primary" onClick={loginAttempt}>Login with Google to Pin</button>
                </div>
            );
        }
        
        return <div></div>;
    }
};
