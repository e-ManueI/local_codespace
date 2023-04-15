import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID Ogd7NEvrK0s9pqJHxdVdjzbY8hdn1YOz02V1J23MNwQ'
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;