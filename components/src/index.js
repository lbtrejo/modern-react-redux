import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src="https://source.unsplash.com/random"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 3:00pm</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src="https://source.unsplash.com/random"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Bob
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 3:15pm</span>
                    </div>
                    <div className="text">Insightful</div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
