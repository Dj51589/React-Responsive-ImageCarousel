const axios = require('axios');

module.exports = {
    getCall(url, fnSuccess, fnError) {
        return axios.get(`https://pixabay.com/api/?${url}`)
            .then(response => {
                fnSuccess(response.data);
            })
            .catch(error => {
                fnError(error);
            });
    }
}
