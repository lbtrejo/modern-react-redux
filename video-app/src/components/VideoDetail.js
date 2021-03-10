import React from 'react';

const VideoDetail = ({ video }) => {
    // conditional loading on app initilization since video is initialized as null
    if (!video) {
        return <div>Loading...</div>;
    }

    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p className="description">{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
