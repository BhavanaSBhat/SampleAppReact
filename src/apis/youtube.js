import axios from 'axios';

const KEY = 'AIzaSyAO1uR60KIwK9XJVEneIdcav9MA9sq6TiU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
