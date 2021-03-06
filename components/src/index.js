import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 3:34pm"
                    content="Nice blog post!"
                    imgSrc="https://source.unsplash.com/random/150x150"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 4:49pm"
                    content="Creative and insightful"
                    imgSrc="https://source.unsplash.com/random/150x150"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 9:31am"
                    content="Cool beans"
                    imgSrc="https://source.unsplash.com/random/150x150"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
