import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';
import VideoDetail from './VideoDetail';

function App() {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
            },
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    useEffect(() => {
        onTermSubmit('cats');
    }, []);

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videos={videos}
                            onVideoSelect={onVideoSelect}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// class App extends React.Component {
//     state = { videos: [], selectedVideo: null };

//     componentDidMount() {
//         this.onTermSubmit('cats');
//     }

//     render() {}
// }

export default App;
