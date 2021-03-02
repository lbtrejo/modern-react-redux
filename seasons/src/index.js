import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null }; // state initialized; eventually we'll get this number, but set to null until that value is determined
    }

    // React requires a render() method for each component
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
            },
            (err) => {
                console.log(err);
            }
        );
        return <div>Latitude: </div>; // needs to return a single parent element
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
