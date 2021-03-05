import axios from 'axios';

// Create a customized instance of the axios client
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8b04V07fcpQCGOHKMITjWev09iX_FQubMNU8sUHo1gw',
    },
});