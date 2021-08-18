var axios = require("axios");

var axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000"
  /* other custom settings */
});

module.exports = axiosInstance;