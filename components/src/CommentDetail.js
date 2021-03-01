import React from 'react';

const CommentDetail = ({ author, timeAgo, content, imgSrc }) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" className="image" src={imgSrc} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {author}
                </a>
                <div className="metadata">
                    <span className="date">Today at {timeAgo}</span>
                </div>
                <div className="text">{content}</div>
            </div>
        </div>
    );
};

export default CommentDetail;
