import axios from 'axios';


const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID TZl8BkMTbYbOCyXLXUmEmxbIcqtRE6lgnqECObnJ_iE'
        },
        params: {
            query: term
        }
    });
    return response.data.results;
}

export default searchImages;