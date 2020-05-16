import axios from "axios";
//how do I get dotenv to work? this exposes my apikey, but it won't read from .env for some reason
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyCW_0mBXLYZGip40GE6MillQdGuK4uddig";

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
};
