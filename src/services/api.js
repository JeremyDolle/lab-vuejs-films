import axios from "axios";

const instance = axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=YOURAPIKEY&"
});

// instance.interceptors.response.use(
//   function(response) {
//     return response;
//   },
//   function(error) {
//     return Promise.reject(error);
//   }
// );

export default instance;
