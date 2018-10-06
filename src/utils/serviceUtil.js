const axios = require('axios');

module.exports = {
    getCall(url, fnSuccess, fnError) {
        axios({
            url: `https://pixabay.com/api/?${url}`,
            method: 'get'
        })
        .then(response => {
            fnSuccess(response.data);
        })
        .catch(error => {
            fnError(error);
        });
    }
}
