import axios from 'axios';

const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const APIKEY = '&key=AIzaSyCW_0mBXLYZGip40GE6MillQdGuK4uddig';

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};