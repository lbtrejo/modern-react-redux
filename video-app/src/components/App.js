import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
            },
        });

        this.setState({ videos: response.data.items });
    };

    onVideoSelect = async (video) => {
        console.log('From the App!', video);
        await this.setState({ selectedVideo: video });
        console.log(this.state.selectedVideo);
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={this.onVideoSelect}
                />
            </div>
        );
    }
}

export default App;
