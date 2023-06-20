
let urlApi =  "http://localhost:8080/api/"


if ( process.env.NODE_ENV === "production") {
    urlApi = process.env.REACT_APP_API
}

module.exports = urlApi