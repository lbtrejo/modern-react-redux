import React from 'react';

class SearchBar extends React.Component {
    // Fix for 'this' in onFormSubmit method #1
    // Bind 'this' in the constructor to an instance of the SearchBar component class
    // constructor(props) {
    //     super(props);
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // }

    state = { term: '' };

    // prevent the default form behavior submission behavior
    // Fix this 'this' in onFormSubmit method #2
    // Use an arrow function in the method which binds this to the class instance
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    // Fix for 'this' in onFormSubmit method #3
    // Use an arrow function directly in the JSX itself as in line 35
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    {/* <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}> */}
                    <div className="field'">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({ term: e.target.value })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
