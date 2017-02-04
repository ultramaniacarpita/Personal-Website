import axios from "axios";

var config = {
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    }
};

var Messenger = {
    post: function(url, data, success, failure){
        axios.post(url, data, config).then(function(response){
            success(response.data);
            }).catch(function(e){
            failure(e);
                })
    }
};

module.exports = Messenger;