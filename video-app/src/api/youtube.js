import axios from 'axios';

const KEY = 'AIzaSyD5Q4ZrkVeGhAZQiWAdFwRB_8rFrB5jKm8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
    },
});
