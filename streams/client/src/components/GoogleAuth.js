import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId:
                        '122545258049-fsg3e7krkbicvqpocv6lv1kdsnnu1v1q.apps.googleusercontent.com',
                    scope: 'email',
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button
                    className="ui red google button"
                    onClick={this.onSignOut}
                >
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button
                    className="ui red google button"
                    onClick={this.onSignIn}
                >
                    <i className="google icon" />
                    Sign In With Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;
